module.exports = (success=false, message, result) => {
    if (!result) {
        return {
            success,
            message,
        }
    } else {
        return {
            success,
            message,
            result
        }
    }
} 