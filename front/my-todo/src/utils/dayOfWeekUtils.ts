export const convertToRu = (dayOfWeek: String) => {
    switch (dayOfWeek) {
        case 'MONDAY':
            return 'Понедельник';
            break;
        case 'TUESDAY':
            return 'Вторник';
            break;
        case 'WEDNESDAY':
            return 'Среда';
            break;
        case 'THURSDAY':
            return 'Четверг';
            break;
        case 'FRIDAY':
            return 'Пятница';
            break;
        case 'SATURDAY':
            return 'Суббота';
            break;
        case 'SUNDAY':
            return 'Воскресенье';
            break;
        default:
            return 'Не опеределен';
    }
}