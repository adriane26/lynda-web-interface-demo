import React from 'react';
var createReactClass = require('create-react-class');

var AppointmentsList = createReactClass({
	getInitialState() {
		return {
			data: [{
				petName: "Spot",
				petOwner: "Constance Smith",
				aptDate: "2017-07-24 08:30",
				aptNotes: "This German Shepherd is having some back pain"
				},
				{
				petName: "Goldie",
				petOwner: "Barot Bellingham",
				aptDate: "2017-07-22 15:50",
				aptNotes: "Parrot won't talk"
				},
				{
				petName: "Mittens",
				petOwner: "Hillary Goldwyn",
				aptDate: "2017-07-21 9:15",
				aptNotes: "Cat has excessive hairballs"
				},
				{
				petName: "Blueberry",
				petOwner: "Hassum Harrod",
				aptDate: "2017-07-20 15:30",
				aptNotes: "This Chihuahua has not eaten for three days and is lethargic"
			}]
		}
	},
	render() {
		var filtered = this.state.data;
		filtered = filtered.map(function(item, index){
			return (
				<li className="pet-info media-body" key={index}>
					<div className="pet-head">
						<span className="pet-name">{this.state.data[index].petName}</span>
						<span className="apt-date pull-right"> {this.state.data[index].aptDate}</span>
					</div>
					<div className="owner-name">
						<span className="label-item">{this.state.data[index].petOwner}</span>
					</div>
					<div className="apt-notes">{this.state.data[index].aptNotes}</div>
				</li>
			);
		}.bind(this));
		return (
			<div>
				<div className="item-list media-list">
					<ul className="item-list media-list">{filtered}</ul>
				</div>
			</div>
		);
	}
});

export default AppointmentsList;