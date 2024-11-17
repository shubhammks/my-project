const qualificationSelect = document.getElementById('qualificationSelect');
    const dynamicQuestionArea = document.getElementById('dynamicQuestionArea');

    // Function to create a dropdown dynamically
    function createDropdown(labelText, options, id) {
      const wrapper = document.createElement('div');
      wrapper.className = 'form-group';

      const label = document.createElement('label');
      label.textContent = labelText;
      label.htmlFor = id;

      const select = document.createElement('select');
      select.id = id;
      select.required = true;

      const defaultOption = document.createElement('option');
      defaultOption.value = '';
      defaultOption.disabled = true;
      defaultOption.selected = true;
      defaultOption.textContent = 'Select an option';
      select.appendChild(defaultOption);

      options.forEach((option) => {
        const opt = document.createElement('option');
        opt.value = option;
        opt.textContent = option;
        select.appendChild(opt);
      });

      wrapper.appendChild(label);
      wrapper.appendChild(select);
      return wrapper;
    }

    // Function to handle 10th qualification selection
    function handle10thPass() {
      const dropdown = createDropdown(
        'What stream are you planning to choose?',
        ['Science', 'Commerce', 'Arts/Humanities', 'Vocational'],
        'streamSelect'
      );
      dynamicQuestionArea.appendChild(dropdown);

      // Handle stream change
      dropdown.querySelector('select').addEventListener('change', (event) => {
        const stream = event.target.value;

        if (stream === 'Science') {
          createScienceQuestions();
        } else if (stream === 'Commerce') {
          createCommerceQuestions();
        } else if (stream === 'Arts/Humanities') {
          createArtsQuestions();
        }
      });
    }

    // Function to handle 12th qualification selection
    function handle12thPass() {
      const dropdown = createDropdown(
        'What stream did you choose in 12th?',
        ['Science', 'Commerce', 'Arts/Humanities'],
        '12thStreamSelect'
      );
      dynamicQuestionArea.appendChild(dropdown);

      // Handle stream change
      dropdown.querySelector('select').addEventListener('change', (event) => {
        const stream = event.target.value;

        if (stream === 'Science') {
          createScienceQuestions();
        } else if (stream === 'Commerce') {
          createCommerceQuestions();
        } else if (stream === 'Arts/Humanities') {
          createArtsQuestions();
        }
      });
    }

    // Function to handle Graduate qualification selection
    function handleGraduate() {
      const dropdown = createDropdown(
        'What are you planning to do after graduation?',
        ['Post-Graduation', 'Job', 'Entrepreneurship'],
        'afterGradSelect'
      );
      dynamicQuestionArea.appendChild(dropdown);

      // Add relevant questions for after graduation choices
      dropdown.querySelector('select').addEventListener('change', (event) => {
        const choice = event.target.value;

        if (choice === 'Post-Graduation') {
          createPostGraduateQuestions();
        } else if (choice === 'Job') {
          createJobQuestions();
        } else if (choice === 'Entrepreneurship') {
          createEntrepreneurshipQuestions();
        }
      });
    }

    // Function to handle "Other" qualification selection
    function handleOtherQualification() {
      const otherDropdown = createDropdown(
        'Please specify your qualification:',
        ['Diploma', 'Certification', 'Other'],
        'otherQualificationSelect'
      );
      dynamicQuestionArea.appendChild(otherDropdown);

      otherDropdown.querySelector('select').addEventListener('change', (event) => {
        const qualification = event.target.value;
        if (qualification === 'Diploma') {
          createDiplomaQuestions();
        } else if (qualification === 'Certification') {
          createCertificationQuestions();
        }
      });
    }

    // Create science-related questions
    function createScienceQuestions() {
      const scienceGoalDropdown = createDropdown(
        'What is your primary goal in the science stream?',
        ['Engineering', 'Medicine'],
        'scienceGoalSelect'
      );
      dynamicQuestionArea.appendChild(scienceGoalDropdown);

      scienceGoalDropdown.querySelector('select').addEventListener('change', (event) => {
        const goal = event.target.value;
        if (goal === 'Engineering') {
          const engineeringExams = createDropdown(
            'Here are the exams you can prepare for:',
            ['JEE Main', 'JEE Advanced', 'BITSAT'],
            'engineeringExamsSelect'
          );
          dynamicQuestionArea.appendChild(engineeringExams);
        } else if (goal === 'Medicine') {
          const medicineExams = createDropdown(
            'Here are the exams you can prepare for:',
            ['NEET UG', 'AIIMS', 'JIPMER'],
            'medicineExamsSelect'
          );
          dynamicQuestionArea.appendChild(medicineExams);
        }
      });
    }

    // Create commerce-related questions
    function createCommerceQuestions() {
      const commerceGoalDropdown = createDropdown(
        'What is your primary goal in the commerce stream?',
        ['Chartered Accountant (CA)', 'BCom', 'Economics'],
        'commerceGoalSelect'
      );
      dynamicQuestionArea.appendChild(commerceGoalDropdown);

      commerceGoalDropdown.querySelector('select').addEventListener('change', (event) => {
        const goal = event.target.value;
        if (goal === 'Chartered Accountant (CA)') {
          const caExam = createDropdown(
            'Here are the exams you can prepare for:',
            ['CA Foundation', 'CA Intermediate', 'CA Final'],
            'caExamSelect'
          );
          dynamicQuestionArea.appendChild(caExam);
        }
      });
    }

    // Create arts-related questions
    function createArtsQuestions() {
      const artsGoalDropdown = createDropdown(
        'What is your primary goal in the arts stream?',
        ['Fine Arts', 'Journalism', 'Psychology', 'Design'],
        'artsGoalSelect'
      );
      dynamicQuestionArea.appendChild(artsGoalDropdown);
    }

    // Create postgraduate-related questions
    function createPostGraduateQuestions() {
      const pgDropdown = createDropdown(
        'Which field would you like to pursue post-graduation in?',
        ['MBA', 'MSc', 'MA', 'MTech'],
        'pgFieldSelect'
      );
      dynamicQuestionArea.appendChild(pgDropdown);
    }

    // Create job-related questions
    function createJobQuestions() {
      const jobDropdown = createDropdown(
        'Which field are you interested in for a job?',
        ['Software Engineering', 'Data Science', 'Marketing', 'Finance'],
        'jobFieldSelect'
      );
      dynamicQuestionArea.appendChild(jobDropdown);
    }

    // Create entrepreneurship-related questions
    function createEntrepreneurshipQuestions() {
      const startupDropdown = createDropdown(
        'Are you looking to start a business in which field?',
        ['Technology', 'Retail', 'Food & Beverage', 'Healthcare'],
        'startupFieldSelect'
      );
      dynamicQuestionArea.appendChild(startupDropdown);
    }

    qualificationSelect.addEventListener('change', (event) => {
      // Clear previous dynamic questions
      dynamicQuestionArea.innerHTML = '';

      if (event.target.value === '10th') {
        handle10thPass();
      } else if (event.target.value === '12th') {
        handle12thPass();
      } else if (event.target.value === 'Graduate') {
        handleGraduate();
      } else if (event.target.value === 'Other') {
        handleOtherQualification();
      }
    });