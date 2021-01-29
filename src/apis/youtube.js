import axios from 'axios';

const KEY = 'AIzaSyA0-iUmU_kvnH_3DRHa_AVVgD1A_-0zK7A';

export default axios.create({
   baseURL: 'https://www.googleapis.com/youtube/v3',
   params:{
       part:'snippet',
       maxResults: 5,
       key:KEY

   }
});

// This is Api key of youtube wich allow us to make a request betwen an api