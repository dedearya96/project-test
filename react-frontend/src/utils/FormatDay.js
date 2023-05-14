export const formatDay = (dateStr) => {
    const dateObj = new Date(dateStr);
    const options = { day: 'numeric', month: 'long', year: 'numeric' };
    const formattedDate = dateObj.toLocaleDateString('id-ID', options);
    return formattedDate;
}