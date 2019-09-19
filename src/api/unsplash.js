import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID ce8b751251a2a191e0f29e895fb2ba42fe0c81cccf4117dc9da708fb4ca02f73'
    }
});