React.render(
  React.createElement("header", null, 
  	React.createElement("h1", null, "Seja Bem Vindo ao React"), 
  	React.createElement("h2", null, "Subtitulo"), 
  	React.createElement("ul", null, 
  		React.createElement("li", null, "Item 1"), 
  		React.createElement("li", null, "Item 2")
  	)
  ),
  document.getElementById('example')
);