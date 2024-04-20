using System.Security.Cryptography.X509Certificates;
using Microsoft.AspNetCore.Mvc;
using SolidSpellViewer.repositories;

namespace SolidSpellViewer.Controllers
{
    [ApiController]
    [Route("api/[controller]/[action]")]
    public class SpellsController : ControllerBase
    {
        private readonly ISpellRepository _spellRepository;
        public SpellsController(ISpellRepository spellRepository)
        {
            _spellRepository = spellRepository;
        }

        [HttpGet(Name = "GetAll")]
        public ActionResult<List<Spell>> GetAll()
        {
            
            return Ok(_spellRepository.GetSpells());
        }
    }
}
