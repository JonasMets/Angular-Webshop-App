// 
//  skapar en modell för vad en användare ska innehålla
// 
// ? = kan uteslutas
//  _id?: string
export interface IUser {
  id?: string
  firstName?: string
  lastName?: string
  email?: string
  userRole?: number
}