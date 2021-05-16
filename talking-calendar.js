const talkingCalendar = function(date) {
  let [year, num, day] = date.split('/');
  let month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  day = Number(day);

  if (day > 10 && day < 20) {
    day = day + 'th';
  } else if (day % 10 === 1) {
    day = day + 'st';
  } else if (day % 10 === 2) {
    day = day + 'nd';
  } else if (day % 10 === 3) {
    day = day + 'rd';
  } else {
    day = day + 'th';
  }

  return month[num - 1] + " " + day + ", " + year;
};

console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/12"));
console.log(talkingCalendar("1987/08/24"));


//expected output
// December 2nd, 2017
// November 11th, 2007
// August 24th, 1987

  // let day = "";
  // var month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  // let year = "";
  // let num = 0;
  // let count = "";

  // for (i = 0; i < 4; i++) {
  //   year = year + date[i];
  // }

  // for (i = 5; i < 7; i++) {
  //   num = num + date[i]; 
  // }

  // for (i = 8; i < 10; i++) {
  //   count = count + date[i];
  //   if (count === "01") {
  //     day = "1st";
  //   } else if (count === "02") {
  //    day = "2nd";
  //   } else if (count === "03") {
  //     day = "3rd";
  //   }
  //     else {
  //     day = count + "th";
  //   }
  // }