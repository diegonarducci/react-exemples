window.components.itemList = React.createClass({displayName: "itemList",
	render: function() {
	  var items = this.props.items;
	  var rows = items.map(function(item) {
	    return (
	      React.createElement("li", null, "item")
	    );
	  });

	  return (
	    React.createElement("ul", null, 
	      "rows"
	    )
	  );
	}
});