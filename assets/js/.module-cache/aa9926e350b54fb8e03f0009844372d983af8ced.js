var Avatar = React.createClass({displayName: "Avatar",
  render: function() {
    return (
      React.createElement("div", null, 
        React.createElement(ProfilePic, {username: this.props.username}), 
        React.createElement(ProfileLink, {username: this.props.username})
      )
    );
  }
});

var ProfilePic = React.createClass({displayName: "ProfilePic",
  render: function() {
    return (
      React.createElement("img", {src: 'http://graph.facebook.com/' + this.props.username + '/picture'})
    );
  }
});

var ProfileLink = React.createClass({displayName: "ProfileLink",
  render: function() {
    return (
      React.createElement("a", {href: 'http://www.facebook.com/' + this.props.username}, 
        this.props.username
      )
    );
  }
});

var app = function(){
	var init = function(){
		React.render(
      React.createElement("ul", null, 
        React.createElement("li", null, 
		      React.createElement(Avatar, {username: "narduccidiego"})
        ), 
        React.createElement("li", null, 
          React.createElement(Avatar, {username: "palloi"})
        ), 
        React.createElement("li", null, 
          React.createElement(Avatar, {username: "marcos.toledo.1297"})
        ), 
        React.createElement("li", null, 
          React.createElement(Avatar, {username: "maguinho.froes"})
        )
      ),
		  document.getElementById('example')
		);
	};

	return {init: init};
}();

window.onload = function(){app.init();};