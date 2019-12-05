import AccountService from "../src/AccountService"
import * as console from "../src/Console"

jest.mock("../src/Console.js")

describe('Print statements', () => {
  const accountService = new AccountService()

  accountService.deposit(3000)
  accountService.deposit(1000)
  accountService.withdraw(500)

  accountService.printStatement()

  expect(console.printLn).toHaveBeenCalledWith("Date || Amount || Balance")
  expect(console.printLn).toHaveBeenCalledWith("01/01/2019 || -500 || 3500")
  expect(console.printLn).toHaveBeenCalledWith("10/12/2018 || 1000 || 4000")
  expect(console.printLn).toHaveBeenCalledWith("01/09/2018 || 3000 || 3000")
})
