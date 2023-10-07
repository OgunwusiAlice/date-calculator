export default function useDate() {
  const date = new Date();

  const getDay = () => {
    return date.getDay() + 1;
  };

  const getMonth = () => {
    return date.getMonth() + 1;
  };

  const addDay = (numberOfDays, baseDate = date) => {
    const date = new Date(baseDate);
    date.setDate(date.getDate() + numberOfDays);

    return date;
    //N.B if day after adding is greater than number of days for that month, date returned should be a new month date
  };

  const addMonth = (numberOfMonths, baseDate = date) => {
    const date = new Date(baseDate);
    date.setMonth(date.getMonth() + numberOfMonths);

    return date;
    //N.B if month after adding is greater than 11, date returned should be a new year
  };

  return { date, getDay, getMonth, addDay, addMonth };
}
