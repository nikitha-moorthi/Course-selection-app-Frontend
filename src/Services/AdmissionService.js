import axios from "axios";

const apiPath = "http://localhost:9999/api/v1";

class AdmissionService {

    saveAdmission(admission){
        return axios.post(apiPath+"/admissions", admission);
    }

    getAllAdmissions(){
        return axios.get(apiPath+'/admissions');
    }

    getAdmission(id){
        return axios.get(apiPath+'/admissions/'+id);
    }

    getAdmissionById(id){
        return axios.get(apiPath+'/admissions/admission/'+id);
    }

    updateAdmission(id, admission){
        return axios.put(apiPath+"/admissions/"+id ,admission);
    }

    deleteAdmission(id){
        console.log("Admission ID TO DELTE" + id);
        return axios.delete(apiPath+"/admissions/"+id);
    }

    getAdmissionByApplicantID(applicantid){
        return axios.get(apiPath+'/admissions/applicant/'+applicantid);
    }

}

export default new AdmissionService;