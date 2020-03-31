import axios from 'axios';

const baseUrl = 'http://localhost:3001/ancedotes';

const getAll = async() => {
    const res = await axios.get(baseUrl);
    return res.data;
}

const postAncedote = async(content) => {
    const newAncedote = {
        content,
        id: Math.floor(Math.random()*100000).toString(),
        votes: 0
    }

    const res = await axios.post(baseUrl, newAncedote);
    return res.data;
}

const voteA = async(id) => {
    const res = await axios.get(`${baseUrl}/${id}`);
    const response = await axios.patch(`${baseUrl}/${id}`,{votes: res.data.votes+1})
    return response.data;
}

export {getAll, postAncedote, voteA}