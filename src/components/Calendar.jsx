import getDateObject from "../helpers/getDateObject"
import TableBody from './TableBody'
import PropTypes from 'prop-types'

function Calendar(props) {
    const dateObj = getDateObject(props.date);
    console.dir(dateObj)
    return (
        <div className="ui-datepicker">
            <div className="ui-datepicker-material-header">
                <div className="ui-datepicker-material-day">
                    {dateObj.capitalizedWeekDay}
                </div>
                <div className="ui-datepicker-material-date">
                    <div className="ui-datepicker-material-day-num">{dateObj.day}</div>
                    <div className="ui-datepicker-material-month">{dateObj.upperCasedMonth}</div>
                    <div className="ui-datepicker-material-year">{dateObj.year}</div>
                </div>
            </div>
            <div className="ui-datepicker-header">
                <div className="ui-datepicker-title">
                    <span className="ui-datepicker-month">{dateObj.capitalizedMonth}</span>&nbsp;
                    <span className="ui-datepicker-year">{dateObj.year}</span>
                </div>
            </div>
            <table className="ui-datepicker-calendar">
                <colgroup>
                    <col/>
                    <col/>
                    <col/>
                    <col/>
                    <col/>
                    <col className="ui-datepicker-week-end"/>
                    <col className="ui-datepicker-week-end"/>
                </colgroup>
                <thead>
                    <tr>
                        <th scope="col" title="Понедельник">Пн</th>
                        <th scope="col" title="Вторник">Вт</th>
                        <th scope="col" title="Среда">Ср</th>
                        <th scope="col" title="Четверг">Чт</th>
                        <th scope="col" title="Пятница">Пт</th>
                        <th scope="col" title="Суббота">Сб</th>
                        <th scope="col" title="Воскресенье">Вс</th>
                    </tr>
                </thead>
                <TableBody date={props.date}/>
            </table>
        </div>
    );
}

Calendar.propTypes = {
    date: PropTypes.instanceOf(Date).isRequired,
};

export default Calendar;