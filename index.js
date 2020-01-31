module.exports = (groupingBy) => {
    let initialized = false;
    const groupFunction = (typeof groupingBy !== "string")
        ? groupingBy
        : (item) => item[groupingBy];;

    return (group, item) => {
        if (!initialized && group !== {}) {
            initialized = true;
            group = {[groupFunction(group)] : [group] }
        }
        const key = groupFunction(item);
        return {...group, [key] : [ ...(group[key] || []), item] };
    }
};