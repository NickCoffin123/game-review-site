using Microsoft.AspNetCore.Mvc;
using server.Models;
using server.Services;

namespace server.Controllers;

[ApiController]
[Route("api/[controller]")]
public class ReviewsController : ControllerBase
{
    private readonly ReviewService _reviewService;

    public ReviewsController(ReviewService reviewService)
    {
        _reviewService = reviewService;
    }

    [HttpGet]
    public List<Review> GetReviews()
    {
        return _reviewService.GetReviews();
    }

    [HttpGet("{slug}")]
    public ActionResult<Review> GetReview(string slug)
    {
        Review? review = _reviewService.GetReview(slug);

        if (review == null)
        {
            return NotFound();
        }

        return Ok(review);
    }
}