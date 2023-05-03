import axios from "axios";

axios.interceptors.response.use(res=>res, async error =>{
    if(error.response.status === 401){
   
        const refresh = JSON.parse(localStorage.getItem("user"))
       
       
        const response = await axios.post('https://eventplanner.pruthviraj2121.repl.co/auth/refresh/', refresh)
        
        if(response.status ===200){
           
            // localStorage.setItem("user",JSON.stringify(response.data.tokens))
            console.log(response.data.access)
            axios.defaults.headers.common['Authorization'] = `Bearer ${response.data.access}`

            return axios(error.config);
        }
            
        
    }

    return error;
})