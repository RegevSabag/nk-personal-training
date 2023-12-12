export const dictionary: { [key: string]: string } = {
    'male': 'זכר' ,
    'female': 'נקבה', 
    'general': 'כללי',
    'chest': 'חזה', 
    'arms': 'ידיים', 
    'legs': 'רגליים', 
    'shoulders': 'כתפיים', 
    'back': 'גב',
    'backside': 'ישבן',
    'belly': 'בטן'
}


export const translate =  (word: string) => {
    return dictionary[word]? dictionary[word] :"unknowing";
}