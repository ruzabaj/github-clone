import axios from "axios";
export const baseUrl = process.env.GITHUB_BASE_URL;
const token ='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';


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
    //  {data},
      {
        headers: {
            "Authorization" : `Bearer ${token}`
        },
    })
    .then(res => {
        console.log(res.data);
    })
    .catch((error) => {
          console.log(error)
    });   
}

// const token = JSON.parse(sessionStorage.getItem('data'));
// const token = user.data.id; /*take only token and save in token variable*/

