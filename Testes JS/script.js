function getAdms(map){
    let admins = []
    for([key, value] of map){
      if(value == 'Admin') {
          admins.push(key)
      }
    }
    return admins;
}

const usuarios = new Map();

usuarios.set('Fabin', 'Admin')
usuarios.set('Rafaela', 'Admin')
usuarios.set('Jonas', 'User')
usuarios.set('Maria', 'Admin')

console.log(getAdms(usuarios))