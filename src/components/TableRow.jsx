import PropTypes from 'prop-types'

function TableRow({ week, currentDay, firstWeek, lastWeek }) {
    const days = week.map((day) => {
        let className;

        if (day === currentDay) {
            className = 'ui-datepicker-today';
        }

        if (firstWeek && day > week[6]) {
            className = 'ui-datepicker-other-month';
        }

        if (lastWeek && day < week[0]) {
            className = 'ui-datepicker-other-month';
        }

        return <td className={className} key={day.toString()}>{day}</td>;
    });

    return <tr>{days}</tr>;
}

TableRow.propTypes = {
    week: PropTypes.array.isRequired,
    currentDay: PropTypes.number.isRequired,
    firstWeek: PropTypes.bool.isRequired,
    lastWeek: PropTypes.bool.isRequired,
};

export default TableRow;