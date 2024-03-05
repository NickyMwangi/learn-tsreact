export function ConditionsRendering(user: any) {
  //option 1
  // if (user.isLoggedIn) {
  //   return <p> You're logged in Mr. {user.name}</p>;
  // } else {
  //   return <p>Ooooops!!! Not logged In</p>;
  // }
  //option 2
  let successLogin = <p> You're logged in Mr. {user.name}</p>;
  let failedLoggin = <p>Ooooops!!! Option 2 Not logged In</p>;
  return user.isLoggedIn ? successLogin : failedLoggin;
}
