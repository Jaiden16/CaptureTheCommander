export const getApi = () =>{
    if(window.location.hostname === "localhost"){
        return "http://localhost:3100"
    }else{
        return "https://capture-the-commander.herokuapp.com"
    }
}