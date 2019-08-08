const context = {
    users : null,
    index : null,
    a : null,
}


window.onload = async () => {

    await    getUsers();

renderUser();
}
const getUsers = async () => {

    const usersAPI = await fetch('http://dummy.restapiexample.com/api/v1/employees')
    const userData = await usersAPI.json();
    const users = userData;    
    context.users = users;
}

const renderUser = () => {
    var ulUsers = document.getElementById("list-User");
    console.log(context.users);
    for ( const i of context.users)
    {
        // const liUser = `<li>${i.id}</li>`;
        // ulUsers += liUser;
        
    }
    
    
    
}