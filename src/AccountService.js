import Transaction from "../src/Transaction"

export default class AccountService {
  constructor(repository){
    this.repository = repository
  }
  deposit(amount){
    let transaction = new Transaction(amount)
    this.repository.storeTransaction(transaction)
  } 
  withdraw(amount){
    let transaction = new Transaction(-amount)
    this.repository.storeTransaction(transaction)
  } 
  printStatement(){}
}