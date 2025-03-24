const originaluser = {
  user: {
    name: "Ahetesham",
    dep: "cs",
  },
  age: 22,
};

//shalow copy : refrence is shared betweeen both copies chagnes in one will efect others

const shalowCopy = { ...originaluser };

shalowCopy.user.name = "Syed Ahetesham";

console.log(shalowCopy.user);

// deep copy : copies are independent from the original one changes in one won't affect others

const deepCopy = JSON.parse(JSON.stringify(originaluser));

deepCopy.user.name = "Sayed ahetesham";

console.log(deepCopy.user);

export const users = [
  {
    id: 1,
    username: "Aboubakar",
    semester: 6,
    department: "CS",
  },
  {
    id: 2,
    username: "Hassan",
    semester: 6,
    department: "CS",
  },
  {
    id: 3,
    username: "Kashif",
    semester: 5,
    department: "CS",
  },
  {
    id: 4,
    username: "Faheem",
    semester: 5,
    department: "BBA",
  },
  {
    id: 5,
    username: "Akhtar",
    semester: 5,
    department: "AF",
  },
  {
    id: 6,
    username: "Rizwan",
    semester: 5,
    department: "B.ed",
  },
  {
    id: 7,
    username: "kaleem",
    semester: 5,
    department: "EE",
  },
  {
    id: 8,
    username: "qayum",
    semester: 5,
    department: "PE",
  },
  {
    id: 9,
    username: "kabeer",
    semester: 5,
    department: "CSE",
  },
  {
    id: 10,
    username: "Bashir",
    semester: 5,
    department: "CSE",
  },
  {
    id: 11,
    username: "Shams",
    semester: 5,
    department: "Media",
  },
  {
    id: 12,
    username: "Bahadur",
    semester: 5,
    department: "Media",
  },
];
