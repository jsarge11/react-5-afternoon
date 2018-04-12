let initialState = {
 loanType: 'Home Purchase',
 propertyType: 'Single Family Home',
 city: '',
 propToBeUsedOn: '',
 found: "false",
 realEstateAgent: "false",
 cost: 0,
 downPayment: 0,
 credit: '',
 history: '',
 addressOne: '',
 addressTwo: '',
 addressThree: '',
 firstName: '',
 lastName: '',
 email: ''
}

const UPDATE_LOAN_TYPE = 'UPDATE_LOAN_TYPE'
const UPDATE_PROPERTY_TYPE = 'UPDATE_PROPERTY_TYPE'
const UPDATE_CITY = 'UPDATE_CITY'
const UPDATE_PROPERTY = 'UPDATE_PROPERTY'
const UPDATE_FOUND = 'UPDATE_FOUND'
const UPDATE_AGENT = 'UPDATE_AGENT'
const UPDATE_COST = 'UPDATE_COST'
const UPDATE_DOWN_PAYMENT = 'UPDATE_DOWN_PAYMENT'
const UPDATE_CREDIT = 'UPDATE_CREDIT'
const UPDATE_HISTORY = 'UPDATE_HISTORY'
const UPDATE_ADDRESS_ONE = 'UPDATE_ADDRESS_ONE'
const UPDATE_ADDRESS_TWO = 'UPDATE_ADDRESS_TWO'
const UPDATE_ADDRESS_THREE = 'UPDATE_ADDRESS_THREE'
const UPDATE_FIRST = 'UPDATE_FIRST'
const UPDATE_LAST = 'UPDATE_LAST'
const UPDATE_EMAIL = 'UPDATE_EMAIL'


export function updateLoanType(loanType) {
 return {
  type: UPDATE_LOAN_TYPE,
  payload: loanType
 }
}
export function updatePropertyType(property) {
 return {
  type: UPDATE_PROPERTY_TYPE,
  payload: property
 }
}
export function updateCity(city) {
 return {
  type: UPDATE_CITY,
  payload: city
 }
}
export function updateProperty(property) {
 return {
  type: UPDATE_PROPERTY,
  payload: property
 }
}
 export function updateFound(answer) {
  return {
   type: UPDATE_FOUND,
   payload: answer
  }
}
 export function updateAgent(answer) {
  return {
   type: UPDATE_AGENT,
   payload: answer
  }
}
 export function updateCost(answer) {
  return {
   type: UPDATE_COST,
   payload: answer
  }
}
 export function updateDownPayment(answer) {
  return {
   type: UPDATE_DOWN_PAYMENT,
   payload: answer
  }
}
 export function updateCredit(answer) {
  console.log(answer);
  return {
   type: UPDATE_CREDIT,
   payload: answer
  }
}
 export function updateHistory(answer) {
  return {
   type: UPDATE_HISTORY,
   payload: answer
  }
}
 export function updateAddressOne(answer) {
  return {
   type: UPDATE_ADDRESS_ONE,
   payload: answer
  }
}
 export function updateAddressTwo(answer) {
  return {
   type: UPDATE_ADDRESS_TWO,
   payload: answer
  }
}
 export function updateAddressThree(answer) {
  return {
   type: UPDATE_ADDRESS_THREE,
   payload: answer
  }
}
 export function updateFirst(answer) {
  return {
   type: UPDATE_FIRST,
   payload: answer
  }
}
 export function updateLast(answer) {
  return {
   type: UPDATE_LAST,
   payload: answer
  }
}
 export function updateEmail(answer) {
  return {
   type: UPDATE_EMAIL,
   payload: answer
  }
}

function reducer(state = initialState, action){
 switch(action.type) {
  case (UPDATE_LOAN_TYPE) :
   return Object.assign({}, state, {loanType: action.payload})
  case (UPDATE_PROPERTY_TYPE) :
   return Object.assign({}, state, {propertyType: action.payload})
  case (UPDATE_CITY) :
   return Object.assign({}, state, {city: action.payload})
  case (UPDATE_PROPERTY) :
   return Object.assign({}, state, {propToBeUsedOn: action.payload})
  case (UPDATE_FOUND) : 
   return Object.assign({}, state, {found: action.payload})
  case (UPDATE_AGENT) : 
   return Object.assign({}, state, {realEstateAgent: action.payload})
  case (UPDATE_COST) : 
   return Object.assign({}, state, {cost: action.payload})
  case (UPDATE_DOWN_PAYMENT) : 
   return Object.assign({}, state, {downPayment: action.payload})
  case (UPDATE_CREDIT) : 
   return Object.assign({}, state, {credit: action.payload})
  case (UPDATE_HISTORY) : 
   return Object.assign({}, state, {history: action.payload})
  case (UPDATE_ADDRESS_ONE) : 
   return Object.assign({}, state, {addressOne: action.payload})
  case (UPDATE_ADDRESS_TWO) : 
   return Object.assign({}, state, {addressTwo: action.payload})
  case (UPDATE_ADDRESS_THREE) : 
   return Object.assign({}, state, {addressThree: action.payload})
  case (UPDATE_FIRST) : 
   return Object.assign({}, state, {firstName: action.payload})
  case (UPDATE_LAST) : 
   return Object.assign({}, state, {lastName: action.payload})
  case (UPDATE_EMAIL) : 
   return Object.assign({}, state, {email: action.payload})
  
  default: 
   return state
 }

}

export default reducer