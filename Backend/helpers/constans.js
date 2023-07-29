import { dateFormat } from "./formatData.js"

export const btcId = "1e31218a-e44e-4285-820c-8282ee222035"
export const ethId = "21c795f5-1bfd-40c3-858e-e9d7e820c6d0"
export const cardanoId= "362f0140-ecdd-4205-b8a0-36f0fd5d8167"

const now = new Date(((new Date()).getTime() - 24 * 3600 * 1000))
const oneWeekBefore = new Date(now.getTime() - 3600*24*6*1000)
export const formatNow = dateFormat(now)
export const formatOneWeekBefore = dateFormat(oneWeekBefore)