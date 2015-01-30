function bindAll(){
	$("#accordion").accordion({
    heightStyle: "content"
    });
	$("#menu").menu();
	$("#menu").width(350);
	$("#submenu").width(250);
	$("#treeplugin").jstree({ 'core' : {
		'data' : [
		   { "id" : "1", "parent" : "#", "text" : "Parent 1" },
		   { "id" : "2", "parent" : "#", "text" : "Parent 2" },
		   { "id" : "3", "parent" : "2", "text" : "Child 1" },
		   { "id" : "4", "parent" : "2", "text" : "Child 2" },
		   { "id" : "5", "parent" : "2", "text" : "Child 3" },
		   { "id" : "6", "parent" : "2", "text" : "Child 4" },
		   { "id" : "7", "parent" : "#", "text" : "Parent 3" },
		   { "id" : "8", "parent" : "#", "text" : "Parent 4" },
		]
	}});
	//D3 tree related stuff
	width = 800,
    height = 300;

	cluster = d3.layout.cluster()
		.size([height, width-120]);

	diagonal = d3.svg.diagonal()
		.projection(function(d) { return [d.y, d.x]; });

	svg = d3.select("#d3tree").append("svg")
		.attr("width", width)
		.attr("height", height)
	    .append("g")
		.attr("transform", "translate(40,0)");

	rootData =  JSON.parse('{"name": "Root", "children": [{"name": "Child1", "children": [{"name": "Child2"}]}, {"name": "Child3", "children": [{"name": "Child4", "children":[{"name": "Child7"}, {"name": "Child8"}, {"name": "Child9"}]}]}, {"name": "Child5"}, {"name": "Child6"}]}');
	
	nodes = cluster.nodes(rootData),
		links = cluster.links(nodes);

	link = svg.selectAll(".link")
		.data(links)
		.enter().append("path")
		.attr("class", "link")
		.attr("d", diagonal);

	node = svg.selectAll(".node")
		.data(nodes)
		.enter().append("g")
		.attr("class", "node")
		.attr("transform", function(d) { return "translate(" + d.y + "," + d.x + ")"; })

	node.append("circle")
		.attr("r", 4.5);

	node.append("text")
		.attr("dx", function(d) { return d.children ? -8 : 8; })
		.attr("dy", 3)
		.style("text-anchor", function(d) { return d.children ? "end" : "start"; })
		.text(function(d) { return d.name; });

	d3.select(self.frameElement).style("height", height + "px");
}