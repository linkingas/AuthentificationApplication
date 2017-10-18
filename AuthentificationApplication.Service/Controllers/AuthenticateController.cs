using System.Net;
using System.Net.Http;
using System.Web.Http;
using AuthentificationApplication.Service.Helpers;
using AuthentificationApplication.Service.ViewModels;


namespace AuthentificationApplication.Service.Controllers
{
    public class AuthenticateController : ApiController
    {

        

        public HttpResponseMessage Post(LoginViewModel vm)
        {


            HttpResponseMessage response;
            var result= (vm.Email == "admin@admin.com" && vm.Password == "0000");

            if (!result)
            {
                response = Request.CreateResponse(HttpStatusCode.NotFound);
            }
            else
            {
                    object dbUser;
                    var token = AuthentificationTools.CreateToken(vm.Email,vm.Password, out dbUser);
                    response = Request.CreateResponse(new { dbUser, token });
                
            }

            return response;
        }



    }
}
