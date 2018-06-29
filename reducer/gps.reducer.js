export default function(state={}, action) {
	if (action.type == 'newgps') {
  console.log("je suis bien arrivé dans le reducer : ",action.gps)
		return action.gps
	}else{
		return state;
	}
}
