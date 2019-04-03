class MainClass {
  constructor() {
    this.sections = [
      {
        heading: "Background",
        body: `<p>I'm an aspiring web developer who loves everything about coding. I've spent a lot of time doing software support and am currently looking to make the jump to development. I'm excited to begin building my skills in what I know will be a fulfilling career.</p>

        <p>I'm a life-long learner. I actually study for fun! I'm always interested in learning new things and expanding my skillset.</p>`,
        id: "background"
      },
      {
        heading: "Goals",
        body: `<p>
        I want to broaden my development toolset and gain practical knowledge
        in the MERN stack.
      </p>
      <ol id="skills">
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>jQuery</li>
        <li>Node</li>
        <li>Express</li>
        <li>MongoDB</li>
        <li>SQLite</li>
      </ol>
      <p>
        I'd like to work for a web development compnay that invests in its
        employees as much as it invests in its clients.
      </p>`,
        id: "goals"
      }
    ];
    this.loadSections();
  }

  loadSections() {
    let sectionsHTML = this.sections.reduce(
      (html, section, index) =>
        (html += this.generateSectionsHTML(section, index)),
      ""
    );
    $("#main").html(sectionsHTML);
  }

  generateSectionsHTML(section, index) {
    return `
    <section id=${section.id}>
        <h2>${section.heading}</h2>
        ${section.body}
      </section>`;
  }
}

class ExperienceClass {
  constructor() {
    this.jobs = [
      {
        company: "MiSource/Pegasus Transtech",
        location: "Tampa",
        position: "ELD Support Analyst",
        dates: "January 2017 - September 2017",
        tasks: `<ol>
          <li>Provided technical assistance and training for end-users and administrators.</li>
          <li>Identified bugs, documented steps to reproduce, and escalated to QA or third-party vendors.</li>
          <li>Worked with QA and development to create test cases and verify
          bug fixes.</li></ol>`
      },
      {
        company: "ACS Group",
        location: "Saint Petersburg",
        position: "Technical Analyst II",
        dates: "October 2016 - January 2017",
        tasks: `<ol>
          <li>Provided end-user training and technical support for web-based
          payroll software.</li>
          <li>Used remote desktop to verify analyze technical issues and
          worked with various departments to resolve user issues.</li>
          <li>Performed basic SQL updates, tracked cases, and provided
          follow-up as necessary..</li></ol>`
      },
      {
        company: "App Institute",
        location: "Remote",
        position: "Chat Support Specialist",
        dates: "April 2016 - August 2016",
        tasks: `<ol>
          <li>Provided training and support to incoming chats via Intercom for
          proprietary SAAS CMS.</li>
          <li>Verified functional issues, identified possible causes, provided
          tier one troubleshooting and escalated as required.</li>
          <li>Created apps using CMS to match customer specifications.</li></ol>`
      },
      {
        company: "Mercury New Media",
        location: "Tampa",
        position: "Software Support Specialist",
        dates: "August 2015 - November 2015",
        tasks: `<ol>
          <li>Reviewed support request Zendesk and routed to front-end or
          back-end developers.</li>          
          <li>Completed minor changes in HTML, CSS, WordPress, Sitefinity
          and SQL.</li>
          <li>Performed manual testing to verify functional/code issues,
          documented steps to reproduce, and identified possible causes
          using developer tools.</li>
          <li>Provided client training, client follow-up, and verified completed
          tickets.</li>
          </ol>`
      },
      {
        company: "Chase Paymentech",
        location: "Tampa",
        position: "Client Support Analyst I",
        dates: "January 2013 - October 2014",
        tasks: `<ol>
          <li>Assisted merchants with the troubleshooting of proprietary desktop and mobile software.</li>
          <li>Adjusted browser settings, tested server connectivity, and configured
          computers for secure credit card transfers.</li>
          <li>Walked merchants through mobile app installation, app updates, app deletions, and mobile setting adjustments.</li>
          <li>Followed proper protocol for call logging, and technical
          troubleshooting while maintaining high quality marks.</li></ol>`
      },
      {
        company: "Gorilla Systems",
        location: "Tampa",
        position: "Quality Assurance",
        dates: "May 2008 - July 2008",
        tasks: `<ol>
          <li>Designed video game  levels according to game design document.</li>
          <li>Refined game  levels to maintain consistency throughout the game.</li>
          <li>Tested levels to ensure playability and minimize bugs.</li></ol>`
      },
      {
        company: "Insignia Technology",
        location: "Newport News",
        position: "Customer Support Specialist",
        dates: "October 2007 - March 2007",
        tasks: `<ol>
          <li>Received requests for support through telephone, email, and
          ticketing system from military personnel.</li>
          <li>Walked customers through adjusting browser settings,
          installing/removing software, and checking system specs.</li>
          <li>Created tickets, provided follow-up, answered general questions.</li></ol>`
      },
      {
        company: "Verizon",
        location: "Hampton",
        position: "Fiber Analyst",
        dates: "November 2006 - March 2006",
        tasks: `<ol>
          <li>Received desktop support request from end-users via phone.</li>
          <li>Provided network, hardware, and software troubleshooting.</li>
          <li>Created tickets and dispatched support technicians as required.</li></ol>`
      },
      {
        company: "Cardinal Health",
        location: "Norfolk",
        position: "Technical Support Representative",
        dates: "April 2004 - November 2006",
        tasks: `<ol>
          <li>Received desktop support request from end-users via phone.</li>
          <li>Assisted with site navigation, adding/removing software, and
          task completion.</li>
          <li>Created tickets and escalated issues as required.</li></ol>`
      }
    ];
    this.loadJobs();
  }
  loadJobs() {
    let jobsHTML = this.jobs.reduce(
      (html, job, index) => (html += this.generateJobsHTML(job, index)),
      ""
    );
    $("#main").html(jobsHTML);
  }
  generateJobsHTML(job, index) {
    return `<section class="exp">
    <h3><strong>${job.company}</strong>, ${job.location} — <em>${
      job.position
    }</em></h3>
    <span class="small-date">${job.dates}</span>
    ${job.tasks}
    </section>`;
  }
} //end ExperienceClass

