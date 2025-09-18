function formatPrice(value) {
    return `${value.toFixed(0).replace(/\d(?=(\d{3})+$)/g, '$&,')} VND`
}

function formatPriceNoSuffix(value) {
    return `${value.toFixed(0).replace(/\d(?=(\d{3})+$)/g, '$&,')}`
}

function formatVietnamDate(isoString, withTime = false) {
    if (!isoString) return "";

    const date = new Date(isoString);

    // Chuyển sang giờ Việt Nam thủ công
    const utc = date.getTime() + date.getTimezoneOffset() * 60000;
    const vnDate = new Date(utc + 7 * 60 * 60000);

    const day = String(vnDate.getDate()).padStart(2, "0");
    const month = String(vnDate.getMonth() + 1).padStart(2, "0");
    const year = vnDate.getFullYear();

    let formatted = `${day}/${month}/${year}`;

    if (withTime) {
        const hours = String(vnDate.getHours()).padStart(2, "0");
        const minutes = String(vnDate.getMinutes()).padStart(2, "0");
        const seconds = String(vnDate.getSeconds()).padStart(2, "0");
        formatted += ` ${hours}:${minutes}:${seconds}`;
    }

    return formatted;
}

export {
    formatPrice, formatVietnamDate, formatPriceNoSuffix
}