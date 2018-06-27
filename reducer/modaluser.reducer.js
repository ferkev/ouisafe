export default function modaluser(state=true, action) {
  if (action.type == 'hideModalSignin') {
    return false
  } else {
    return state;
  }
}
