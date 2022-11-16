import axios from "axios";

const apiPath = "http://localhost:9999/api/v1";

class CourseService {

    getAllCourses(){
        return axios.get(apiPath+'/courses');
    }

    getCourse(id){
        return axios.get(apiPath+'/courses/'+id);
    }

    updateCourse(id, course){
        return axios.put(apiPath+"/courses/"+id ,course);
    }

    deleteCourse(id){
        return axios.delete(apiPath+"/courses/"+id);
    }

    saveCourse(course){
        return axios.post(apiPath+"/courses", course);
    }

}
export default new CourseService;