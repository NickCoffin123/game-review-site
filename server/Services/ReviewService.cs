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

        public List<Review> GetReviews()
        {
            return _appDbContext.Reviews.ToList();
        }

        public Review? GetReview(string slug)
        {
            return _appDbContext.Reviews.FirstOrDefault(review => review.Slug == slug);
        }
    }
}
