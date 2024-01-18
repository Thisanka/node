class user {
    id;
    name;
    password;

login = () =>
{
console.log("login successfully"+""+this.name);
}

}


const user1 = new user();
user1.id=11
user1.name = "thisanka"
user1.password = "THISANKA"

console.log(user1);
user1.login();