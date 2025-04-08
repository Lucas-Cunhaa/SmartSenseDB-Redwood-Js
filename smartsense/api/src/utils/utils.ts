export const isEmpty = (field?: string) => !field?.trim()

export const buildWhere = (fields: any) => {
    let where = {}
    
    for (let [key, value] of Object.entries(fields)) {
        if(value) where[key] = value;
    }

    return where;
}