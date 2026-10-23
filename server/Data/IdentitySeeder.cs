using Microsoft.AspNetCore.Identity;
using server.Models;

namespace server.Data
{
    public static class IdentitySeeder
    {
        public static async Task SeedRolesAsync(
            RoleManager<IdentityRole> roleManager)
        {
            if (!await roleManager.RoleExistsAsync("Admin"))
            {
                var result = await roleManager.CreateAsync(new IdentityRole("Admin"));

                if (!result.Succeeded)
                {
                    throw new Exception("Failed to create Admin role.");
                }
            }

            if (!await roleManager.RoleExistsAsync("Author"))
            {
                var result = await roleManager.CreateAsync(new IdentityRole("Author"));

                if (!result.Succeeded)
                {
                    throw new Exception("Failed to create Author role");
                }
            }

        }

        public static async Task SeedAdminAsync(
            UserManager<ApplicationUser> userManager,
            IConfiguration configuration)
        {
            var username = configuration["Admin:Username"];
            var displayName = configuration["Admin:DisplayName"];
            var password = configuration["Admin:Password"];

            if (string.IsNullOrEmpty(username) ||
                string.IsNullOrEmpty(displayName) ||
                string.IsNullOrEmpty(password))
            {
                throw new Exception("Admin credentials are missing.");
            }

            var existingAdmin = await userManager.FindByNameAsync(username);

            if (existingAdmin == null)
            {
                var admin = new ApplicationUser
                {
                    UserName = username,
                    DisplayName = displayName,

                };
                var result = await userManager.CreateAsync(admin, password);

                if (!result.Succeeded)
                {
                    var errors = string.Join(", ", result.Errors.Select(e => e.Description));

                    throw new InvalidOperationException($"Failed to create Admin: {errors}");
                }

                var roleResult = await userManager.AddToRoleAsync(admin, "Admin");

                if (!roleResult.Succeeded)
                {
                    var errors = string.Join(", ", roleResult.Errors.Select(e => e.Description));

                    throw new InvalidOperationException($"Failed to assign Admin role: {errors}");
                }
            }
            else
            {
                if (!await userManager.IsInRoleAsync(existingAdmin, "Admin"))
                {
                    throw new Exception("User already exists but does not have admin role.");
                }
            }



        }
    }
}
