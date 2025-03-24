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
