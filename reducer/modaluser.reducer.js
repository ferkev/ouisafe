export default function(state=true, action) {
  if (action.type === 'hideModalSignin') {
    return false
  } else {
    return state;
  }
}
