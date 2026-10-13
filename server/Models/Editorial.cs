namespace server.Models
{
    public class Editorial
    {
        public int Id { get; set; }
        public required string Title { get; set; }
        public string? Img { get; set; }
        public required string Slug { get; set; }
        public required string Tagline { get; set; }
        public required string[] Body { get; set; }
    }
}
