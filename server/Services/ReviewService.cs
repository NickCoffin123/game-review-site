using Microsoft.EntityFrameworkCore;
using server.Data;
using server.Models;


namespace server.Services
{
    public class ReviewService
    {

        private readonly AppDbContext _appDbContext;

        public ReviewService(AppDbContext appDbContext)
        {
            _appDbContext = appDbContext;
        }

        public async Task<List<Review>> GetReviews()
        {
            var response = await _appDbContext.Reviews.ToListAsync();

            return response;
        }

        public async Task<Review?> GetReview(string slug)
        {
            var response = await _appDbContext.Reviews.FirstOrDefaultAsync(review => review.Slug == slug);

            return response;
        }
    }
}
