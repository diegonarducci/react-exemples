React.render(
  React.createElement("header", null, 
  	React.createElement("h1", null, "Seja bem Vindo ao React"), 
  	React.createElement("h2", null, "Sub título"), 
  	React.createElement("ul", null, 
  		React.createElement("li", null, "Item 1"), 
  		React.createElement("li", null, "Item 2")
  	)
  ),
  document.getElementById('example')
);