
        // Data
        const SYMPTOMS = [
            { id: 'fever', name: 'Fever/Chills', icon: '<i class="fa-solid fa-temperature-high"></i> ' },
            { id: 'cough', name: 'Cough', icon: '<i class="fa-solid fa-head-side-cough"></i>' },
            { id: 'headache', name: 'Headache', icon: '<i class="fa-solid fa-head-side-virus"></i>' },
            { id: 'stomach', name: 'Stomach Pain/Nausea', icon: '<i class="fa-solid fa-face-frown"></i>' },
            { id: 'sore_throat', name: 'Sore Throat', icon: '<i class="fa-regular fa-face-tired"></i>' },
            { id: 'chest_pain', name: 'Chest Pain', icon: '<i class="fa-solid fa-heart-crack"></i>' },
            { id: 'breathing', name: 'Difficulty Breathing', icon: '<i class="fa-solid fa-head-side-mask"></i>' },
            { id: 'rash', name: 'Skin Rash/Irritation', icon: '<i class="fa-solid fa-hand-dots"></i>' },
            { id: 'dizziness', name: 'Dizziness/Lightheaded', icon: '<i class="fa-solid fa-face-tired"></i>' },
            { id: 'back_pain', name: 'Back Pain', icon: '<i class="fa-solid fa-bone"></i>' },
            { id: 'fatigue', name: 'Extreme Fatigue', icon: '<i class="fa-regular fa-face-grimace"></i>' },
            { id: 'allergies', name: 'Allergy Symptoms', icon: '<i class="fa-solid fa-person-dots-from-line"></i>' },
            { id: 'urinary', name: 'Urinary Issues', icon: '<i class="fa-solid fa-toilet"></i>' },
            { id: 'injury', name: 'Minor Injury/Sprain', icon: '<i class="fa-solid fa-person-falling"></i>' },
            { id: 'cold_flu', name: 'Cold/Flu Symptoms', icon: '<i class="fa-regular fa-face-flushed"></i>' }
        ];

        const QUESTIONS = {
            fever: [
                { id: 'temp', text: 'What is your temperature?', type: 'select', options: ['Below 100.4°F (38°C)', '100.4-102°F (38-39°C)', '102-104°F (39-40°C)', 'Above 104°F (40°C)'] },
                { id: 'duration', text: 'How long have you had the fever?', type: 'select', options: ['Less than 24 hours', '1-3 days', '3-7 days', 'More than 7 days'] },
                { id: 'other', text: 'Any other symptoms?', type: 'multiselect', options: ['Severe headache', 'Stiff neck', 'Confusion', 'Difficulty breathing', 'Rash', 'None'] }
            ],
            cough: [
                { id: 'type', text: 'What type of cough?', type: 'select', options: ['Dry cough', 'Productive (with mucus)', 'Barking cough', 'Wheezing cough'] },
                { id: 'duration', text: 'How long have you had this cough?', type: 'select', options: ['Less than 3 days', '3-7 days', '1-3 weeks', 'More than 3 weeks'] },
                { id: 'severity', text: 'Select all that apply:', type: 'multiselect', options: ['Coughing up blood', 'Severe chest pain when coughing', 'Difficulty breathing', 'High fever', 'None of these'] }
            ],
            headache: [
                { id: 'severity', text: 'Pain severity (1-10)?', type: 'select', options: ['1-3 (Mild)', '4-6 (Moderate)', '7-8 (Severe)', '9-10 (Worst ever)'] },
                { id: 'location', text: 'Where is the pain?', type: 'select', options: ['Both sides', 'One side only', 'Behind eyes', 'Back of head/neck', 'Entire head'] },
                { id: 'warning', text: 'Any of these present?', type: 'multiselect', options: ['Sudden onset (thunderclap)', 'Vision changes', 'Confusion/difficulty speaking', 'Fever and stiff neck', 'After head injury', 'None'] }
            ],
            stomach: [
                { id: 'type', text: 'Main symptom?', type: 'select', options: ['Nausea only', 'Vomiting', 'Abdominal pain', 'Diarrhea', 'Combination'] },
                { id: 'severity', text: 'Pain severity (1-10)?', type: 'select', options: ['1-3 (Mild)', '4-6 (Moderate)', '7-10 (Severe)'] },
                { id: 'warning', text: 'Any of these present?', type: 'multiselect', options: ['Blood in vomit/stool', 'Severe abdominal pain', 'Unable to keep fluids down', 'High fever', 'Yellowing of skin/eyes', 'None'] }
            ],
            sore_throat: [
                { id: 'severity', text: 'How severe is the pain?', type: 'select', options: ['Mild discomfort', 'Moderate pain when swallowing', 'Severe pain', 'Unable to swallow'] },
                { id: 'duration', text: 'How long have you had it?', type: 'select', options: ['1-2 days', '3-5 days', '5-7 days', 'More than 7 days'] },
                { id: 'other', text: 'Other symptoms?', type: 'multiselect', options: ['White patches on throat', 'Swollen lymph nodes', 'Fever over 101°F', 'Rash', 'Difficulty breathing', 'None'] }
            ],
            chest_pain: [
                { id: 'type', text: 'Describe the pain:', type: 'select', options: ['Pressure/squeezing', 'Sharp/stabbing', 'Burning', 'Aching/dull'] },
                { id: 'severity', text: 'Pain severity (1-10)?', type: 'select', options: ['1-3 (Mild)', '4-6 (Moderate)', '7-10 (Severe)'] },
                { id: 'emergency', text: 'Any of these present?', type: 'multiselect', options: ['Pain radiating to arm/jaw', 'Shortness of breath', 'Sweating/nausea', 'Dizziness/lightheaded', 'Irregular heartbeat', 'None'] }
            ],
            breathing: [
                { id: 'severity', text: 'Breathing difficulty level:', type: 'select', options: ['Mild (slightly harder)', 'Moderate (noticeably harder)', 'Severe (very hard to breathe)', 'Unable to catch breath'] },
                { id: 'onset', text: 'When did it start?', type: 'select', options: ['Just now (minutes ago)', 'Today', 'Past few days', 'Ongoing/chronic'] },
                { id: 'symptoms', text: 'Associated symptoms?', type: 'multiselect', options: ['Chest pain', 'Wheezing', 'Blue lips/fingertips', 'Rapid heartbeat', 'Confusion', 'None'] }
            ],
            rash: [
                { id: 'appearance', text: 'Rash appearance:', type: 'select', options: ['Red spots/bumps', 'Blisters/hives', 'Dry/scaly patches', 'Widespread redness'] },
                { id: 'symptoms', text: 'Other symptoms?', type: 'multiselect', options: ['Severe itching', 'Fever', 'Swelling', 'Pain', 'Spreading rapidly', 'None'] },
                { id: 'duration', text: 'How long present?', type: 'select', options: ['Less than 24 hours', '1-3 days', '3-7 days', 'More than 7 days'] }
            ],
            dizziness: [
                { id: 'type', text: 'Type of dizziness:', type: 'select', options: ['Lightheaded', 'Room spinning (vertigo)', 'Unsteady/balance issues', 'Feeling faint'] },
                { id: 'severity', text: 'How severe?', type: 'select', options: ['Mild/occasional', 'Moderate/frequent', 'Severe/constant'] },
                { id: 'warning', text: 'Any of these present?', type: 'multiselect', options: ['Chest pain', 'Severe headache', 'Vision changes', 'Slurred speech', 'Weakness/numbness', 'None'] }
            ],
            back_pain: [
                { id: 'location', text: 'Where is the pain?', type: 'select', options: ['Lower back', 'Upper back', 'Mid back', 'Entire back'] },
                { id: 'severity', text: 'Pain severity (1-10)?', type: 'select', options: ['1-3 (Mild)', '4-6 (Moderate)', '7-10 (Severe/debilitating)'] },
                { id: 'warning', text: 'Any of these present?', type: 'multiselect', options: ['Numbness/tingling in legs', 'Loss of bladder/bowel control', 'Fever', 'After significant injury', 'Weakness in legs', 'None'] }
            ],
            fatigue: [
                { id: 'duration', text: 'How long experiencing fatigue?', type: 'select', options: ['1-3 days', '1-2 weeks', '2-4 weeks', 'More than a month'] },
                { id: 'severity', text: 'Impact on daily activities:', type: 'select', options: ['Mild (can function normally)', 'Moderate (some activities difficult)', 'Severe (very hard to function)', 'Extreme (bed-bound)'] },
                { id: 'other', text: 'Other symptoms?', type: 'multiselect', options: ['Fever', 'Unexplained weight loss', 'Night sweats', 'Shortness of breath', 'Depression/mood changes', 'None'] }
            ],
            allergies: [
                { id: 'symptoms', text: 'Main symptoms:', type: 'multiselect', options: ['Sneezing/runny nose', 'Itchy/watery eyes', 'Skin rash/hives', 'Swelling'] },
                { id: 'severity', text: 'Severity level:', type: 'select', options: ['Mild/annoying', 'Moderate/disruptive', 'Severe'] },
                { id: 'emergency', text: 'Any of these present?', type: 'multiselect', options: ['Difficulty breathing/wheezing', 'Throat swelling', 'Rapid heartbeat', 'Dizziness/fainting', 'None'] }
            ],
            urinary: [
                { id: 'symptoms', text: 'Main issue:', type: 'select', options: ['Painful urination', 'Frequent urination', 'Urgent need to urinate', 'Blood in urine', 'Difficulty urinating'] },
                { id: 'other', text: 'Other symptoms?', type: 'multiselect', options: ['Fever/chills', 'Back/side pain', 'Cloudy/foul-smelling urine', 'Lower abdominal pain', 'None'] },
                { id: 'duration', text: 'How long present?', type: 'select', options: ['Less than 24 hours', '1-3 days', '3-7 days', 'More than 7 days'] }
            ],
            injury: [
                { id: 'type', text: 'Type of injury:', type: 'select', options: ['Sprain/strain', 'Bruise/contusion', 'Cut/laceration', 'Possible fracture'] },
                { id: 'severity', text: 'Can you use the injured area?', type: 'select', options: ['Yes, with mild pain', 'Limited use, moderate pain', 'Unable to use, severe pain', 'Completely unable to move'] },
                { id: 'warning', text: 'Any of these present?', type: 'multiselect', options: ['Severe swelling', 'Visible deformity', 'Numbness/tingling', 'Deep/bleeding cut', 'Possible bone showing', 'None'] }
            ],
            cold_flu: [
                { id: 'symptoms', text: 'Main symptoms:', type: 'multiselect', options: ['Runny/stuffy nose', 'Cough', 'Sore throat', 'Body aches', 'Fever', 'Fatigue'] },
                { id: 'duration', text: 'How long have you had symptoms?', type: 'select', options: ['1-2 days', '3-5 days', '5-7 days', 'More than 7 days'] },
                { id: 'severity', text: 'Overall severity:', type: 'select', options: ['Mild (functioning normally)', 'Moderate (slowed down)', 'Severe (bed rest needed)'] }
            ]
        };

        const TRIAGE_LEVELS = {
            EMERGENCY: {
                level: 'EMERGENCY',
                color: '#dc2626',
                icon: '<i class="fa-solid fa-truck-medical"></i>',
                title: 'Seek Emergency Care Immediately',
                action: 'Call 911 or go to the ER now',
                timeframe: 'Immediate'
            },
            URGENT: {
                level: 'URGENT',
                color: '#ea580c',
                icon: '<i class="fa-solid fa-bolt-lightning"></i>',
                title: 'Seek Urgent Medical Care',
                action: 'Visit urgent care or ER today',
                timeframe: 'Within hours'
            },
            DOCTOR: {
                level: 'DOCTOR',
                color: '#f59e0b',
                icon: '<i class="fa-solid fa-clipboard-list"></i>',
                title: 'Schedule Doctor Appointment',
                action: 'See your primary care doctor',
                timeframe: 'Within 1-3 days'
            },
            PHARMACIST: {
                level: 'PHARMACIST',
                color: '#3b82f6',
                icon: '<i class="fa-solid fa-capsules"></i>',
                title: 'Consult a Pharmacist',
                action: 'Visit or call your local pharmacy',
                timeframe: 'Today or tomorrow'
            },
            SELF_CARE: {
                level: 'SELF_CARE',
                color: '#10b981',
                icon: '<i class="fa-solid fa-circle-check"></i>',
                title: 'Self-Care Recommended',
                action: 'Monitor at home with OTC options',
                timeframe: 'Monitor for 24-48 hours'
            }
        };

        const OTC_RECOMMENDATIONS = {
            fever: {
                mild: ['Paracetamol (Acetaminophen) or Ibuprofen (NSAID)', 'Stay hydrated', 'Rest'],
                pharmacist: 'Consider consulting if fever persists beyond 3 days'
            },
            cough: {
                mild: ['Dextromethorphan (Robitussin DM, Delsym)', 'Guaifenesin for productive cough (Mucinex)', 'Honey (for ages 1+)', 'Stay hydrated'],
                pharmacist: 'Ask about appropriate cough suppressants vs. expectorants'
            },
            headache: {
                mild: ['Paracetamol (Acetaminophen)', 'Ibuprofen (Advil, Motrin)', 'Naproxen (Aleve)', 'Rest in dark, quiet room', 'Cold compress'],
                pharmacist: 'Consult about frequent headaches or migraine medications'
            },
            stomach: {
                mild: ['Bismuth subsalicylate (Pepto-Bismol)', 'Loperamide for diarrhea (Imodium)', 'Antiemetics like meclizine (Dramamine)', 'Clear fluids, BRAT diet'],
                pharmacist: 'Ask about electrolyte solutions and proper hydration'
            },
            sore_throat: {
                mild: ['Throat lozenges', 'Acetaminophen or Ibuprofen for pain', 'Warm salt water gargles', 'Stay hydrated'],
                pharmacist: 'May recommend throat sprays or discuss strep test need'
            },
            allergies: {
                mild: ['Antihistamines: Loratadine (Claritin), Cetirizine (Zyrtec), Fexofenadine (Allegra)', 'Nasal sprays: Fluticasone (Flonase)', 'Eye drops for itchy eyes'],
                pharmacist: 'Can help select best antihistamine for your symptoms'
            },
            rash: {
                mild: ['Hydrocortisone cream 1%', 'Antihistamines for itching (Benadryl, Zyrtec)', 'Calamine lotion', 'Cool compresses', 'Moisturizer'],
                pharmacist: 'Can assess rash and recommend appropriate treatment'
            },
            back_pain: {
                mild: ['Ibuprofen (Advil, Motrin) or Naproxen (Aleve)', 'Acetaminophen (Tylenol)', 'Ice for first 48 hours, then heat', 'Gentle stretching'],
                pharmacist: 'Ask about topical pain relievers and proper use'
            },
            cold_flu: {
                mild: ['Multi-symptom cold medicine (read labels carefully)', 'Acetaminophen or Ibuprofen for aches/fever', 'Decongestants (pseudoephedrine, phenylephrine)', 'Cough suppressants', 'Rest and fluids'],
                pharmacist: 'Can help avoid medication interactions and choose right products'
            },
            injury: {
                mild: ['RICE method: Rest, Ice, Compression, Elevation', 'Ibuprofen or Naproxen for pain/swelling', 'Bandages for minor cuts', 'Antibiotic ointment'],
                pharmacist: 'Can advise on wound care and pain management'
            }
        };

        // State
        let currentStep = 'welcome';
        let selectedSymptom = null;
        let currentQuestionIndex = 0;
        let answers = {};
        let recommendation = null;

        // Initialize
        function init() {
            renderSymptoms();
        }

        function renderSymptoms() {
            const grid = document.getElementById('symptomsGrid');
            grid.innerHTML = '';
            
            SYMPTOMS.forEach(symptom => {
                const card = document.createElement('button');
                card.className = 'symptom-card';
                card.innerHTML = `
                    <div class="symptom-icon">${symptom.icon}</div>
                    <div class="symptom-name">${symptom.name}</div>
                `;
                card.onclick = () => selectSymptom(symptom);
                grid.appendChild(card);
            });
        }

        function startAssessment() {
            showScreen('symptoms');
        }

        function selectSymptom(symptom) {
            selectedSymptom = symptom;
            currentQuestionIndex = 0;
            answers = {};
            showScreen('questions');
            renderQuestion();
        }

        function renderQuestion() {
            const questions = QUESTIONS[selectedSymptom.id];
            const question = questions[currentQuestionIndex];
            
            document.getElementById('currentSymptomIcon').innerHTML = selectedSymptom.icon;
            document.getElementById('currentSymptomName').textContent = selectedSymptom.name;
            document.getElementById('questionProgress').textContent = `Question ${currentQuestionIndex + 1} of ${questions.length}`;
            document.getElementById('questionText').textContent = question.text;
            
            const container = document.getElementById('optionsContainer');
            container.innerHTML = '';
            
            if (question.type === 'select') {
                question.options.forEach(option => {
                    const btn = document.createElement('button');
                    btn.className = 'option-btn';
                    if (answers[question.id] === option) {
                        btn.classList.add('selected');
                    }
                    btn.textContent = option;
                    btn.onclick = () => selectOption(question.id, option, 'select');
                    container.appendChild(btn);
                });
            } else if (question.type === 'multiselect') {
                question.options.forEach(option => {
                    const btn = document.createElement('button');
                    btn.className = 'option-btn';
                    const isSelected = (answers[question.id] || []).includes(option);
                    if (isSelected) {
                        btn.classList.add('selected');
                    }
                    btn.innerHTML = `
                        <div class="checkbox">${isSelected ? '✓' : ''}</div>
                        ${option}
                    `;
                    btn.onclick = () => selectOption(question.id, option, 'multiselect');
                    container.appendChild(btn);
                });
            }
            
            updateNextButton();
        }

        function selectOption(questionId, option, type) {
            if (type === 'select') {
                answers[questionId] = option;
            } else if (type === 'multiselect') {
                if (!answers[questionId]) {
                    answers[questionId] = [];
                }
                const index = answers[questionId].indexOf(option);
                if (index > -1) {
                    answers[questionId].splice(index, 1);
                } else {
                    answers[questionId].push(option);
                }
            }
            renderQuestion();
        }

        function updateNextButton() {
            const questions = QUESTIONS[selectedSymptom.id];
            const question = questions[currentQuestionIndex];
            const nextBtn = document.getElementById('nextBtn');
            const nextBtnText = document.getElementById('nextBtnText');
            
            const isAnswered = answers[question.id] && 
                (question.type === 'select' || answers[question.id].length > 0);
            
            nextBtn.disabled = !isAnswered;
            
            if (currentQuestionIndex === questions.length - 1) {
                nextBtnText.textContent = 'Get Recommendation';
            } else {
                nextBtnText.textContent = 'Next';
            }
        }

        function nextQuestion() {
            const questions = QUESTIONS[selectedSymptom.id];
            
            if (currentQuestionIndex < questions.length - 1) {
                currentQuestionIndex++;
                renderQuestion();
            } else {
                generateRecommendation();
                showScreen('results');
                renderResults();
            }
        }

        function goBack() {
            if (currentQuestionIndex > 0) {
                currentQuestionIndex--;
                renderQuestion();
            } else {
                showScreen('symptoms');
                selectedSymptom = null;
            }
        }

        function generateRecommendation() {
            recommendation = getTriageRecommendation(selectedSymptom.id, answers);
        }

        function getTriageRecommendation(symptom, answers) {
            // Emergency conditions
            const emergencyConditions = {
                chest_pain: () => {
                    const emergency = answers.emergency || [];
                    return emergency.some(s => ['Pain radiating to arm/jaw', 'Shortness of breath', 'Sweating/nausea', 'Irregular heartbeat'].includes(s));
                },
                breathing: () => {
                    return answers.severity === 'Unable to catch breath' || 
                           (answers.symptoms || []).some(s => ['Blue lips/fingertips', 'Confusion'].includes(s));
                },
                headache: () => {
                    return answers.severity === '9-10 (Worst ever)' || 
                           (answers.warning || []).some(s => ['Sudden onset (thunderclap)', 'Confusion/difficulty speaking', 'After head injury'].includes(s));
                },
                dizziness: () => {
                    return (answers.warning || []).some(s => ['Chest pain', 'Severe headache', 'Slurred speech', 'Weakness/numbness'].includes(s));
                },
                stomach: () => {
                    return (answers.warning || []).some(s => ['Blood in vomit/stool', 'Yellowing of skin/eyes'].includes(s)) || 
                           (answers.severity === '7-10 (Severe)' && answers.warning?.includes('Severe abdominal pain'));
                },
                allergies: () => {
                    return (answers.emergency || []).some(s => ['Difficulty breathing/wheezing', 'Throat swelling', 'Dizziness/fainting'].includes(s));
                },
                back_pain: () => {
                    return (answers.warning || []).some(s => ['Loss of bladder/bowel control', 'Weakness in legs'].includes(s));
                }
            };

            if (emergencyConditions[symptom] && emergencyConditions[symptom]()) {
                return TRIAGE_LEVELS.EMERGENCY;
            }

            // Urgent care conditions
            const urgentConditions = {
                fever: () => {
                    return answers.temp === 'Above 104°F (40°C)' || 
                           (answers.other || []).some(s => ['Severe headache', 'Stiff neck', 'Confusion', 'Rash'].includes(s)) ||
                           (answers.duration === 'More than 7 days');
                },
                cough: () => {
                    return (answers.severity || []).includes('Coughing up blood') || 
                           (answers.severity || []).includes('Severe chest pain when coughing') ||
                           (answers.duration === 'More than 3 weeks');
                },
                sore_throat: () => {
                    return answers.severity === 'Unable to swallow' || 
                           (answers.other || []).some(s => ['Difficulty breathing'].includes(s));
                },
                breathing: () => {
                    return answers.severity === 'Severe (very hard to breathe)' || 
                           (answers.symptoms || []).includes('Wheezing');
                },
                stomach: () => {
                    return answers.warning?.includes('Unable to keep fluids down') || 
                           (answers.severity === '7-10 (Severe)');
                },
                urinary: () => {
                    return answers.symptoms === 'Blood in urine' || 
                           (answers.other || []).some(s => ['Fever/chills', 'Back/side pain'].includes(s));
                },
                injury: () => {
                    return (answers.warning || []).some(s => ['Visible deformity', 'Deep/bleeding cut', 'Possible bone showing'].includes(s)) ||
                           answers.type === 'Possible fracture';
                },
                rash: () => {
                    return (answers.symptoms || []).some(s => ['Fever', 'Swelling', 'Spreading rapidly'].includes(s));
                }
            };

            if (urgentConditions[symptom] && urgentConditions[symptom]()) {
                return TRIAGE_LEVELS.URGENT;
            }

            // Doctor appointment conditions
            const doctorConditions = {
                fever: () => answers.duration === '3-7 days' || answers.temp === '102-104°F (39-40°C)',
                headache: () => answers.severity === '7-8 (Severe)',
                sore_throat: () => {
                    return answers.duration === 'More than 7 days' || 
                           (answers.other || []).some(s => ['White patches on throat', 'Swollen lymph nodes'].includes(s));
                },
                fatigue: () => answers.duration === 'More than a month' || answers.severity === 'Severe (very hard to function)',
                cold_flu: () => answers.duration === 'More than 7 days' || answers.severity === 'Severe (bed rest needed)',
                back_pain: () => answers.severity === '7-10 (Severe/debilitating)',
                dizziness: () => answers.severity === 'Severe/constant',
                urinary: () => answers.duration === 'More than 7 days'
            };

            if (doctorConditions[symptom] && doctorConditions[symptom]()) {
                return TRIAGE_LEVELS.DOCTOR;
            }

            // Pharmacist consultation conditions
            const pharmacistConditions = {
                fever: () => answers.duration === '1-3 days' || answers.temp === '100.4-102°F (38-39°C)',
                cough: () => answers.duration === '3-7 days' || answers.duration === '1-3 weeks',
                stomach: () => answers.severity === '4-6 (Moderate)',
                sore_throat: () => answers.severity === 'Moderate pain when swallowing' || answers.duration === '3-5 days',
                allergies: () => answers.severity === 'Moderate/disruptive',
                rash: () => answers.duration === '3-7 days' || (answers.symptoms || []).includes('Severe itching'),
                urinary: () => answers.duration === '1-3 days',
                cold_flu: () => answers.duration === '3-5 days' || answers.severity === 'Moderate (slowed down)'
            };

            if (pharmacistConditions[symptom] && pharmacistConditions[symptom]()) {
                return TRIAGE_LEVELS.PHARMACIST;
            }

            return TRIAGE_LEVELS.SELF_CARE;
        }

        function renderResults() {
            const resultCard = document.getElementById('resultCard');
            resultCard.style.background = `linear-gradient(135deg, ${recommendation.color}15 0%, ${recommendation.color}05 100%)`;
            resultCard.style.border = `3px solid ${recommendation.color}`;
            
            document.getElementById('resultIcon').innerHTML = recommendation.icon;
            document.getElementById('resultTitle').textContent = recommendation.title;
            document.getElementById('resultTitle').style.color = recommendation.color;
            document.getElementById('resultTimeframe').textContent = recommendation.timeframe;
            document.getElementById('resultAction').textContent = recommendation.action;
            
            // OTC Recommendations
            const otcSection = document.getElementById('otcSection');
            if ((recommendation.level === 'SELF_CARE' || recommendation.level === 'PHARMACIST') && 
                OTC_RECOMMENDATIONS[selectedSymptom.id]) {
                otcSection.classList.remove('hidden');
                
                const otcList = document.getElementById('otcList');
                otcList.innerHTML = '';
                OTC_RECOMMENDATIONS[selectedSymptom.id].mild.forEach(rec => {
                    const li = document.createElement('li');
                    li.textContent = rec;
                    otcList.appendChild(li);
                });
                
                const otcNote = document.getElementById('otcNote');
                if (recommendation.level === 'PHARMACIST') {
                    otcNote.textContent = '💊 ' + OTC_RECOMMENDATIONS[selectedSymptom.id].pharmacist;
                    otcNote.style.display = 'block';
                } else {
                    otcNote.style.display = 'none';
                }
            } else {
                otcSection.classList.add('hidden');
            }
            
            // Monitoring text
            const monitoringTexts = {
                SELF_CARE: 'Watch for worsening symptoms. If symptoms persist beyond 48 hours, worsen, or new concerning symptoms develop, seek medical attention.',
                PHARMACIST: 'A pharmacist can provide expert guidance on symptom management and determine if you need to see a doctor.',
                DOCTOR: 'Schedule an appointment with your primary care physician. Keep track of your symptoms and any changes.',
                URGENT: 'Visit an urgent care center or emergency room today. Do not wait for symptoms to worsen.',
                EMERGENCY: 'This is a medical emergency. Call 911 or go to the nearest emergency room immediately. Do not drive yourself.'
            };
            
            document.getElementById('monitoringText').textContent = monitoringTexts[recommendation.level];
        }

        function restartAssessment() {
            currentStep = 'welcome';
            selectedSymptom = null;
            currentQuestionIndex = 0;
            answers = {};
            recommendation = null;
            showScreen('welcome');
        }

        function showScreen(screen) {
            document.getElementById('welcomeScreen').classList.add('hidden');
            document.getElementById('symptomScreen').classList.add('hidden');
            document.getElementById('questionsScreen').classList.add('hidden');
            document.getElementById('resultsScreen').classList.add('hidden');
            
            if (screen === 'welcome') {
                document.getElementById('welcomeScreen').classList.remove('hidden');
            } else if (screen === 'symptoms') {
                document.getElementById('symptomScreen').classList.remove('hidden');
            } else if (screen === 'questions') {
                document.getElementById('questionsScreen').classList.remove('hidden');
            } else if (screen === 'results') {
                document.getElementById('resultsScreen').classList.remove('hidden');
            }
            
            currentStep = screen;
        }

        // Initialize on load
        init();
    