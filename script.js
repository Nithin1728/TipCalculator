
const billInput = document.getElementById('billTotalInput')
const tipInput = document.getElementById('tipInput')
const numberOfPeopleDiv = document.getElementById('numberOfPeople')
const perPersonTotalDiv = document.getElementById('perPersonTotal')

//getting no of people from NoOfPeopleDiv
let numberOfPeople = Number(numberOfPeopleDiv.innerText)
                
const calculateBill = () => {
  const Bill = Number(billInput.value)
  const Tip = Number(tipInput.value)
  const TipPercent = Tip/100
  
  const TotalTipAmount = TipPercent * Bill
  const Total = Bill+TotalTipAmount
  const TotalPerPerson = Total/numberOfPeople
  
perPersonTotalDiv.innerText = `$${TotalPerPerson.toFixed(2)}`
}

const increasePeople = () => {
  // increment the amount
  numberOfPeople += 1

  // update the DOM with the new number of people
  numberOfPeopleDiv.innerText = numberOfPeople

  // calculate the bill based on the new number of people
  calculateBill()
}
const decreasePeople = () => {
  // guard clause
  // if amount is 1 or less simply return
  // (a.k.a you can't decrease the number of people to 0 or negative!)
  if (numberOfPeople <= 1) {
    return
  }

  // decrement the amount
  numberOfPeople -= 1

  // update the DOM with the new number of people
  numberOfPeopleDiv.innerText = numberOfPeople

  // calculate the bill based on the new number of people
  calculateBill()
}
