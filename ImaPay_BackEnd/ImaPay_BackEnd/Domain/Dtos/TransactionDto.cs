﻿namespace ImaPay_BackEnd.Domain.Dtos
{
    public class TransactionDto
    {
        public int Amount { get; set; }
        
        public DateTime Date { get; set; }

        public int Sender { get; set; }
    }
}
