using AutoMapper;
using ImaPay_BackEnd.Domain.Model;
using ImaPay_BackEnd.Repositories;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;


namespace ImaPay_BackEnd.Controllers
{
    [ApiController]
    [Route("/transactions")]
    public class TransactionController : ControllerBase
    {

    private readonly ITransactionRepository _transactionRepository;
    private readonly IMapper _mapper;

    public TransactionController(ITransactionRepository transactionRepository, IMapper mapper)
    {
        _mapper = mapper;
        _transactionRepository = transactionRepository;
    }

        [HttpGet("{id}")]
        public ActionResult<List<Transaction>> GetTransactionByAccountId(int id)
        {
            var allAccountTransaction = _transactionRepository.GetByAccountNumber(id);
            return Ok(allAccountTransaction);
        }


    }
}