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
    public async Task<List<Review>> GetReviews()
    {
        var response = await _reviewService.GetReviews();

        return response;
    }

    [HttpGet("{slug}")]
    public async Task<ActionResult<Review>> GetReview(string slug)
    {
        Review? review = await _reviewService.GetReview(slug);

        if (review == null)
        {
            return NotFound();
        }

        return Ok(review);
    }
}