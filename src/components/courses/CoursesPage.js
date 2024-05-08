import React, {useState} from "react";
import { useDispatch, useSelector } from 'react-redux';
import { createCourse } from "../../redux/actions/courseActions";

const CoursesPage = () => {
  const [course, setCourse] = useState({});
  const courses = useSelector(state => state.courses);
  const dispatch = useDispatch();

  const handleChange = (event) => {
    setCourse({...course, title: event.target.value});
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(createCourse(course));
    setCourse({});
  }

  return (
    <div className="row">
      <div className="col-6 offset-3">
        <form onSubmit={handleSubmit} >
          <h4 className="mt-3">Add Course</h4>

          <div className="input-group my-4">
            <input type="text" className="form-control" value={course.title} onChange={handleChange} placeholder="Course Name"  />
            <input type="submit" value="Save" className="btn btn-outline-secondary" id="button-addon2"/>
          </div>

          {
            courses &&
            <ul className="list-group list-group-flush">
              {
                  courses?.map(course => (
                    <li key={course.title} className="list-group-item">{course.title}</li>
                  ))
              }
              
            </ul>
          }

        </form>
      </div>
    </div>
  )
};

export default CoursesPage;
