import Console from "../src/Console"

export default class AccountService {
  deposit(amount){} 
  withdraw(amount){} 
  printStatement(){

    const console = new Console()
    console.printLn("Date || Amount || Balance")
  }
}