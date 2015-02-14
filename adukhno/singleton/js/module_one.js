var module_one = (function(){

	var innerModule;

	var flag = function fn_flag() {
		return true;
	};

	var getInnerModule = function fn_getInnerModule() {
		return innerModule;
	};

	var loadInnerModule = function fn_loadInnerModule() {
		innerModule = (function () {
			var flag = function innerFlag() {
				return true;
			};
			return {
				flag: flag
			};
		}());
	};
	return {
		flag: flag,
		getInnerModule: getInnerModule,
		loadInnerModule: loadInnerModule
	};
}());
