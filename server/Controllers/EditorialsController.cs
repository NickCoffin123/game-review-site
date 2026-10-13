using Microsoft.AspNetCore.Mvc;
using server.Models;
using server.Services;

namespace server.Controllers;

[ApiController]
[Route("api/[controller]")]
public class EditorialsController : ControllerBase
{
    private readonly EditorialService _editorialService;

    public EditorialsController(EditorialService editorialService)
    {
        _editorialService = editorialService;
    }

    [HttpGet]
    public async Task<List<Editorial>> GetEditorials()
    {
        var response = await _editorialService.GetEditorials();

        return response;
    }

    [HttpGet("{slug}")]
    public async Task<ActionResult<Editorial>> GetEditorial(string slug)
    {
        Editorial? editorial = await _editorialService.GetEditorial(slug);

        if (editorial == null)
        {
            return NotFound();
        }
        return Ok(editorial);
    }
}
