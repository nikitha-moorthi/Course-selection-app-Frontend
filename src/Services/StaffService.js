import axios from "axios";

const apiPath = "http://localhost:9999/api/v1";

class StaffService {

    getStaff(id){
        return axios.get(apiPath+'/staffs/'+id);
    }

    getAllStaff(){
        return axios.get(apiPath+'/staffs');
    }

    updateStaff(id, staff){
        return axios.put(apiPath+"/staffs/"+id ,staff);
    }

    deleteStaff(id){
        return axios.delete(apiPath+"/staffs/"+id);
    }

    saveStaff(staff){
        return axios.post(apiPath+"/staffs", staff);
    }
}
export default new StaffService;