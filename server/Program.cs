using Microsoft.EntityFrameworkCore;
using server.Data;
using server.Models;
using server.Services;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
// Learn more about configuring OpenAPI at https://aka.ms/aspnet/openapi
builder.Services.AddOpenApi();
builder.Services.AddControllers();
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowReactDev", policy =>
    {
        policy.WithOrigins("http://localhost:5173");
        policy.AllowAnyHeader();
        policy.AllowAnyMethod();
    });
});
builder.Services.AddScoped<ReviewService>();
builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection"))
    .UseSeeding((context, _) =>
    {
        if (!context.Set<Review>().Any())
        {
            context.Set<Review>().AddRange(
                new Review
                {

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
                new Review
                {

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
                new Review
                {

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
                );

            context.SaveChanges();
        }
    }));

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.MapOpenApi();
}

app.UseHttpsRedirection();
app.UseCors("AllowReactDev");
app.MapControllers();



app.Run();
