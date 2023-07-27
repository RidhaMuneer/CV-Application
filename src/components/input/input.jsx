import './input.css'
import OutputForm from '../output/output.jsx';
import {useState} from 'react';

function InputForm(){

    const [personal, setPersonal] = useState({name: '', email: '', number: ''});
    const [experience, setExperience] = useState({company: '', title: '', responsability: '', start: '', end: ''});
    const [education, setEducation] = useState({school: '', major: '', date: ''});

    return (
        <div className='main-body'>
            <div className='input-section'>
                <h4>Your CV information should be inserted below:</h4>
                <h4>Personal Information</h4>
                <form className='personal-info'>
                    <div className='name'>
                        <label>Full Name: </label>
                        <input type="text" placeholder='John Smith Mark' required value={personal.name} onChange={(event) => setPersonal({...personal, name : event.target.value})}/>
                    </div>
                    <div className='contact-info'>
                        <label>Email Address: </label>
                        <input type="email" placeholder='@email.com' required value={personal.email} onChange={(event) => setPersonal({...personal, email : event.target.value})}/>
                        <label>Phone Number: </label>
                        <input type="number" placeholder='00964**********' required value={personal.number} onChange={(event) => setPersonal({...personal, number : event.target.value})}/>
                    </div>
                    <button>Save</button>
                </form>
                <h4>Educational Experience</h4>
                <form className='education'>
                    <label>School Name: </label>
                    <input type="text" required value={education.school} onChange={(event) => setEducation({...education, school : event.target.value})}/>
                    <label>Title of Study: </label>
                    <input type="text" required value={education.major} onChange={(event) => setEducation({...education, major : event.target.value})}/>
                    <label>Date of Study: </label>
                    <input type="date" required value={education.date} onChange={(event) => setEducation({...education, date : event.target.value})}/>
                    <button style={{ marginTop: '15px' }}>Save</button>
                </form>
                <h4>Practical Experience</h4>
                <form className='experience'>
                    <label>Company Name: </label>
                    <input type="text" required value={experience.company} onChange={(event) => setExperience({...experience, company : event.target.value})}/>
                    <label>Position Title: </label>
                    <input type="text" required value={experience.title} onChange={(event) => setExperience({...experience, title : event.target.value})}/>
                    <label>Main Responsibilities: </label>
                    <input type="text" required value={experience.responsability} onChange={(event) => setExperience({...experience, responsability : event.target.value})}/>
                    <div className='date'>
                        <label>Date From: </label>
                        <input type="date" required value={experience.start} onChange={(event) => setExperience({...experience, start : event.target.value})}/>
                        <label>To: </label>
                        <input type="date" required value={experience.end} onChange={(event) => setExperience({...experience, end : event.target.value})}/>
                    </div>
                    <button style={{ marginTop: '15px' }}>Save</button>
                </form>
            </div>
            <OutputForm personal={personal} education={education} experience={experience}></OutputForm>
        </div>
    );
}

export default InputForm