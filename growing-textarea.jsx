var React = require("react");

var GrowingTextarea = React.createClass({
	adjustSize: function(){
		var textarea = this.refs.the_input.getDOMNode();
		var prev_height = textarea.style.height;
		if(textarea.value.length){
			while(textarea.clientHeight == textarea.scrollHeight && textarea.rows>1){
				textarea.rows--;
			}
			while(textarea.clientHeight < textarea.scrollHeight){
				textarea.rows++;
			}			
		}

		//textarea.rows++; //to convey that you can enter more text
	},
	onChange: function(event){
		this.props.onChange(event);
		this.adjustSize();
	},
	componentDidMount: function(){
		var self = this;
		this.adjustSize();
		setTimeout(this.adjustSize.bind(this), 100); //for initial render
	},
	render: function(){
		return (
			<textarea
				ref="the_input"
				className={this.props.className}
				value={this.props.value}
				onChange={this.onChange}
				style={{resize: "none"}}
			/>
		)
	}
})

module.exports = GrowingTextarea;