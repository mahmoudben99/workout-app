let workouts = {
  'Monday': [
    { name: 'Jumping Jacks', duration: 300, type: 'exercise', description: 'Perform jumping jacks to elevate your heart rate and warm up your body.', tips: 'Keep your core engaged and land softly to reduce impact on your joints.' },
    { name: 'Push-Ups', reps: 15, type: 'reps', description: 'Strengthen your chest, shoulders, and arms with push-ups.', tips: 'Maintain a straight line from head to heels and engage your core throughout the movement.' },
    { name: 'Rest', duration: 60, type: 'rest' },
    { name: 'Bodyweight Squats', reps: 20, type: 'reps', description: 'Target your quadriceps, hamstrings, and glutes with bodyweight squats.', tips: 'Keep your knees aligned with your toes and lower your hips until your thighs are parallel to the ground.' },
    { name: 'Plank', duration: 60, type: 'exercise', description: 'Strengthen your core muscles with a plank exercise.', tips: 'Keep your body in a straight line from head to heels and avoid sagging your hips.' },
    { name: 'Mountain Climbers', reps: 30, type: 'reps', description: 'Engage your core and elevate your heart rate with mountain climbers.', tips: 'Maintain a neutral spine and keep your shoulders over your wrists throughout the movement.' },
  ],
  'Tuesday': [
    { name: 'Jumping Jacks', duration: 300, type: 'exercise', description: 'Perform jumping jacks to elevate your heart rate and warm up your body.', tips: 'Keep your core engaged and land softly to reduce impact on your joints.' },
    { name: 'High-Intensity Interval Training (HIIT)', duration: 1200, type: 'exercise', description: 'Engage in high-intensity intervals to maximize calorie burn and cardiovascular fitness.', tips: 'Alternate between periods of high-intensity exercise and rest or lower-intensity activity.' },
    { name: 'Rest', duration: 60, type: 'rest' },
    { name: 'Bicycle Crunches', reps: 20, type: 'reps', description: 'Target your abdominal muscles with bicycle crunches.', tips: 'Focus on twisting your torso and bringing your elbow towards the opposite knee with each repetition.' },
    { name: 'Leg Raises', reps: 20, type: 'reps', description: 'Strengthen your lower abdominal muscles with leg raises.', tips: 'Keep your lower back pressed into the floor and lift your legs using your lower abs.' },
    { name: 'Russian Twists', reps: 20, type: 'reps', description: 'Engage your oblique muscles with Russian twists.', tips: 'Maintain a straight back and twist your torso from side to side, touching the ground beside your hip with each rotation.' },
  ],
  'Wednesday': [
    { name: 'Pull-Ups', duration: 90, type: 'exercise', description: 'Strengthen your back, arms, and shoulders with pull-ups.', tips: 'Keep your shoulders down and back, and focus on pulling your chest towards the bar.' },
    { name: 'Pike Push-Ups', reps: 15, type: 'reps', description: 'Target your shoulder muscles with pike push-ups.', tips: 'Maintain a straight line from head to heels and focus on lowering your head towards the ground with each repetition.' },
    { name: 'Rest', duration: 60, type: 'rest' },
    { name: 'Dips', reps: 15, type: 'reps',
description: 'Work your triceps and chest with dips using a stable surface like parallel bars or a sturdy chair.', tips: 'Keep your elbows close to your body and lower your body until your elbows are at a 90-degree angle.' },
    { name: 'Inverted Rows', reps: 15, type: 'reps', description: 'Target your back muscles with inverted rows using a sturdy horizontal bar.', tips: 'Keep your body in a straight line and pull your chest towards the bar, squeezing your shoulder blades together at the top of the movement.' },
    { name: 'Bicep Curls', reps: 15, type: 'reps', description: 'Isolate your bicep muscles with bicep curls using dumbbells or resistance bands.', tips: 'Keep your elbows close to your body and focus on controlled movements, avoiding swinging or using momentum.' },
  ],
  'Thursday': [
    { name: 'Rest or Active Recovery', duration: 0, type: 'exercise', description: 'Take a rest day or engage in light activity to allow your muscles to recover and repair.' },
  ],
  'Friday': [
    { name: 'Jumping Jacks', duration: 300, type: 'exercise', description: 'Perform jumping jacks to elevate your heart rate and warm up your body.', tips: 'Keep your core engaged and land softly to reduce impact on your joints.' },
    { name: 'Bodyweight Squats', reps: 20, type: 'reps', description: 'Target your quadriceps, hamstrings, and glutes with bodyweight squats.', tips: 'Keep your knees aligned with your toes and lower your hips until your thighs are parallel to the ground.' },
    { name: 'Rest', duration: 60, type: 'rest' },
    { name: 'Lunges', reps: 15, type: 'reps', description: 'Strengthen your lower body and improve balance with lunges.', tips: 'Step forward with one foot and lower your body until both knees are bent at a 90-degree angle, then return to the starting position.' },
    { name: 'Glute Bridges', reps: 20, type: 'reps', description: 'Engage your glute muscles with glute bridges to improve hip stability and strength.', tips: 'Keep your feet hip-width apart and lift your hips towards the ceiling, squeezing your glutes at the top of the movement.' },
    { name: 'Calf Raises', reps: 20, type: 'reps', description: 'Target your calf muscles with calf raises to improve lower leg strength and stability.', tips: 'Push through the balls of your feet and lift your heels as high as possible, then lower them back down to the ground.' },
    { name: 'Wall Sit', duration: 60, type: 'exercise', description: 'Build strength and endurance in your quadriceps and glutes with a wall sit exercise.', tips: 'Slide your back down a wall until your thighs are parallel to the ground and hold this position, focusing on maintaining proper form and breathing.' },
  ],
  'Saturday': [
    { name: 'Jumping Jacks', duration: 300, type: 'exercise', description: 'Perform jumping jacks to elevate your heart rate and warm up your body.', tips: 'Keep your core engaged and land softly to reduce impact on your joints.' },
    { name: 'High-Intensity Interval Training (HIIT)', duration: 1200, type: 'exercise', description: 'Engage in high-intensity intervals to maximize calorie burn and cardiovascular fitness.', tips: 'Alternate between periods of high-intensity exercise and rest or lower-intensity activity.' },
    { name: 'Rest', duration: 60, type: 'rest' },
    { name: 'Bicycle Crunches', reps: 20, type: 'reps', description: 'Target your abdominal muscles with bicycle crunches.', tips: 'Focus on twisting your torso and bringing your elbow towards the opposite knee with each repetition.' },
    { name: 'Leg Raises', reps: 20, type: 'reps', description: 'Strengthen your lower abdominal muscles with leg raises.', tips: 'Keep your lower back pressed into the floor and lift your legs using your lower abs.' },
    { name: 'Russian Twists', reps: 20, type: 'reps', description: 'Engage your oblique muscles with Russian twists.', tips: 'Maintain a straight back and twist your torso from side to side, touching the ground beside your hip with each rotation.' },
  ],
  'Sunday': [
    { name: 'Rest or Active Recovery', duration: 0, type: 'exercise', description: 'Take a rest day or engage in light activity to allow your muscles to recover and repair.' },
  ]
};

