export const a = process.env.NODE_ENV === 'development' ? // ? ending line
  10 : // : ending line
  20

export const b = process.env.NODE_ENV === 'development'
  && 10 // && beginning line

export const c = process.env.NODE_ENV === 'development'
  || 10 // || beginning line
