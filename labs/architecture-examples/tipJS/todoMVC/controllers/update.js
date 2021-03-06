/*
 * tipJS - Javascript MVC Framework ver.1.21
 * 
 * Copyright 2012.07 SeungHyun PAEK
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * HomePage: http://www.tipjs.com
 * Contact: http://www.tipjs.com/contact
 */

tipJS.controller({
	name : "todoMVC.update",

	invoke : function( input ){
		tipJS.log(this.name);

		var globalTodos = this.loadModel("globalTodos", true),
			renderer = this.loadView("renderer"),
			utils = this.loadModel("utils"),
			val = $.trim( $(input).removeClass('editing').val() );

		globalTodos.getTodo( input, function( i ) {
			if ( val ) {
				globalTodos.todos[ i ].title = val;
			} else {
				globalTodos.todos.splice( i, 1 );
			}
			renderer.updateView( globalTodos );
			utils.store( globalTodos.STORE_KEY, globalTodos.todos );
		});
	}
});
