using AutoMapper;
using ImaPay_BackEnd.Domain;
using ImaPay_BackEnd.Domain.Dtos;
using ImaPay_BackEnd.Domain.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ImaPay_BackEnd.Repositories
{
    public class TransactionRepository : ITransactionRepository
    {
        public BankContext _bank { get; set;}
        public IMapper _mapp { get; }

        public TransactionRepository(BankContext context, IMapper mapp)
        {
            _bank = context;
            _mapp = mapp;
        }

        public List<Transaction> GetAllAccounts()
        {
           var transactions =  _bank.Transactions.ToList();
           return transactions;

        }

        public List<TransactionDto> GetByAccountNumber(int accountNumber)
        {
           var transactions = _bank.Transactions.Where(t => t.AccountId == accountNumber).ToList();
           var transactionsDto = transactions.Select(a => _mapp.Map<TransactionDto>(a)).ToList();
           return transactionsDto;
        }

        List<Transaction> ITransactionRepository.GetByAccountNumber(int accountNumber)
        {
            throw new NotImplementedException();
        }
    }
}