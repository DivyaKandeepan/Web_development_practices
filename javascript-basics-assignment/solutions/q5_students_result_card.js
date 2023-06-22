// Write a program to display one result card of 10 students
// with their name and percentage
// Out of 10 students, 5 has subjects - Grammer and Accounts
// and other 5 has subjects -  Grammer and Physics

// Hint : You need to calculate percentage of 10 students having different set of subjects.
//        You can assume their scores on their respective subjects.


// Write your code here
const students = [
    { name: 'Achu', subjects: ['Grammar', 'Accounts'], scores: [60, 90] },
    { name: 'Mohana', subjects: ['Grammar', 'Accounts'], scores: [85, 95] },
    { name: 'kabila', subjects: ['Grammar', 'Accounts'], scores: [70, 75] },
    { name: 'Thams', subjects: ['Grammar', 'Accounts'], scores: [55, 80] },
    { name: 'Kundhavi', subjects: ['Grammar', 'Accounts'], scores: [90, 85] },
    { name: 'maha', subjects: ['Grammar', 'Physics'], scores: [70, 80] },
    { name: 'maha jy', subjects: ['Grammar', 'Physics'], scores: [75, 90] },
    { name: 'aparna', subjects: ['Grammar', 'Physics'], scores: [80, 95] },
    { name: 'janani', subjects: ['Grammar', 'Physics'], scores: [85, 85] },
    { name: 'Swathi', subjects: ['Grammar', 'Physics'], scores: [90, 80] },
  ];
  
  for (const student of students) {
    const totalSubjects = student.subjects.length;
    let totalScore = 0;
    for (const score of student.scores) {
      totalScore += score;
    }
    const percentage = (totalScore / totalSubjects).toFixed(2);
    console.log(`Name: ${student.name}, Percentage: ${percentage}%`);
  }
  