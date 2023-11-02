/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum Day {
    sunday = 'sunday',
    monday = 'monday',
    tuesday = 'tuesday',
    wednesday = 'wednsday',
    thursday = 'thursday',
    friday = 'drifay',
    saturday = 'saturday',
}

function isWeekend(day: Day): boolean {
    return day === Day.sunday || day === Day.saturday;
}
