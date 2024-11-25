import { AiOutlineCheckCircle } from 'react-icons/ai';

function Timelines() {
  return (
    <div>
      <ul className="timeline">
        <li>
          <div className="timeline-start timeline-box text-black">
            High School -- Technical school and college
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
          <div className="timeline-end timeline-box text-black">Diploma in Computer Science</div>
          <hr />
        </li>
        <li>
          <hr />
          <div className="timeline-start timeline-box text-black">Internship at people N Tech</div>
          <div className="timeline-middle">
            <AiOutlineCheckCircle className="h-5 w-5 text-white" />
          </div>
          <hr />
        </li>
        <li>
          <hr />
          <div className="timeline-end timeline-box text-black">Certification in Web Development from programing hero</div>
          <div className="timeline-middle">
            <AiOutlineCheckCircle className="h-5 w-5 text-white" />
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Timelines;
