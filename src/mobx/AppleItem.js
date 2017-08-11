import React, {
	Component
} from 'react';
import {
	connect
} from 'react-redux';
import '../styles/appleBasket.css';
class AppleItem extends Component {

	render() {
		let {
			state,
			action
		} = this.props;
		let mockState = {
			id: 1,
			weight: 278,
			isEaten: false
		};
		let mockActions = {
				eatApple: id => console.log("eatApple", id)
			}
			// let actions = mockActions;
		if (state === undefined) state = mockState;
		if (state.isEaten) return null;
		return (
			<div className="appleItem">
		 		<div className="img"><img src={require("../img/apple.png")}/></div>
		 		<div className="name">
	 				<div className="head">红苹果{state.id}号</div>
	 				<div className="content">{state.weight}克</div>
		 		</div>
		 		<div className="btn-eat">
					<button onClick={()=>action.eatApple(state.id)}>吃掉</button>
		 		</div>
		 	</div>
		)
	}
};
export default AppleItem