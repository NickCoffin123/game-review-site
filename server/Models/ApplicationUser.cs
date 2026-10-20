using Microsoft.AspNetCore.Identity;

namespace server.Models
{
    public class ApplicationUser : IdentityUser
    {
        public required string DisplayName { get; set; }

    }
}
