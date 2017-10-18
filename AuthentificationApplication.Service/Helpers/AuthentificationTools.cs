using System;
using System.Collections.Generic;
using System.Security.Cryptography;
using System.Text;
using JWT;
namespace AuthentificationApplication.Service.Helpers
{
    public static class AuthentificationTools

        {
       
            public static string CreateToken(string email,string password, out object dbUser)
            {
                var unixEpoch = new DateTime(1970, 1, 1, 0, 0, 0, DateTimeKind.Utc);
                var expiry = Math.Round((DateTime.UtcNow.AddHours(2) - unixEpoch).TotalSeconds);
                var issuedAt = Math.Round((DateTime.UtcNow - unixEpoch).TotalSeconds);
                var notBefore = Math.Round((DateTime.UtcNow.AddMonths(6) - unixEpoch).TotalSeconds);


                var payload = new Dictionary<string, object>
                {
                    {"email", email},
                    
                    {"role", "Admin"  },
                    
                    {"nbf", notBefore},
                    {"iat", issuedAt},
                    {"exp", expiry}
                };

           
                const string apikey = "secretKey";

                var token = JsonWebToken.Encode(payload, apikey, JwtHashAlgorithm.HS256);

                dbUser = new { email};
                return token;
            }
         
        public static string CreateSalt()
            {
                var data = new byte[0x10];
                using (var cryptoServiceProvider = new RNGCryptoServiceProvider())
                {
                    cryptoServiceProvider.GetBytes(data);
                    return Convert.ToBase64String(data);
                }
            }

            /// <summary>
            ///     Encrypts a password using the given salt
            /// </summary>
            /// <param name="password"></param>
            /// <param name="salt"></param>
            /// <returns></returns>
            public static string EncryptPassword(string password, string salt)
            {
                using (var sha256 = SHA256.Create())
                {
                    var saltedPassword = $"{salt}{password}";
                    var saltedPasswordAsBytes = Encoding.UTF8.GetBytes(saltedPassword);
                    return Convert.ToBase64String(sha256.ComputeHash(saltedPasswordAsBytes));
                }
            }


        



    }
}
