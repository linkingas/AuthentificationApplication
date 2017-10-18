using System;
using System.Net.Http;
using AuthentificationApplication.Service.Ressources;

using Microsoft.Owin.Hosting;

namespace AuthentificationApplication.Service
{
    class Program
    {
        static void Main(string[] args)
        {
            string baseAddress = "http://localhost:11857/";

            // Start OWIN host 
            using (WebApp.Start<Startup>(url: baseAddress))
            {
                // Create HttpCient and make a request to api/values 
                HttpClient client = new HttpClient();

            

                Console.WriteLine(Resources.Program_Main_Server_started );
                //Console.WriteLine(response);
                //Console.WriteLine(response.Content.ReadAsStringAsync().Result);
                Console.ReadLine();
            }
        }
    }
}
