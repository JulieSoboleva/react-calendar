export default function getDays(date) {
    const copiedDate = new Date(date.getTime());

    let firstDay = new Date(
        copiedDate.getFullYear(),
        copiedDate.getMonth(),
    ).getDay();

    firstDay = (firstDay === 0 ? 7 : firstDay) - 1;

    const lastDate = new Date(
        copiedDate.getFullYear(),
        copiedDate.getMonth() + 1,
        0
    ).getDate();

    const weeksNumber = Math.ceil(lastDate / 7);
    const daysNumber = 7;

    const days = [];

    let currentMonthDay = 1;
    let nextMonthDay = 1;

    copiedDate.setDate(0);

    for (let i = 0; i < weeksNumber; i += 1) {
        const subArray = [];
        for (let j = 0; j < daysNumber; j += 1) {
            if (days.length === 0 && j < firstDay) {
                copiedDate.setDate(copiedDate.getDate() - (j ? 1 : 0));
                subArray.unshift(copiedDate.getDate());
                continue;
            } else if (currentMonthDay > lastDate) {
                subArray.push(nextMonthDay);
                nextMonthDay += 1;
            } else {
                subArray.push(currentMonthDay);
                currentMonthDay += 1;
            }
        }
        days.push(subArray);
    }

    return days;
}