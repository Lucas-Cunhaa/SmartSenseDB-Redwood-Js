export const isEmpty = (field?: string) => !field?.trim()

export const buildValidObject = (fields: any) => {
    let newFields = {};

    Object.entries(fields).forEach(([key, value]) => {
        if(value) fields[key] = value
    })

    return newFields;
}