/**
 * GROUP BY
 * @param data
 * @param property
 * @return {*}
 */
export function groupBy(data, property) {
    return data.reduce(function (acc, obj) {
        var key = obj[property];
        if (!acc[key]) {
            acc[key] = [];
        }
        acc[key].push(obj);
        return acc;
    }, {});
}