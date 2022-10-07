
export function getDate(days) {
    const date = new Date ()
    const prevDate = new Date(date.getTime());
    prevDate.setDate(date.getDate() - days);

    return prevDate;
}

export function isLaterThan ({created}, prevDay){
    const checkDay = new Date (created);
    const pastDay = getDate(prevDay);

    return checkDay >= pastDay;
}