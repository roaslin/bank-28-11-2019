import AccountService from "../src/AccountService"
import TransacionRepository from "../src/TransactionRepository"
import Transaction from "../src/Transaction"

jest.mock("../src/TransactionRepository")

describe('Account Service should', () => {
  it('deposit an amount', () => {
    const repositoy = new TransacionRepository()
    const accountService = new AccountService(repositoy)

    accountService.deposit(100)
      
    const depositTransaction = new Transaction(100)
    expect(repositoy.storeTransaction).toHaveBeenCalledWith(depositTransaction)
  })

  it('withdraw an amount', () => {
    const repositoy = new TransacionRepository()
    const accountService = new AccountService(repositoy)

    accountService.withdraw(200)
      
    const withdrawTransaction = new Transaction(-200)
    expect(repositoy.storeTransaction).toHaveBeenCalledWith(withdrawTransaction)
  })
})
