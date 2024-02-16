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
  $projects_text = d.getElementById("projects-text"),
  $project_one = d.getElementById("project-one"),
  $project_one_description = d.getElementById("project-one-description"),
  $show_demo = d.querySelector("demo"),
  $show_code = d.querySelector("code"),
  $project_two = d.getElementById("project-two"),
  $project_two_description = d.getElementById("project-two-description"),
  $project_three = d.getElementById("project-three"),
  $project_three_description = d.getElementById("project-three-description"),
  $project_four = d.getElementById("project-four"),
  $project_four_description = d.getElementById("project-four-description"),
  $contact_section = d.getElementById("contact-section"),
  $contact_info = d.getElementById("contact-info"),
  $contact_by_whatsapp = d.getElementById("contact-by-whatsapp"),
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
      $introduction.innerHTML =
        "I am a web developer, who loves technology and programming.";
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
      $projects_text.innerHTML = "Projects";
      $project_one.innerHTML = "Project 1";
      $project_one_description.innerHTML =
        "This information will be filled out soon.";
      $project_two.innerHTML = "Project 2";
      $project_two_description.innerHTML =
        "This information will be filled out soon.";
      $project_three.innerHTML = "Project 3";
      $project_three_description.innerHTML =
        "This information will be filled out soon.";
      $project_four.innerHTML = "Project 4";
      $project_four_description.innerHTML =
        "This information will be filled out soon.";
      $show_demo.innerText = "SHOW DEMO";
      $show_code.innerText = "SHOW CODE";
      $contact_section.innerHTML = "Contact";
      $contact_info.innerHTML = "Contact information";
      $contact_by_whatsapp.innerHTML = "Send message to Whatsapp";
      $form_title.innerHTML = "Send message";
      $form_name.innerHTML = "Name";
      $form_email.innerHTML = "Email";
      $form_subject.innerHTML = "Subject";
      $form_message.innerHTML = "Message";
      $footer_introduction.innerHTML =
        "I am a web developer, who loves technology and programming.";
      $social_networks.innerHTML = "Social networks";
    } else {
      $home.innerHTML = "Inicio";
      $about_me.innerHTML = "Acerca de Mí";
      $skills.innerHTML = "Habilidades";
      $portfolio.innerHTML = "Portafolio";
      $contact.innerHTML = "Contacto";
      $introduction.innerHTML =
        "Soy desarrollador web, apasionado por la tecnología y la programación.";
      $about_me_section.innerHTML = "Acerca de Mí";
      $about_me_description.innerHTML =
        "Soy una persona que le encanta dar solución a problemas a través de herramientas tecnológicas, siempre estoy en búsqueda de nuevos aprendizajes que me permitan ser mejor en lo que me desempeño y como persona.";
      $skills_section.innerHTML = "Habilidades";
      $skills_description.innerHTML =
        "Poseo una muy buena lógica de programación y actualmente estoy ampliando y adquiriendo conocimientos en HTML5, CSS,Javascript y próximamente con React";
      $html_skills.innerHTML =
        "En el lenguaje de etiquetado y marcado se ha adquirido en buen conocimiento, pudiendo entender la importancia de la semántica del mismo para el posicionamiento y mejor procesamiento de la información de nuestro Sitio o página, sabiendo identificar las etiquetas de línea y de bloque así como los atributos necesarios para poder interactuar con las hojas de estilo en cáscada (CSS3) y lenguaje de programación (Javascript)";
      $css_skills.innerHTML =
        "Se ha logrado mejorar el conocimiento en el estilado de nuestros proyectos, aprendiendo a definir las reglas, así como ahondar en las propiedades de las mismas y los valores aceptados para éstas. Además se ha adquirido el conocimiento de los módulos de Flexbox y Grid, al igual que las media queries, todos estos útiles para hacer nuestros sitios responsivos.";
      $javascript_skills.innerHTML =
        "En el lenguaje Web se ha logrado entender cómo dar funcionalidad a nuestros sitios, pudiendo crear y manipular diferentes objetos, además utilizando herramientas existentes como las API's Web (DOM) con las cuales logramos tener una amplia interactividad con todos los elementos de nuestro documento.";
      $react_skills.innerHTML =
        "Se espera poder continuar nuestro aprendizaje de la mano de Academlo para adquirir los conocimientos necesarios de esta herramienta";
      $soft_skills.innerHTML = "Habilidades Blandas";
      $soft_skills_one.innerHTML = "Creativo";
      $soft_skills_two.innerHTML = "Proactivo";
      $soft_skills_three.innerHTML = "Autodidacta";
      $soft_skills_four.innerHTML = "Responsable";
      $soft_skills_five.innerHTML = "Amable";
      $soft_skills_six.innerHTML = "Alegre";
      $projects_text.innerHTML = "Proyectos";
      $project_one.innerHTML = "Proyecto 1";
      $project_one_description.innerHTML =
        "próximamente se estará diligenciado esta información";
      $project_two.innerHTML = "Proyecto 2";
      $project_two_description.innerHTML =
        "próximamente se estará diligenciado esta información.";
      $project_three.innerHTML = "Proyecto 3";
      $project_three_description.innerHTML =
        "próximamente se estará diligenciado esta información";
      $project_four.innerHTML = "Proyecto 4";
      $project_four_description.innerHTML =
        "próximamente se estará diligenciado esta información";
      $show_demo.innerText = "VER DEMO";
      $show_code.innerText = "VER CÓDIGO";
      $contact_section.innerHTML = "Contacto";
      $contact_info.innerHTML = "Información de contacto";
      $contact_by_whatsapp.innerHTML = " Enviar mensaje a WhatsApp";
      $form_title.innerHTML = "Enviar mensaje";
      $form_name.innerHTML = "Nombre";
      $form_email.innerHTML = "Correo";
      $form_subject.innerHTML = "Asunto";
      $form_message.innerHTML = "Mensaje";
      $footer_introduction.innerHTML =
        "Soy desarrollador web, apasionado por la tecnología y la programación.";
      $social_networks.innerHTML = "Redes Sociales";
    }
  }
}

toggle.addEventListener("click", englishLanguage);

export default englishLanguage;
