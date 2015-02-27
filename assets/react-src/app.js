var Avatar = React.createClass({
  render: function() {
    return (
      <li>
        <ProfilePic username={this.props.username} />
        <ProfileLink username={this.props.username} />
      </li>
    );
  }
});

var ProfilePic = React.createClass({
  render: function() {
    return (
      <img src={'http://graph.facebook.com/' + this.props.username + '/picture'} />
    );
  }
});

var ProfileLink = React.createClass({
  render: function() {
    return (
      <a href={'http://www.facebook.com/' + this.props.username}>
        {this.props.username}
      </a>
    );
  }
});

var app = function(){
	var init = function(){
		React.render(
      <ul>
	      <Avatar username="narduccidiego" />
        <Avatar username="palloi" />
        <Avatar username="marcos.toledo.1297" />
        <Avatar username="maguinho.froes" />
      </ul>,
		  document.getElementById('example')
		);
	};

	return {init: init};
}();

window.onload = function(){app.init();};