let currentWorkout = [];
let currentStep = 0;
let timerInterval;
let timeRemaining;
let isPaused = false;

function startWorkout(day) {
  currentWorkout = workouts[day];
  currentStep = 0;
  document.getElementById('day-selector').style.display = 'none';
  document.getElementById('workout-display').style.display = 'block';
  showProgress();
  showStep();
}

function showStep() {
  let step = currentWorkout[currentStep];
  document.getElementById('workout-name').textContent = step.name;
  document.getElementById('exercise-description').textContent = step.description;
  document.getElementById('exercise-tips').textContent = step.tips;

  if (step.type === 'exercise' && step.duration > 0) {
    document.getElementById('timer').style.display = 'block';
    document.getElementById('reps').style
.display = 'none';
    startTimer(step.duration);
  } else if (step.type === 'reps') {
    document.getElementById('timer').style.display = 'none';
    document.getElementById('reps').style.display = 'block';
    document.getElementById('reps-count').textContent = step.reps;
  } else if (step.type === 'rest') {
    document.getElementById('timer').style.display = 'block';
    document.getElementById('reps').style.display = 'none';
    startTimer(step.duration);
  } else {
    document.getElementById('timer').style.display = 'none';
    document.getElementById('reps').style.display = 'none';
  }
  showProgress();
}

function startTimer(duration) {
  timeRemaining = duration;
  document.getElementById('time-remaining').textContent = timeRemaining;

  clearInterval(timerInterval);
  timerInterval = setInterval(() => {
    if (!isPaused) {
      timeRemaining--;
      document.getElementById('time-remaining').textContent = timeRemaining;
      if (timeRemaining <= 0) {
        clearInterval(timerInterval);
        nextStep();
      }
    }
  }, 1000);
}

function pauseTimer() {
  isPaused = true;
  document.getElementById('pause-button').style.display = 'none';
  document.getElementById('resume-button').style.display = 'inline';
}

function resumeTimer() {
  isPaused = false;
  document.getElementById('pause-button').style.display = 'inline';
  document.getElementById('resume-button').style.display = 'none';
}

function nextStep() {
  if (currentStep < currentWorkout.length - 1) {
    currentStep++;
    showStep();
  } else {
    alert('Workout Complete!');
    document.getElementById('workout-display').style.display = 'none';
    document.getElementById('day-selector').style.display = 'block';
  }
}

function previousStep() {
  if (currentStep > 0) {
    currentStep--;
    showStep();
  }
}

function exitWorkout() {
  clearInterval(timerInterval);
  document.getElementById('workout-display').style.display = 'none';
  document.getElementById('day-selector').style.display = 'block';
}

function showProgress() {
  let progressList = document.getElementById('progress-list');
  progressList.innerHTML = '';
  currentWorkout.forEach((step, index) => {
    let li = document.createElement('li');
    li.textContent = step.name;
    if (index === currentStep) {
      li.classList.add('current-step');
    }
    progressList.appendChild(li);
  });
}
