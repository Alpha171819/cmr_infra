import React from 'react';

const Form = () => {
    return (
        <div>
            <form className='container'>
            <form action="/action_page.php">
  <label htmlFor="fname">First Name</label>
  <input type="text" id="fname" name="firstname" placeholder="Your name.." />
  <label htmlFor="lname">Last Name</label>
  <input
    type="text"
    id="lname"
    name="lastname"
    placeholder="Your last name.."
  />

  <label htmlFor="subject">Subject</label>
  <textarea
    id="subject"
    name="subject"
    placeholder="Write something.."
    style={{ height: 200 }}
    defaultValue={""}
  />
  <input type="submit" defaultValue="Submit" />
</form>

            </form>
        </div>
    );
}

export default Form;
