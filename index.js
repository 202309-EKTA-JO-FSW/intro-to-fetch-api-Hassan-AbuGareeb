async function fetchUserData(){
    try{
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const userData = await response.json();
    const res =userData.map((user, index) => {
        return Object.assign({},user,{
            name: user.name+ " " + index,
            username: user.username+ " " +index,
            address:{
                ...user.address,
                street: user.address.street+ " " + index
            },
            email: user.email+ " " + index,
            phone: user.phone+ " "+index,
            company:{
                ...user.company,
                name:user.company.name+ " "+index
            },
            website: user.website+ " "+index,
        }, )
    //    const keys =Object.keys(user);
    //    for(const key in user){
    //     if(typeof user[key] === 'object'){
    //         user[key][0]+=" "+index;
    //     }
    //     user[key] += " " + index;
    //    }

    });
    console.log(res);

    const fileterd= userData.filter((user) => user.email.endsWith('.biz'));
    //console.log(fileterd)
        userData.sort()
    const sortedUsers=userData.sort((a, b) => {
        let nameOfA = a.name.toLowerCase(),
            nameOfB = b.name.toLowerCase();
    
        if (nameOfA < nameOfB) {
            return -1;
        }
        if (nameOfA > nameOfB) {
            return 1;
        }
        return 0;
    });;
        // console.log(sortedUsers);
}catch(error){
    console.log("error:", error)
}



}


console.log(fetchUserData());