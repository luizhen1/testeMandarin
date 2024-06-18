const keyValue = "c4f23e09-2069-45a7-bab2-8e87fa5f3d30"

const middlewares = {

  authenticate(req, res, next){
      
    const apiKey = req.headers['apikey']; 
      console.log('apikey',req)
      if(!apiKey)
          res.status(400).send('No token')

      if(apiKey !== keyValue)
          return res.status(401).send('Not allowed')
      
      next()


  }

}

module.exports = middlewares;