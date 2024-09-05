export const dateToString = (date: Date) => {
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDay().toString().padStart(2, '0');
    return `${year}-${month}-${day}`;
}