class ProjectClass {
  constructor() {
    this.projects = [
      {
        title: "Random Quote Generator",
        description: "A quote generator",
        image: "",
        languages: `
        <ol id="skills">
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
        </ol>`,
        live_link:
          "https://fallencloud.github.io/Random-Quote-Generator/index.html",
        github: "https://github.com/fallencloud/Random-Quote-Generator",
        details: ``
      },
      {
        title: "RSVP",
        description: "A RSVP app",
        image: "",
        languages: `
        <ol id="skills">
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
        </ol>`,
        live_link: "https://fallencloud.github.io/rsvp/index.html",
        github: "https://github.com/fallencloud/rsvp",
        details: ``
      },
      {
        title: "Tic Tac Toe",
        description: "A pass-n-play version of Tic Tac Toe",
        image: "",
        languages: `
        <ol id="skills">
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
        </ol>`,
        live_link: "https://fallencloud.github.io/Tic-Tac-Toe/",
        github: "https://github.com/fallencloud/Tic-Tac-Toe",
        details: ``
      },
      {
        title: "Full Stack Conf",
        description: "A React site with form validation",
        image: "",
        languages: `
        <ol id="skills">
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>jQuery</li>
          <li>React</li>
        </ol>`,
        live_link: "https://fallencloud.github.io/Build-an-Interactive-Form/",
        github: "https://github.com/fallencloud/Build-an-Interactive-Form",
        details: ``
      }
    ];

    this.loadProjects();
  } //end constructor
  loadProjects() {
    let projectsHTML = this.projects.reduce(
      (html, project) => (html += this.generateProjectsHTML(project)),
      ""
    );
    $("#main").html(projectsHTML);
  }
  generateProjectsHTML(project) {
    return `<section class="prj">
    <h3><strong>${project.title}</strong> — <em><a href=${
      project.live_link
    } target="_blank">View Live</a></em></h3>
    <span class="small-date">${project.description}</span>
    ${project.languages}
    </section>`;
  }
} //end ProjectClass

class ContactClass {
  constructor() {
    this.contact = [
      {
        body: `<p>I'm currently looking for job opportunities in the Tidewater area of Virginia.</p>`
      },
      {
        body: `<p>Contact Info</p>
          <ol>
            <li>Phone: <a href="tel:8135393065">813.539.3065</a></li>
            <li>Email: <a href="mailto:sharinavjones@gmail.com">sharinavjones@gmail.com</a></li>
          </ol>
          `
      }
    ];

    this.loadContacts();
  } //end constructor

  loadContacts() {
    let contactsHTML = this.contact.reduce(
      (html, contact) => (html += this.generateContactsHTML(contact)),
      ""
    );
    $("#main").html(contactsHTML);
  } //end loadContacts()

  generateContactsHTML(contact) {
    return `<section class="contact">
    ${contact.body}
    </section>
    `;
  }
}

$("#home").click(() => {
  const seeSections = new MainClass();
});
$("#experience").click(() => {
  const seeJobs = new ExperienceClass();
});

$("#projects").click(() => {
  const seeProj = new ProjectClass();
});

$("#contact").click(() => {
  const seeContacts = new ContactClass();
});
