using Microsoft.AspNetCore.Mvc;
using AutoMapper;
using ImaPay_BackEnd.Domain.Dtos;
using ImaPay_BackEnd.Domain.Model;
using ImaPay_BackEnd.Helpers;
using ImaPay_BackEnd.Repositories;
using ImaPay_BackEnd.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Net;


namespace ImaPay_BackEnd.Controllers;

[ApiController]
[Route("/transaction")]
public class AccountController : ControllerBase
{
    private readonly IUserRepository _userRepository;
    private readonly IMapper _mapper;
    public AccountController (IUserRepository userRepository, IMapper mapper)
    {
        _mapper = mapper;
        _userRepository = userRepository;
    }

    [HttpPost]
    public IActionResult CreateTransaction([FromBody] Transaction transaction)
    {
        var account = 
    }
}
