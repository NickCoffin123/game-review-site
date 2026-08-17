using Microsoft.AspNetCore.Mvc;
using server.Models;

namespace server.Controllers;

[ApiController]
[Route("api/[controller]")]
public class ReviewsController : ControllerBase
{

    private static readonly List<Review> reviews = [
        new Review
        {
            Id = 1,
            Img = "",
            Title = "Persona 5 Royal",
            Slug = "persona-5-royal",
            Rating = 10,
            Tagline = "A masterclass JRPG with time management mechanics.",
            Body = [
                "Sup.",
                "here is the review."
                ],
            Good = [
                "Good stuff here,",
                "and here,",
                "and here"
                ],
            Bad = [
                "Bad stuff here,",
                "and here,",
                "and here"
                ]
            },

        new Review {

            Id = 2,
            Img = "",
            Title = "Resident Evil 4 Remake",
            Slug = "resident-evil-4-remake",
            Rating = 10,
            Tagline = "An action packed adventure filled with captivating gameplay, fantastic setting, and fun challenges.",
            Body = [
                "Sup.",
                "here is the review."
                ],
            Good = [
                "Good stuff here,",
                "and here,",
                "and here"
                ],
            Bad = [
                "Bad stuff here,",
                "and here,",
                "and here"
                ]
        },

        new Review {
            Id = 3,
            Img = "",
            Title = "The Legend of Zelda: Ocarina of Time",
            Slug = "the-legend-of-zelda-ocarina-of-time",
            Rating = 10,
            Tagline = "A timeless classic that sets the example for adventure.",
            Body = [
                "Sup.",
                "here is the review."
                ],
            Good = [
                "Good stuff here,",
                "and here,",
                "and here"
                ],
            Bad = [
                "Bad stuff here,",
                "and here,",
                "and here"
                ]
        }
        ];


    [HttpGet]
    public List<Review> GetReviews()
    {
        return reviews;
    }

    [HttpGet("{slug}")]
    public ActionResult<Review> GetReview(string slug)
    {
        Review? review = reviews.FirstOrDefault(review => review.Slug == slug);

        if (review == null)
        {
            return NotFound();
        }

        return Ok(review);

    }

}