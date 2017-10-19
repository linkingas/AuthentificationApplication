using System.Threading.Tasks;
using System.Web.Http;
using AuthentificationApplication.Service.Infrastructure;
using AuthentificationApplication.Service.ViewModels;

namespace AuthentificationApplication.Service.Controllers
{
    public class ConfidentialController : ApiController
    {
        [ClaimsAuthorization]
        public Task<bool> Post(LoginViewModel vm)
        {
            var result = (vm.Email == "admin@admin.com");


            return Task.FromResult(result);



        }

    }
}
