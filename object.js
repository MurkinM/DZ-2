const user = {
    age: 16,
    name: 'Dean Azimbaev'
    }

user.age = 25
user.name = "Roman Zaviyazkin"

console.log(user)

const user1 = {
    age: 23,
name: "Dean"
};
const user2 = {
age: 23
};
const user3 = {
age: 23,
name: ''
}
const user4 = {
age: '',
name: ''
}
const user5 = {
age: 23,
name: "Dean"
}

function hasRequiredFields(){
    typeof user1.age == 'Number' && typeof user1.name == 'String' 
    ? console.log(user1) :  console.log(false, "в объекте отсутвуют необходимые поля")
}

hasRequiredFields()


