import React, {Component} from 'react';

export class ValueInput extends Component {
	constructor(props) {
		super(props); 

		this.state = {
			fieldValue: 0
		}
	}

	handleChange = (e) => {
		this.setState(
			{fieldValue: e.target.value}, 
			() => this.props.changeCallback(this.props.id, this.state.fieldValue)
		); 
	}

	render() {
		return (
			<div className="form-group p-2">
				<label>
					Value #{this.props.id}
					<input
						className="form-control"
						value={this.state.fieldValue}
						onChange={this.handleChange}
					/>
				</label>
			</div>
		)
	}
}
