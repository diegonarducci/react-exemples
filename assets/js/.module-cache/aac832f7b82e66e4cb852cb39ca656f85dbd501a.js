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
		  React.createElement(Avatar, {username: "diegonarducci"}),
		  document.getElementById('example')
		);
	};

	return {init: init};
}();

console.log(window);
window.onload = function(){ alert('oi');};

// window.onload = function(){
// 	app.init();
// };