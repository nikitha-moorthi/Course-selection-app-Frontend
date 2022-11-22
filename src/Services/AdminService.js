import axios from "axios";

const apiPath = "http://localhost:9999/api/v1";

class AdminService {

    getAdmin(id){
        return axios.get(apiPath+'/admins/'+id);
    }

    getAllAdmin(){
        return axios.get(apiPath+'/admins');
    }


    updateAdmin(id, admin){
        return axios.put(apiPath+"/admins/"+id ,admin);
    }

    deleteAdmin(id){
        return axios.delete(apiPath+"/admins/"+id);
    }

    saveAdmin(admin){
        return axios.post(apiPath+"/admins", admin);
    }

    updateAdmissionStatus(id, admission){
        return axios.put(apiPath+"/admins/admissions/"+id ,admission);

    }

}
export default new AdminService;