var ITEMLIST = React.createClass({
	render: function() {
	  var items = this.props.items;
	  var rows = items.map(function(item) {
	    return (
	      <li>{item}</li>
	    );
	  });

	  return (
	  	<div className="item-list">
		  	<h1>Seja Bem Vindo ao AngularJS com ReactJS</h1>
		    <ul className="full">
		      {rows}
		    </ul>
		  </div>
	  );
	}
});