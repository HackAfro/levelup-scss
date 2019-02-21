import axios from 'axios';

axios.post('http://localhost:4000/ping', {
  lat: 403,
  lng: 433
}).then((data) => {
  console.log(data.data);
})

axios({
  method: 'POST',
  url: 'https://randomuser.me/api/',
  headers: {
    'content-type': 'application/json',
    'Authentication': 'bearer',
    'X-auth-toke': 'ejrje'
  },
  params: {
    limit: 10,
    offset: 2
  },
  body: {
    
  }
}).then((data) => {
  console.log(data.headers)
}).catch(() => {

})