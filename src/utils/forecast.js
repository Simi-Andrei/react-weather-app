export const getDayOfTheWeek = (timestamp) => {
  const date = new Date(timestamp * 1000);

  const dayIndex = date.getDay();

  switch (dayIndex) {
    case 0:
      return "Sunday";
    case 1:
      return "Monday";
    case 2:
      return "Tuesday";
    case 3:
      return "Wednesday";
    case 4:
      return "Thursday";
    case 5:
      return "Friday";
    case 6:
      return "Saturday";
    default:
      throw new Error("Indexul trebuie sa fie intre 0 si 6.");
  }
};
