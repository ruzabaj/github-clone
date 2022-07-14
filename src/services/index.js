import axios from "axios";
export const baseUrl = process.env.GITHUB_BASE_URL;
export const token =process.env.TOKEN;


export const userDetail =async id=>{
    const result= await axios.get(`$(baseUrl+id)`)
    return result
}

export const starredDetail =async id=>{
    const result= await axios.get(`$(baseUrl+id)/starred`)
    return result
}
export const repoDetail =async id=>{
    const result= await axios.get(`$(baseUrl+id)/repos`)
    return result
}
export const projectDetail =async id=>{
    const result= await axios.get(`$(baseUrl+id+/projects)`)
    return result
}

export const updateDetail =async id =>{
    axios.patch(`https://api.github.com/user/ruzabaj`,
      {
        headers: {
            'content-type': 'application/json',
            "Authorization" : `Bearer ${token}`,
        },
    })
    .then(res => {
        console.log(res.data);
    })
    .catch((error) => {
          console.log(error)
    });   
}
const getRepo = async ()=>{
const response = await axios.get('https://api.github.com/users/ruzabaj/repos');
return response;
}
export const profileServices = {
    getRepo,
}

