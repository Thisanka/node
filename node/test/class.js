class user {
constructor(id,name,password)
{

    this.id = id;
    this.name = name;
    this.password = password;

    
}

login()
{
    console.log("login successfully"+this.name );
}


}

const user1 = new user()
{
    user1.id = "EM001"
    user1.name = "Thisanka"
    user1.password ="Pass123"
}

console.log(user1);

for(let x in user)
{
    console.log(x);
}

const user2 = new user("EM002","Ann","Pass345");
console.log(user2);

user1.login();
user2.login();