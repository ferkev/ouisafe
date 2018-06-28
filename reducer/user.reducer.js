export default function(state={}, action) {
	if (action.type == 'userSignIn') {
		return action.user 
	}else if (action.type== 'userSignUp') {
		return action.user
	}else{
		return state;
	}
}