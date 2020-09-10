using System.Linq;
using System.Threading.Tasks;
using Core.Entities.Identity;
using Microsoft.AspNetCore.Identity;

namespace Infrastructure.Identity
{
    public class AppIdentityDBContextSeed
    {
        public static async Task SeedUsersAsync(UserManager<AppUser> userManager)
        {
            if (!userManager.Users.Any())
            {
                var user = new AppUser
                {
                    DisplayName = "John Doe",
                    Email = "john@doe.com",
                    UserName = "john@doe.com",
                    Adress = new Adress
                    {
                        FirstName = "John",
                        LastName = "Doe",
                        Street = "1. Sokak",
                        City = "Istanbul",
                        State = "TR",
                        Zipcode = "34100"
                    }
                };
                await userManager.CreateAsync(user, "Pa$$w0rd");
            }
        }
    }
}