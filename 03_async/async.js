const axios = require('axios')

class Ajax {
  static echo(data) {
    return new Promise((resolve,reject) => {
      setTimeout(() => {
        if (data) {
          resolve(data)
        } else {
          reject(new Error('error'))
        }
      }, 150)
    })
  }

  static get() {
    try {
      const response = await.get('https://jsonplaceholder.typicode.com/todos')
      return response.data
    } catch(err) {
      console.log(err)
    }
  }
}

module.exports = Ajax