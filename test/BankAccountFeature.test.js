import AccountService from "../src/AccountService"
import Console from "../src/Console"
jest.mock("../src/Console")


describe('Print statements', () => {
  it('Print statements', () => {
    const accountService = new AccountService()
    
    accountService.deposit(3000)
    accountService.deposit(1000)
    accountService.withdraw(500)

    accountService.printStatement()

    const myConsole = Console.mock.instances[0]

    expect(myConsole.printLn).toHaveBeenCalledWith("Date || Amount || Balance")
    expect(myConsole.printLn).toHaveBeenCalledWith("01/01/2019 || -500 || 3500")
    expect(myConsole.printLn).toHaveBeenCalledWith("10/12/2018 || 1000 || 4000")
    expect(myConsole.printLn).toHaveBeenCalledWith("01/09/2018 || 3000 || 3000")
  })
})
