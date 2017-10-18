using System.ComponentModel.DataAnnotations;

namespace AuthentificationApplication.Service.ViewModels
{
    public class LoginViewModel
    {

        [Display(Name = "Email")]
        [EmailAddress]
        public string Email { get; set; }

        [DataType(DataType.Password)]
        [Display(Name = "Password")]
        public string Password { get; set; }



        [Display(Name = "Password")]
        public string Token { get; set; }

    }

}