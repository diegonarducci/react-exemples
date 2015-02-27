var ITEMLIST = React.createClass({displayName: "ITEMLIST",
	render: function() {
	  var items = this.props.items;
	  var rows = items.map(function(item) {
	    return (
	      React.createElement("li", null, item)
	    );
	  });

	  return (
	  	React.createElement("div", null, 
		  	React.createElement("h1", null, "Seja Bem Vindo ao AngularJS com ReactJS"), 
		    React.createElement("ul", {className: "full"}, 
		      rows
		    )
		  )
	  );
	}
});