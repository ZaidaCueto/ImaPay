﻿using System.ComponentModel.DataAnnotations;

namespace ImaPay_BackEnd.Domain.Model;

public class User : Entity
{
    public string Name { get; set; } = null!;
    public string Email { get; set; } = null!;
    public string Password { get; set; } = null!;
    public string Cpf { get; set; } = null!;

    public string? PhoneNumber { get; set; }

    public string Birthday { get; set; } = null!;

    public Account Account { get; set; } = null!;

    public Address Address { get; set; } = null!;

}
