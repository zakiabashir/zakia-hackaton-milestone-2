
function takeValue(): boolean {
    
    const first_name = (document.getElementById("First_name") as HTMLInputElement).value;
    const last_name = (document.getElementById("Last_name") as HTMLInputElement).value;
    const email = (document.getElementById("Email") as HTMLInputElement).value;
    const phone = (document.getElementById("Phone") as HTMLInputElement).value;
    const dob = (document.getElementById("DOB") as HTMLInputElement).value;
    const gender = (document.getElementById("Gender") as HTMLInputElement).value;
    const address = (document.getElementById("Address") as HTMLInputElement).value;
    const profile_picture = (document.getElementById("Profile_picture") as HTMLInputElement).value;
    const job_title = (document.getElementById("Job_title") as HTMLInputElement).value;
    const company_name = (document.getElementById("Company_name") as HTMLInputElement).value;
    const start_date = (document.getElementById("Start_date") as HTMLInputElement).value;
    const end_date = (document.getElementById("End_date") as HTMLInputElement).value;
    const job_description = (document.getElementById("Job_description") as HTMLInputElement).value;
    const degree = (document.getElementById("Degree") as HTMLInputElement).value;
    const institution = (document.getElementById("institution") as HTMLInputElement).value;
    const edu_start_date = (document.getElementById("Edu_start_date") as HTMLInputElement).value;
    const edu_end_date = (document.getElementById("Edu_end_date") as HTMLInputElement).value;
    const grade = (document.getElementById("Grade") as HTMLInputElement).value;
    const skills = (document.getElementById("Skills") as HTMLInputElement).value;
    const languages = (document.getElementById("Languages") as HTMLInputElement).value;
    const hobbies = (document.getElementById("Hobbies") as HTMLInputElement).value;
    const reference_name = (document.getElementById("Reference_name") as HTMLInputElement).value;
    const reference_contact = (document.getElementById("Reference_contact") as HTMLInputElement).value;
    const cover_letter = (document.getElementById("Cover_letter") as HTMLTextAreaElement).value;
    
  
  
    const output = `
        <h1>Your Generated CV</h1>
        <h2>Personal Info  </h2>
        <p><strong>First Name:</strong> ${first_name}</p>
        <p><strong>Last Name:</strong> ${last_name}</p
       <p><strong> Email: </strong>${email}</p>
        <p><strong>Phone: </strong>${phone}</p>
        <p><strong>Date of Birth:</strong>${dob}</p>
        <p><strong>Gender: </strong>${gender}</p>
       <p><strong> Address: </strong>${address}</p>
        <p><strong>Profile Picture:</strong> ${profile_picture}</p>
        <h2>Work Experience</h2>
       <p><strong> Job Title: </strong>${job_title}</p>
       <p><strong> Company Name: </strong>${company_name}</p>
       <p><strong> Start Date: </strong>${start_date}</p>
        <p><strong>End Date::</strong>${end_date}</p>
        <p><strong>Job Description: </strong>${job_description}</p>
        <h2>Education </h2>
        <p><strong>Degree: </strong>${degree}</p>
       <p><strong>  Institution: </strong>${institution}</p>
        <p><strong>Start Date: </strong>${edu_start_date}</p>
       <p><strong> End Date: </strong>${edu_end_date}</p>
       <p><strong> Grade: </strong>${grade}</p>
        <h2>Skills:</h2> 
       <p><strong> Skills:</strong>${skills}</p>
       <h2> Languages:</h2> 
        <p><strong>Languages: </strong>${languages}</p><br>
        <h2>Hobbies:</h2>
       <p><strong> Hobbies: </strong>${hobbies}</p>
        <h2>References:</h2>
       <p><strong> Reference Name: </strong>${reference_name}</p>
       <p><strong> Reference Contact: </strong>${reference_contact}</p>
        <h2>Cover Letter:</h2>
       <p><strong> Cover Letter: </strong>${cover_letter}</p>
        
    `;
  
    document.write(output);
  
    // Return false to prevent form submission
    return false;
  }