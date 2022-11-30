function convertToRoman(num) {
    let romanNumeral = [
      "M",
      "CM",
      "D",
      "CD",
      "C",
      "XC",
      "L",
      "XL",
      "X",
      "IX",
      "V",
      "IV",
      "I"
    ];
   let numEquivalent = [
     1000,
     900,
     500,
     400,
     100,
     90,
     50,
     40,
     10,
     9,
     5,
     4,
     1
   ]
   let convertedRoman = "";
   for (let i = 0; i < numEquivalent.length; i++) {
     while (numEquivalent[i] <= num) {
       convertedRoman += romanNumeral[i];
       num -= numEquivalent[i];
     }
   }
   return convertedRoman;
   }
   
   convertToRoman(36);