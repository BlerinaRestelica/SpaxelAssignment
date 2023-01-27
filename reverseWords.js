function reverseWords(sentence) {
    let words = sentence.split(" ");
    if (words.length % 2 === 0) {
      return sentence;
    } else {
      return words.reverse().join(" ");
    }
  }
  console.log(reverseWords("Hello Spaxel Team"));  // "Team Spaxel Hello"
  //console.log(reverseWords("Hello Spaxel"));  // "Hello Spaxel"
  //console.log(reverseWords("I want to get this intern ship"));  // "internship this get to want I"
  //console.log(reverseWords("I want this job"));  // "I want this job"