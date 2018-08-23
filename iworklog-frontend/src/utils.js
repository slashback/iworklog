export const formatTime = (timeInSeconds) => {
    if (timeInSeconds === 0) {
        return '-'
    }
    const oneHour = 3600
    const hours = ~~(timeInSeconds / oneHour)
    const minutes = ~~((timeInSeconds - (hours * oneHour)) / 60)
    const hoursStr = hours === 0 ? '' : `${hours}h `
    const minutesStr = minutes === 0 ? '' : `${minutes}m `

    return `${hoursStr}${minutesStr}`
}

export const getUserNameFromUrl = () => {
    const url = new URL(window.location.href);
    return url.searchParams.get("user_name");
}