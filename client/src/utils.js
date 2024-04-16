export const formatPopulation = (population) => {
    if (population >= 1000000) {
        return (population / 1000000).toFixed(1) + " M";
    } else if (population >= 1000) {
        return (population / 1000).toFixed(1) + " K";
    } else {
        return population;
    }
};

export const formatArea = (area) => {
    return area.toLocaleString() + " m²";
};