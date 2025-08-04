import { sum } from './helper';

export const conditions = {
  sum19: {
    label: "Sum = 19",
    fn: (ticketArr) => ticketArr.reduce((a, b) => a + b, 0) === 19,
  },

  allZero: {
    label: "All numbers are Zero",
    fn: (ticketArr) => ticketArr.every(num => num === 0),  
  },

  oddCount: {
    label: "Odd Number Count > 2",
    fn: (ticketArr) => ticketArr.filter(num => num % 2 !== 0).length > 2,
  },

  evenCount: {
    label: "Exactly 3 Even Numbers",
    fn: (ticketArr) => ticketArr.filter(num => num % 2 === 0).length === 3,
  },

  includes7: {
    label: "Includes Number 7",
    fn: (ticketArr) => ticketArr.includes(7),
  },

  allUnique: {
    label: "All Numbers Are Unique",
    fn: (ticketArr) => new Set(ticketArr).size === ticketArr.length,
  },

  sumLessThan15: {
    label: "Sum Less Than 15",
    fn: (ticketArr) => sum(ticketArr) < 15,
  },

  startsWithPrime: {
    label: "First Number is Prime",
    fn: (ticketArr) => {
      const isPrime = (n) => {
        if (n < 2) return false;
        for (let i = 2; i <= Math.sqrt(n); i++) {
          if (n % i === 0) return false;
        }
        return true;
      };
      return isPrime(ticketArr[0]);
    },
  },

  noConsecutive: {
    label: "No Consecutive Numbers",
    fn: (ticketArr) => !ticketArr.some((num, i) => i > 0 && Math.abs(num - ticketArr[i - 1]) === 1),
  },

  multipleOfTen: {
    label: "Contains a Multiple of 10",
    fn: (ticketArr) => ticketArr.some(num => num % 10 === 0),
  },

  // Aap aur conditions yahan add kar sakte hain
};
