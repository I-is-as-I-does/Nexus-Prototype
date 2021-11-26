# Nexus

Is it a web ring 3.0? a Json feed? or a [twtxt](https://github.com/buckket/twtxt) fork?  
No! It's NEXUS! A minimal peer-to-peer quality content sharing app and protocol!  
(and its name might change)

## Status

Stamper / Viewer / Editor prototype 0.3.0  
all 46.0ko dist.
viewer only 33.4ko dist. 
+ 9.5ko css
No dep. at all.

[Demo Site](https://i-is-as-i-does.github.io/Nexus-Prototype/)

- [x] Project blueprints and first prototypes (too many)
- [x] Final cut on data structure (ONE json file, ONE record per thread, no mess, no information overload, incite quality content and promote links to distant nexuses),
- [x] Json Schema (ok, that was easy)
- [x] **Stamper** (because big json validator lib too heavy)
- [x] **Viewer** first draft (user interface is a nightmare) (thought about using Vue, but... meh)
- [x] Local and session storage basic support (mini notification system!)
- [x] Mini utilies library: [Jack-Js](https://github.com/I-is-as-I-does/Jack-Js) (prob just a start)
- [x] Mini transitions library: [Vâlvă](https://github.com/I-is-as-I-does/Valva) (because big anim lib too heavy) (Vâlvă's effects so great, I'm proud)
- [x] Base theme (hate css trials/errors endless process)
- [x] **Viewer** refactoring / optimizing (that was... painful and probably not that useful) (aaand done it again)
- [x] Base translations : En/Fr
- [x] **Editor** (webpack output strategy headache)
- [x] Viewer distant records slider
 
To do:

- [ ] Check for unused CSS
- [ ] Check for unused translations
- [ ] Regenerate css templates for other themes
- [ ] Files reorg (lost some pre-Editor code somewhere...)
- [ ] More translations (Es, It, De)
- [ ] **Docs** for 1/ everyone 2/ dev
- [ ] **Php app** for easy admin (WIP)
- [ ] **Web workers** for some minimal offine support

*Maybe*
- [ ] Broke main editor source file into smaller chunks for maintenance & readability
