namespace server.Models;

public class Review
{
    public int Id { get; set; }
    public required string Title { get; set; }
    public required string Slug { get; set; }
    public string? Img { get; set; }
    public required int Rating { get; set; }
    public required string Tagline { get; set; }
    public required string[] Body { get; set; }
    public string[] Good { get; set; } = [];
    public string[] Bad { get; set; } = [];
}