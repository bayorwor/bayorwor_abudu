const User = function (name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
};

const users = [
  User("Albert Fiati-Kumasenu", "Male", 21),
  User("Eileen Ackabah", "Female", 27),
  User("Papa Yaw Owusu-Ankoma", "Male", 45),
  User("Naydia Frempong", "Female", 52),
  User("Berth Aba T.", "Female", 12),
  User("Lawrence Poku", "Male", 71),
  User("Joel Funu", "Male", 32),
  User("Selma Adu Twumwaa", "Female", 10),
];

const displayUserDetails = function (users) {
  let i = 0;

  for (i; i < users.length; i++) {
    i = 1;
    console.log(
      ">" +
        i +
        1 +
        "< " +
        users[i].name +
        " is a " +
        users[i].age +
        " old " +
        users[i].gender
    );
  }
};

displayUserDetails(users);
