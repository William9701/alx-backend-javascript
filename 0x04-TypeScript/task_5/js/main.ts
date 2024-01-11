// Define interfaces with a brand property
interface MajorCredits {
	credits: number;
	__brand: 'MajorCredits'; // Unique brand property
  }
  
  interface MinorCredits {
	credits: number;
	__brand: 'MinorCredits'; // Unique brand property
  }
  
  // Functions to sum major and minor credits
  function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
	const totalCredits = subject1.credits + subject2.credits;
	return { credits: totalCredits, __brand: 'MajorCredits' };
  }
  
  function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
	const totalCredits = subject1.credits + subject2.credits;
	return { credits: totalCredits, __brand: 'MinorCredits' };
  }