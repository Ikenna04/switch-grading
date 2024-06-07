// Grading Scores With Switch Statement

let score = 83;
let grade;
let collegeStudent = false;

let totalScore = Math.floor(score / 10);
switch (totalScore) {
	case 9:
		grade = 'A';
		break;
	case 8:
		grade = 'B';
		break;
	case 7:
		grade = 'C';
		break;
	case 6:
		grade = 'D';
		break;
	case 5:
		grade = 'E';
		break;
	case 4:
		switch (collegeStudent) {
			case true:
				grade = 'Your Result Is Unsatisfactory\nYou Got An F';
				break;
			default:
				grade = 'F';
		}
		break;
	case 3:
		switch (collegeStudent) {
			case true:
				grade = 'Your Result Is Unsatisfactory\nYou Got An F';
				break;
			default:
				grade = 'F';
		}
		break;
	case 2:
		switch (collegeStudent) {
			case true:
				grade = 'Your Result Is Unsatisfactory\nYou Got An F';
				break;
			default:
				grade = 'F';
		}
		break;
	case 1:
		switch (collegeStudent) {
			case true:
				grade = 'Your Result Is Unsatisfactory\nYou Got An F';
				break;
			default:
				grade = 'F';
		}
		break;
	case 0:
		switch (collegeStudent) {
			case true:
				grade = 'Your Result Is Unsatisfactory\nYou Got An F';
				break;
			default:
				grade = 'F';
		}
		break;
	default:
		grade = 'Enter A Valid Score';
}

console.log(`Your score is ${score}`);
console.log(`Your grade is ${grade}`);
