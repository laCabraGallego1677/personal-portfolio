const d = document,
  toggle = d.getElementById("language-toggle"),
  $home = d.getElementById("home"),
  $about_me = d.getElementById("about-me"),
  $skills = d.getElementById("skills"),
  $portfolio = d.getElementById("portfolio"),
  $contact = d.getElementById("contact"),
  $introduction = d.getElementById("introduction"),
  $about_me_section = d.getElementById("about-me-section"),
  $about_me_description = d.getElementById("about-me-description"),
  $skills_section = d.getElementById("skills-section"),
  $skills_description = d.getElementById("skills-description"),
  $html_skills = d.getElementById("html-skills"),
  $css_skills = d.getElementById("css-skills"),
  $javascript_skills = d.getElementById("javascript-skills"),
  $react_skills = d.getElementById("react-skills"),
  $soft_skills = d.getElementById("soft-skills"),
  $soft_skills_one = d.getElementById("soft-skills-one"),
  $soft_skills_two = d.getElementById("soft-skills-two"),
  $soft_skills_three = d.getElementById("soft-skills-three"),
  $soft_skills_four = d.getElementById("soft-skills-four"),
  $soft_skills_five = d.getElementById("soft-skills-five"),
  $soft_skills_six = d.getElementById("soft-skills-six"),
  $projects = d.getElementById("projects"),
  $project_one = d.getElementById("project-one"),
  $project_one_description = d.getElementById("project-one-description"),
  $show_demo = d.getElementById("show-demo"),
  $show_code = d.getElementById("show-code"),
  $project_two = d.getElementById("project-two"),
  $project_two_description = d.getElementById("project-two-description"),
  $project_three = d.getElementById("project-three"),
  $project_three_description = d.getElementById("project-three-description"),
  $project_four = d.getElementById("project-four"),
  $project_four_description = d.getElementById("project-four-description"),
  $contact_section = d.getElementById("contact-section"),
  $contact_info = d.getElementById("contact-info"),
  $contact_by_whatsapp = d.getElementById("contact-by-whatsapp"),
  $location = d.getElementById("location"),
  $form_title = d.getElementById("form-title"),
  $form_name = d.getElementById("form-name"),
  $form_email = d.getElementById("form-email"),
  $form_subject = d.getElementById("form-subject"),
  $form_message = d.getElementById("form-message"),
  $footer_introduction = d.getElementById("footer-introduction"),
  $social_networks = d.getElementById("social-networks");

function englishLanguage(e) {
  if (e) {
    if ($home.innerText === "Inicio") {
      $home.innerHTML = "Home";
      $about_me.innerHTML = "About me";
      $skills.innerHTML = "Skills";
      $portfolio.innerHTML = "Portfolio";
      $contact.innerHTML = "Contact";
      $introduction.innerHTML = "Introduction";
      $about_me_section.innerHTML = "About me";
      $about_me_description.innerHTML =
        "I am a person who loves to solve problems through technological tools, I am always in search of new learning that allows me to be better in what I perform and as human being.";
      $skills_section.innerHTML = "Skills";
      $skills_description.innerHTML =
        "I have very good programming logic and I am currently expanding and acquiring knowledge in HTML5, CSS, Javascript and soon with React";
      $html_skills.innerHTML =
        "in the label and markup language I've been acquired in good knowledge, being able to understand the importance of its semantics for the positioning and better processing of the information on our Site or page, knowing identify the line and block labels as well as the attributes necessary to be able to Interact with cascading style sheets CSS3 and programming language Javascript";
      $css_skills.innerHTML =
        "Knowledge has been improved in the style of our projects,learning to define the rules, as well as delve into the properties ofthem and the accepted values for them. In addition, it has been acquiredknowledge of Flexbox and Grid modules, as well as media queries,all these useful to make our sites responsive.";
      $javascript_skills.innerHTML =
        "In the Web language it has been possible to understand how to give functionality toour sites, being able to create and manipulate different objects, in additionusing existing tools such as Web APIs (DOM) with which we achievehave extensive interactivity with all the elements of our document.";
      $react_skills.innerHTML =
        "I hope to continue our learning with the help of Academlo to acquire the necessary knowledge of this tool";
      $soft_skills.innerHTML = "Soft skills";
      $soft_skills_one.innerHTML = "Creative";
      $soft_skills_two.innerHTML = "Proactive";
      $soft_skills_three.innerHTML = "Autodidact";
      $soft_skills_four.innerHTML = "Responsible";
      $soft_skills_five.innerHTML = "Friendly";
      $soft_skills_six.innerHTML = "Cheerful";
    } else {
      $home.innerHTML = "Inicio";
    }
  }
}

toggle.addEventListener("click", englishLanguage);

export default englishLanguage;
