import './output.css'

function OutputForm({personal, education, experience}){
    return (
        <div className='output-box'>
            <div className='output'>
            <div className='name-center'>
                <h1 className='full-name'>{personal.name}</h1>
            </div>
            <div className='contact'>
                {personal.email != '' ? <p><b>Email</b>{personal.email}</p> : ''}
                {personal.number != '' ? <p><b>Phone</b>{personal.number}</p> : ''}
            </div>
            {education.school != '' ? <hr /> : ''}
            <div className='education-info'>
                <div className='date'>
                    <p>{education?.date}</p>
                </div>
                <div className='school-major'>
                    <h4>{education?.major}</h4>
                    <p><i>{education?.school}</i></p>
                </div>
            </div>
            {experience.company != '' ? <hr /> : ''}
            <div className='experience-info'>
                <div className='start-end'>
                    <p>{experience.start}</p>
                    <p>{experience.end}</p>
                </div>
                <div className='school-major'>
                    <h4>{experience.title}</h4>
                    <p><i>{experience.company}</i></p>
                    <p>{experience.responsability}</p>
                </div>
            </div>
            </div>
        </div>
    );
}

export default OutputForm