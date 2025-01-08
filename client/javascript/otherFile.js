// javascript\otherFile.js

import resumeData from "../data/resumeData.js";

const {
  resumeTitle,
  contact: contactData,
  skills,
  experiences,
  education,
  hobbies,
} = resumeData;

const header = `
  <header class="title">
    <h1>${resumeTitle}</h1>
  </header>
  `;

const contact = `
    <section class="contact">
      <h3>${contactData.section_title}</h3>
      <div class="contact-wrapper">
        <div class="basic-contact-info">
          <p><strong>Name:</strong> ${contactData.name}</p>
          <p><strong>Email:</strong> <a href="mailto:$  {contactData.email}">${contactData.email}</a></p>
          <p><strong>Phone:</strong> <a href="tel:${contactData.phoneNumber}">${contactData.phoneNumber}</a></p>
          <p><strong>Address:</strong> ${contactData.address}</p>
        </div>
        <ul class="socials-wrapper">
          ${contactData.socials
            .map(
              (social) => `
              <li class="socials" id="${social.id}">
                <a class="socials-link-text" href="${social.link}" target="_blank" rel="noopener noreferrer">
                <img src="${social.icon}" alt="${social.alt}" />
                ${social.text}
                </a>
              </li>
              `,
            )
            .join("")}
        </ul>
      </div>
    </section>
  `;

const skillsSection = `
    <section class="competences">
      <h3>${skills.section_title}</h3>
      
      <h4>${skills.hard_skills_title}</h4>
      <ul class="competences-techniques-list">
        ${skills.hard_skills
          .map(
            (skill) => `
              <li class="competences-techniques-list-item">${skill}</li>
            `,
          )
          .join("")}
      </ul>
  
        <h3>${skills.softSkillsTitle}</h3>
        <ul class="soft-skills-list">
          ${skills.softSkills
            .map(
              (skill) => `
                <li class="soft-skills-list-item">
                  ${skill}
                </li>
              `,
            )
            .join("")}
        </ul>
    </section>
  `;

const experiencesSection = `
    <section class="experiences">
      <h3>${experiences.section_title}</h3>
      ${experiences.list
        .map(
          (experience) => `
            <h4>${experience.project_description}</h4>
            <ul class="experiences-list">
              ${experience.tasks
                .map(
                  (task) => `
                    <li   class="experiences-list-item">
                      ${task}
                    </li>
                  `,
                )
                .join("")}
            </ul>
          `,
        )
        .join("")}
    </section>
  `;

const educationSection = `
    <section class="formation">
      <h3>${education.section_title}</h3>
      <ul class="formation-list">
        ${education.list
          .map(
            (educationItem) => `
              <li class="formation-list-item">
                <p class="formation-title-and-school">
                  ${educationItem.formation_title} |
                  <span class="school">${educationItem.school}</span>
                </p>
                <p class="formation-date">${educationItem.formation_span}</p>
              </li>
            `,
          )
          .join("")}
      </ul>
    </section>
  `;

const hobbiesSection = `
    <section class="hobbies">
      <h3>${hobbies.section_title}</h3>
      <ul>
        ${hobbies.list.map((hobby) => `<li>${hobby}</li>`).join("")}
      </ul>
    </section>
  `;

export {
  header,
  contact,
  skillsSection,
  experiencesSection,
  educationSection,
  hobbiesSection,
};