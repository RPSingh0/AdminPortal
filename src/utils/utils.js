export function getNumberOfPages(elements, pageSize) {
    return Math.ceil(elements / pageSize);
}

export function getDataForPage(data, pageNumber) {
    const from = pageNumber * 6;
    const to = from + 6;
    return data.slice(from, to);
}