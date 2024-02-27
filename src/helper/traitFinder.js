import traitJSON from '../traits.json'

const findItemById = (items, id) => {
    let idx = 0
    for (let item of items) {
        const rangeParts = item.Range.split('-').map(Number);
        const startRange = rangeParts[0];
        const endRange = rangeParts[1];

        if (id >= startRange && id <= endRange) {
            return idx;
        }
        idx++;
    }
    return null; 
}

export const getImageUrl = (collection, trait) => {
    return `/traits/small/${traitJSON[collection][trait].Filename}`
}

export const getImageUrlLarge = (collection, trait) => {
    return `/traits/large/${traitJSON[collection][trait].Filename}`
}

export const getTraitName = (collection, trait) => {
    return traitJSON[collection][trait].Name
}

export const getTraitRarity = (collection, trait) => {
    return traitJSON[collection][trait].Type.toLowerCase()
}

export const getRealTrait = (traits) => {
    let item6 = findItemById(traitJSON.background, traits[0])
    let item5 = findItemById(traitJSON.back, traits[1])
    let item1 = findItemById(traitJSON.body, traits[2])
    let item3 = findItemById(traitJSON.gear, traits[3])
    let item2 = findItemById(traitJSON.helmets, traits[4])
    let item4 = findItemById(traitJSON.extra, traits[5])
    return [item1, item2, item3, item4, item5, item6]
}   

