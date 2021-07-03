
const week = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
const month = [];


async function getUsers() {
    try{
        const res = await fetch('https://cors.io/?https://date.nager.at/api/v2/AvailableCountries');
        const apiUserData = await res.json();
        return apiUserData;
        const newArr = [];
        // for(index in apiUserData.data){
        //     newArr.push(apiUserData.data[index]);
        // }
     
        // return [newArr, apiUserData.data.length];
    } catch (e){
        console.error(`Whoops, Error: ${e}`);
    }

}

getUsers().then(data => {
    console.log(data);
    const root = document.createElement('div');
    root.setAttribute('id', 'users');
    document.body.appendChild(root);
    for(let index=0; index < data[1]; index++){
        let newUser = document.createElement('div');
        newUser.textContent = data[0][index].name;
        root.appendChild(newUser);
    }
})




for(i=0; i < 4; i++){
    month.push(week);
}

console.log(week);
console.log(month);
