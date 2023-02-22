export const parseDataFromString = (jsonString: string) => {
    const obj = parseJsonFromString(jsonString)

    if (!Array.isArray(obj)) {
        return null;
    }
    return obj.filter(item => isTableRecord(item))
}

export const parseJsonFromString = (jsonString: string) => {
    let o = null;
    try {
        o = JSON.parse(jsonString)
    }
    catch (e) {
        return null
    }
    return o;
}

export const isTableRecord = (item: unknown) => {

    if (!item || typeof item !== "object") return false

    const recordKeys = ['name', 'value']
    const itemKeys = Object.keys(item)

    if (itemKeys.length !== recordKeys.length) return false

    for (let i = 0; i < recordKeys.length; i++) {
        if (itemKeys[i] !== recordKeys[i]) return false;
    }

    return true

}

