function getFirstTaskData(){
	var arr = [
		{name: "Vasya", age: 15, active:true},
		{name: "Petya", age: 22, active: false},
		{name: "Masha", age: 30 , active: true},
		{name: "Igor", age: 15 , active: true},
	];
	return JSON.stringify(arr, null, 2);
}

function falsePredicate (el){
    return el["active"] === false;
}

function construct(memo, el){
	var defaultTemplate = _.template("&<%=parameterName%>=<%=parameterValues()%>");
	var arrayTemplate = _.template("<% _.each(parameterValues(), function(el, i) { %>&<%=parameterName%>[<%=i%>]=<%=el%><% }); %>");
    memo += _.isArray(el['parameterValues']()) ? arrayTemplate(el) : defaultTemplate(el);
    return memo;
}

function taskOneSubtaskOneCallback(){
	var arr = JSON.parse($("#firstTaskJSON").val());
	var result = _.some(arr, falsePredicate);
	
	if (result===true){
		$("#taskOneResult").html("<span class='label label-success'>True</span>");
	} else{
		$("#taskOneResult").html("<span class='label label-danger'>False</span>");
	}
	
	$("#taskOneResult").dialog();
}

function taskOneSubtaskTwoCallback(){
	var arr = JSON.parse($("#firstTaskJSON").val());
	var result = _.chain(arr).filter(_.negate(falsePredicate)).sortBy("name").value();
	var data = {'result': result};
	var template = _.template("<table class='table'><th>Name</th><th>Age</th><th>Active</th><% _.each(result, function(el) { %><tr><td><%=el['name']%></td><td><%=el['age']%></td><td><%=el['active']%></td></tr><% }); %></table>");
	
	$("#taskOneResult").html(template(data));
	$("#taskOneResult").dialog({height:'auto', width:'auto'});
}

function taskOneSubtaskThreeCallback(){
	var arr = JSON.parse($("#firstTaskJSON").val());
	var result = _.groupBy(arr, "active");
	var template = _.template("<table class='table'><th>Name</th><th>Age</th><th>Active</th><% _.each(data, function(el) { %><tr><td><%=el['name']%></td><td><%=el['age']%></td><td><%=el['active']%></td></tr><% }); %></table>");
	
	$("#taskOneResult").html(template({'data':result[true]})+template({'data':result[false]}));
	$("#taskOneResult").dialog({height:'auto', width:'auto'});
}

function taskTwoCallback(){
	var selectedParameters = eval($("#secondTaskJSON").val());	
	var res = _.chain(selectedParameters).filter(function(el){return el['parameterValues']() !== null}).indexBy('parameterName').reduce(construct, "").value().substring(1);
	
	$("#taskTwoResult").text(res);
	$("#taskTwoResult").dialog({height:'auto', width:'auto'});
}

function bindAll(){
	$("#firstTaskJSON").val(getFirstTaskData());
	$("#taskOneInvokeSubTaskOne").click(taskOneSubtaskOneCallback);
	$("#taskOneInvokeSubTaskTwo").click(taskOneSubtaskTwoCallback);
	$("#taskOneInvokeSubTaskThree").click(taskOneSubtaskThreeCallback);
	$("#taskTwoInvoke").click(taskTwoCallback);
}