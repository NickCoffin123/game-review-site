using Microsoft.EntityFrameworkCore;
using server.Data;
using server.Models;

namespace server.Services
{
    public class EditorialService
    {
        private readonly AppDbContext _appDbContext;
        public EditorialService(AppDbContext appDbContext)
        {
            _appDbContext = appDbContext;
        }

        public async Task<List<Editorial>> GetEditorials()
        {
            var response = await _appDbContext.Editorials.ToListAsync();

            return response;
        }

        public async Task<Editorial?> GetEditorial(string slug)
        {
            var response = await _appDbContext.Editorials.FirstOrDefaultAsync(editorial => editorial.Slug == slug);

            return response;
        }
    }
}
