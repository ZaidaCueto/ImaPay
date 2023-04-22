using ImaPay_BackEnd.Domain;
using ImaPay_BackEnd.Domain.Model;

namespace ImaPay_BackEnd.Repositories;

public class AccountRepository
{
    private readonly BankContext _bank;

    public AccountRepository(BankContext context)
    {
        _bank = context;
    }

    private List<Transaction> _getAll()
    {
        return _bank.Transactions.ToList();
    }

    public Transaction GetAllTransactionsById(int id)
    {
        return _getAll().Find(transaction => transaction.Id.Equals(id));
    }
}
