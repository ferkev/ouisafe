export default function(state={}, action) {
	if (action.type == 'newContact') {
  console.log("je suis bien aarrivé dans le reducer : ",action.contact)
		return action.contact
	}else{
		return state;
	}
}
