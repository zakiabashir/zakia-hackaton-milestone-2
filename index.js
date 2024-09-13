function takeValue() {
    var first_name = document.getElementById("First_name").value;
    var last_name = document.getElementById("Last_name").value;
    var email = document.getElementById("Email").value;
    var phone = document.getElementById("Phone").value;
    var dob = document.getElementById("DOB").value;
    var gender = document.getElementById("Gender").value;
    var address = document.getElementById("Address").value;
    var profile_picture = document.getElementById("Profile_picture").value;
    var job_title = document.getElementById("Job_title").value;
    var company_name = document.getElementById("Company_name").value;
    var start_date = document.getElementById("Start_date").value;
    var end_date = document.getElementById("End_date").value;
    var job_description = document.getElementById("Job_description").value;
    var degree = document.getElementById("Degree").value;
    var institution = document.getElementById("institution").value;
    var edu_start_date = document.getElementById("Edu_start_date").value;
    var edu_end_date = document.getElementById("Edu_end_date").value;
    var grade = document.getElementById("Grade").value;
    var skills = document.getElementById("Skills").value;
    var languages = document.getElementById("Languages").value;
    var hobbies = document.getElementById("Hobbies").value;
    var reference_name = document.getElementById("Reference_name").value;
    var reference_contact = document.getElementById("Reference_contact").value;
    var cover_letter = document.getElementById("Cover_letter").value;
    var output = "\n        <h1>Your Generated CV</h1><br><br>\n        Personal Info<br>\n        First Name: ".concat(first_name, "<br>\n        Last Name: ").concat(last_name, "<br>\n        Email: ").concat(email, "<br>\n        Phone: ").concat(phone, "<br>\n        Date of Birth:").concat(dob, "<br>\n        Gender: ").concat(gender, "<br>\n        Address: ").concat(address, "<br>\n        Profile Picture: ").concat(profile_picture, "<br>\n        Work Experience <br>\n        Job Title: ").concat(job_title, "<br>\n        Company Name: ").concat(company_name, "<br>\n        Start Date: ").concat(start_date, "<br>\n        End Date::").concat(end_date, "<br>\n        Job Description: ").concat(job_description, "<br>\n        Education<br>\n        Degree: ").concat(degree, "<br>\n         Institution: ").concat(institution, "<br>\n        Start Date: ").concat(edu_start_date, "<br>\n        End Date: ").concat(edu_end_date, "<br>\n        Grade: ").concat(grade, "<br>\n        Skills: <br>\n        Skills:").concat(skills, "<br>\n        Languages: <br>\n        Languages: ").concat(languages, "<br>\n        Hobbies:<br>\n        Hobbies: ").concat(hobbies, "<br>\n        References:<br>\n        Reference Name: ").concat(reference_name, "<br>\n        Reference Contact: ").concat(reference_contact, "<br>\n        Cover Letter:<br>\n        Cover Letter: ").concat(cover_letter, "<br>\n        \n    ");
    document.write(output);
    // Return false to prevent form submission
    return false;
}
