import { AiOutlineCheckCircle } from 'react-icons/ai';

function Timelines() {
  return (
    <div>
      <ul className="timeline">
        <li>
          <div className="timeline-start timeline-box text-black">
            High School Diploma
          </div>
          <div className="timeline-middle">
            <AiOutlineCheckCircle className="h-5 w-5 text-white" />
          </div>
          <hr />
        </li>
        <li>
          <hr />
          <div className="timeline-middle">
            <AiOutlineCheckCircle className="h-5 w-5 text-white" />
          </div>
          <div className="timeline-end timeline-box text-black">Bachelor’s Degree in Computer Science</div>
          <hr />
        </li>
        <li>
          <hr />
          <div className="timeline-start timeline-box text-black">Internship at Tech Company</div>
          <div className="timeline-middle">
            <AiOutlineCheckCircle className="h-5 w-5 text-white" />
          </div>
          <hr />
        </li>
        <li>
          <hr />
          <div className="timeline-middle">
            <AiOutlineCheckCircle className="h-5 w-5 text-white" />
          </div>
          <div className="timeline-end timeline-box text-black">Master’s Degree in Data Science</div>
          <hr />
        </li>
        <li>
          <hr />
          <div className="timeline-start timeline-box text-black">Certification in Web Development</div>
          <div className="timeline-middle">
            <AiOutlineCheckCircle className="h-5 w-5 text-white" />
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Timelines;
