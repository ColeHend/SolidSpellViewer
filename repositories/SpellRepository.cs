using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Threading.Tasks;
using Newtonsoft.Json;

namespace SolidSpellViewer.repositories
{
    public class SpellRepository : ISpellRepository
    {
        private string path = GetExecutingDirectory().ToString();
        public List<Spell> GetSpells() {
            var items = new List<Spell>();
            using (StreamReader r = new StreamReader($"{path}/data/spells.json"))
            {
                string json = r.ReadToEnd();
                var item = JsonConvert.DeserializeObject<List<Spell>>(json);
                if (item == null) {
                    return items;
                }
                return item;
            }
        }
        private static DirectoryInfo GetExecutingDirectory()
        {
                var location = new Uri(Assembly.GetEntryAssembly().GetName().CodeBase);
                return new FileInfo(location.AbsolutePath).Directory.Parent.Parent.Parent;
        }
    }

    public interface ISpellRepository
    {
        List<Spell> GetSpells();
    }

    
}