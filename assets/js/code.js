function getcode() {
    const date = new Date();

    const daysOfWeek = ['SUNDAY', 'MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY'];
    const dayOfWeek = daysOfWeek[date.getDay()]; // Day of the week (SUNDAY-SATURDAY)
    
    const hour = date.getHours(); // Current hour (0-23)
    const year = date.getFullYear(); // Full year (e.g., 2024)
    const dayNumber = date.getDate(); // Day of the month (1-31)
    const month = date.toLocaleString('default', { month: 'long' }).toUpperCase(); // Full month name, uppercase
    const isAfternoon = hour >= 12 ? 'T' : 'F'; // T for afternoon, F for morning
    const monthNumber = date.getMonth() + 1; // Month number (1-12)
    const dayOfYear = Math.ceil((date - new Date(year, 0, 1)) / 86400000); // Day number in the year (1-365/366)

    // Format: DAYOFWEEKHOURYEARNUMBERDAYNUMBERMONTHT_OR_F_AFTERNOON?MONTHNUMBERDAYOFYEAR
    return `${dayOfWeek}${hour}${year}${dayNumber}${month}${isAfternoon}${monthNumber}${dayOfYear}`;
}

// BTW: This Is Not Meant To Be Secure But It Is Meant To Just Make It Hard To Jump Straight To Quiz If You Dont Know JS