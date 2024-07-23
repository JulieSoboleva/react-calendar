export default function getDateObject(date) {
    const capitalize = (s) => {
        return s.charAt(0).toUpperCase() + s.slice(1)
    }

    const options = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' };
    const fullDate = new Intl.DateTimeFormat('ru-RU', options).format(date);
    const splittedDate = fullDate.split(/[,\sг.]+/g);

    const [weekDay, day, month, year] = splittedDate;

    const capitalizedWeekDay = capitalize(weekDay);

    const capitalizedMonth = capitalize(
        new Intl.DateTimeFormat('ru-RU', { month: 'long' }).format(date)
    );

    return {
        capitalizedWeekDay,
        day,
        upperCasedMonth: month.toUpperCase(),
        year,
        capitalizedMonth,
    }
}