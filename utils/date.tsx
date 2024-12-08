export const formatTimeline = ({startDate, endDate}: {startDate: Date, endDate: Date}) => {
  
    const startMonth = startDate.toLocaleString("default", { month: "long" });
    const startDay = startDate.getDate();
    const startYear = startDate.getFullYear();
  
    const endMonth = endDate.toLocaleString("default", { month: "long" });
    const endDay = endDate.getDate();
    const endYear = endDate.getFullYear();
  
    // If the start and end dates are in the same month and year
    if (startMonth === endMonth && startYear === endYear) {
      return `${startMonth} ${startDay}-${endDay}, ${startYear}`;
    }
  
    // If the start and end dates are in the same year but different months
    if (startYear === endYear) {
      return `${startMonth} ${startDay} - ${endMonth} ${endDay}, ${startYear}`;
    }
  
    // If the start and end dates are in different years
    return `${startMonth} ${startDay}, ${startYear} - ${endMonth} ${endDay}, ${endYear}`;
}