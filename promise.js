const testNum = num => {
  return new Promise((resolve, reject) => { 
    if(num >= 10) {
      resolve('Success!')
    }
    else {
      reject('Error!')
    }
  })
}

testNum(15)
  .then(result => console.log(result))
  .catch(error => console.log(error))

// 15 is greater than 10, success!

testNum(5)
  .then(result => console.log(result))
  .catch(error => console.log(error))

// 5 is less than 10, error!

const makeAllCaps = input => {
  const processed = input.map(item => {
    return new Promise((resolve, reject) => {
      if(typeof item === 'string') {
        resolve(item.toUpperCase())
      } else {
        reject('not a string!')
      }
    })
  })
  return Promise.all(processed)
}

const sortWords = array => array.sort((a, b) => a > b)


makeAllCaps(['wowow', 'pants', 'bird'])
  .then(words => sortWords(words))
  .then(result => console.log(result))
  .catch(error => console.log(error))
  
// ['BIRD', 'PANTS', 'WOWOW']

makeAllCaps(['wowow', 5, 'bird'])
  .then(words => sortWords(words))
  .then(result => console.log(result))
  .catch(error => console.log(error))
  
// 'No, the array you passed in contained an element that was not a string!'