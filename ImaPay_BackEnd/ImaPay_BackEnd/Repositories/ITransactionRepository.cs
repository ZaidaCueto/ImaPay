using ImaPay_BackEnd.Domain.Dtos;
using ImaPay_BackEnd.Domain.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ImaPay_BackEnd.Repositories
{
    public interface ITransactionRepository
    {
    public List<Transaction> GetAllAccounts();

    public List<TransactionDto> GetByAccountNumber(int accountNumber);
    }
}