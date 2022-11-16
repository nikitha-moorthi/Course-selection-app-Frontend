import axios from "axios";

const apiPath = "http://localhost:9999/api/v1";

class ApplicantService {

    getApplicant(applicantId) {
        return axios.get(apiPath + '/applicants/' + applicantId);
    }

    saveApplicant(applicant) {
        return axios.post(apiPath + "/applicants", applicant);
    }

    getAllApplicant(){
        return axios.get(apiPath+'/applicants');
    }

    updateApplicant(id, applicant){
        return axios.put(apiPath+"/applicants/"+id ,applicant);
    }

}
export default new ApplicantService;