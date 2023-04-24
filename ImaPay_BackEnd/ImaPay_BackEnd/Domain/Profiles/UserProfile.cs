using System.Transactions;
using AutoMapper;
using ImaPay_BackEnd.Domain.Dtos;
using ImaPay_BackEnd.Domain.Model;

namespace ImaPay_BackEnd.Domain.Profiles
{
    public class UserProfile : Profile
    {
        public UserProfile()
        {
            CreateMap<LoginDto, User>();
            CreateMap<User, LoginDto>();
            CreateMap<Model.Transaction, TransactionDto>();
            CreateMap<TransactionDto, Model.Transaction>();

        }
    }
}
