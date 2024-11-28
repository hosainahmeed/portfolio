import { AiOutlineCheckCircle } from 'react-icons/ai';

function Timelines() {
  return (
    <div>
      <ul className="timeline">
        <li>
          <div className="timeline-start timeline-box bg-[#1F1F1F] text-white">
            High School -- Technical school and college
          </div>
          <div className="timeline-middle">
            <AiOutlineCheckCircle className="h-5 w-5 text-white" />
          </div>
          <hr className='bg-white' />
        </li>
        <li>
          <hr className='bg-white' />
          <div className="timeline-middle">
            <AiOutlineCheckCircle className="h-5 w-5  text-white" />
          </div>
          <div className="timeline-end timeline-box bg-[#1F1F1F] text-white">Diploma in Computer Science</div>
          <hr className='bg-white' />
        </li>
        <li>
          <hr className='bg-white' />
          <div className="timeline-start timeline-box bg-[#1F1F1F] text-white">Internship at people N Tech</div>
          <div className="timeline-middle">
            <AiOutlineCheckCircle className="h-5 w-5 text-white" />
          </div>
          <hr className='bg-white' />
        </li>
        <li>
          <hr className='bg-white' />
          <div className="timeline-end timeline-box bg-[#1F1F1F] text-white">Certification in Web Development from programing hero</div>
          <div className="timeline-middle">
            <AiOutlineCheckCircle className="h-5 w-5 text-white" />
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Timelines;
