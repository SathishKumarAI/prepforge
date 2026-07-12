# Better, Programmatic Note-Taking in Obsidian — A Research Digest

*Compiled 2026-07-11 from web + YouTube research. Audience: students and PhD/researchers who want notes that pay off at revision time and compound over years.*

The core shift is from **notes-as-storage** to **notes-as-a-thinking-graph**. A pile of highlights rots; a network of small, self-contained ideas you link deliberately keeps growing in value. Below is a practical map: the methods worth adopting, how to automate them with Obsidian plugins, how to wire notes into spaced-repetition revision, the academic (Zotero) pipeline, and the creators actually worth watching. It closes with concrete features to steal for **PrepForge**.

---

## 1. Core methods (the mindset)

- **Zettelkasten / atomic notes.** One idea per note, written *in your own words*, with a unique ID or stable title. Four note tiers: **fleeting** (quick capture), **literature** (source summaries), **permanent/evergreen** (standalone ideas), and **structure/index** notes. Value comes from *deliberate links with a reason*, not from folders or tags alone.
- **Evergreen / permanent notes.** Written to be re-read and reused for years; concept-oriented, not source-oriented. A daily habit — refactor 1-2 fleeting notes into permanent ones — is what makes the system grow bottom-up.
- **PARA** (Tiago Forte): top-level buckets **Projects, Areas, Resources, Archives** — an *actionability*-based organization that complements Zettelkasten's idea layer. Good for the "where does this live" problem.
- **Maps of Content (MOCs).** Hand-curated hub notes that gather links around a topic — your table of contents into the graph. Start one whenever ~5+ notes cluster.
- **Progressive summarization** (Forte): layered distillation — bold the essential sentences, then highlight the key words inside those, then write a one-line executive summary at the top. Makes any note skimmable at revision time without re-reading everything.
- **Notes-as-a-graph mindset.** Links *are* the knowledge. Prefer many small linked notes over few long ones; let structure emerge.

## 2. Programmatic Obsidian (automate the busywork)

- **Dataview** — query your vault like a database. Read fields from YAML frontmatter or inline `key:: value` fields, then render live `LIST` / `TABLE` / `TASK` views that auto-update. This is how MOCs and review dashboards stay current with zero manual editing.
- **Templater** — dynamic templates with JS: auto-insert titles, timestamps/Zettel IDs, prompts, and even a Dataview backlink block so every new note ships with its own index.
- **QuickAdd** — one hotkey to capture/create. Four primitives: *template, capture, macro, multi*. Classic combo: hotkey → create note from template → auto-append a link to the relevant MOC.
- **Tasks** — global task queries with due dates, recurrence, and filters across the whole vault (great for a study plan / spaced-review checklist).
- **Canvas** — infinite spatial board for mapping arguments, exam topics, or a thesis outline visually; embed live notes as cards.
- **Auto-generated MOCs/indexes.** Combine Templater + Dataview: a MOC ends with a query listing every note tagged/linked to the topic, so new notes appear automatically. Dynamic MOCs beat hand-maintained ones once a topic gets large.

## 3. Spaced repetition — connect notes to revision

- **Spaced Repetition plugin** (`st3v3nmw/obsidian-spaced-repetition`): review **inline flashcards** *and* **whole notes** inside Obsidian using **FSRS or SM-2**. Scheduling data is stored in plaintext, so your vault stays portable. Write `Question::Answer` inline, or `?`-separated multiline cards, right in the note you're learning from — revision lives next to the idea.
- **Obsidian_to_Anki** (`Pukzo/Obsidian_to_Anki`): turn markdown into Anki cards with per-folder deck names and tags; powerful regex/notetype support (feature-complete, lightly maintained).
- **Yanki / Obsidian Anki Sync**: sync Markdown flashcards from chosen folders to Anki with cleaner or more powerful syntax.
- **Principle:** make cards *from your own permanent notes*, not from the source — you review the distilled idea, closing the loop between note-taking and active recall.

## 4. Academic / PhD workflow

- **Reference manager:** Zotero is the hub. Bridge into Obsidian with **Zotero Integration** (a.k.a. Zotero Desktop Connector) or **ZotLit** to pull citations, bibliographies, and PDF annotations, and to spawn **literature notes** from templates. **Citations plugin** reads BibTeX/BibLaTeX/CSL-JSON directly.
- **Reading → permanent-note pipeline:** annotate the PDF in Zotero → import annotations as a literature note → as you *understand* it, write atomic permanent notes in your own words that link back to specific annotations → cluster into a MOC → draft prose straight from the linked notes. Writing becomes "assemble what you already wrote," not "start from a blank page."
- **Writing from notes:** because each claim is an atomic, cited note, a lit-review section is a walk through a MOC with citations attached — dramatically faster drafting.

## 5. Curated YouTube list

| Creator | What it teaches | URL |
|---|---|---|
| Bryan Jenks | Deep, comprehensive Obsidian Zettelkasten + evergreen-notes workflow (theory + plugins) | https://www.youtube.com/watch?v=wB89lJs5A3s |
| Bryan Jenks (channel) | Ongoing PKM / Zettelkasten / Obsidian tutorials | https://www.youtube.com/c/BryanJenksTech |
| Nicole van der Hoeven | Real Zettelkasten workflows in Obsidian (w/ Bob Doto & Tris Oaten); great Dataview notes site | https://nicolevanderhoeven.com/blog/20250625-a-real-zettelkasten-workflow-in-obsidian/ |
| Danny Hatcher | Research + writing in Obsidian, Zotero, academic note-taking | https://www.youtube.com/watch?v=zEYp0BJL7MU |
| Danny Hatcher (channel) | Academic/PhD Obsidian workflows | https://www.youtube.com/channel/UCKuK7cMQFx9qu9xXStG3uWw |
| Curtis McHale | Book-notes tour & researcher workflows | https://www.youtube.com/watch?v=1IBUQ8DYTuE |
| Santi Younger | Obsidian power-user tips, custom tools/plugins, dashboards | https://www.youtube.com/c/SantiYounger/videos |
| Prakash Joshi Pax | PKM, note-taking, Dataview snippets, productivity in Obsidian | https://www.youtube.com/@beingpax |

## 6. Dataview snippets (copy-paste, then adapt)

```dataview
LIST
FROM [[<% tp.file.title %>]]
```
*Drop this in a Templater note template so every new note auto-lists everything that links to it — an instant backlink MOC.*

```dataview
LIST WHERE file.mtime >= date(today) - dur(1 week)
```
*"What did I touch this week" — a lightweight review queue.*

```dataview
TABLE file.ctime AS "Created", file.tags AS "Tags"
FROM #permanent
WHERE file.ctime >= date(today) - dur(1 week)
SORT file.ctime DESC
```
*New permanent notes this week — checks the atomic-note habit.*

```dataview
TABLE dateformat(updated, "yyyy-MM-dd") AS "Last touched"
FROM ""
WHERE updated AND updated <= date(today) - dur(6 months)
SORT updated ASC
LIMIT 25
```
*Surfaces notes gone stale for 6+ months — spaced resurfacing of old ideas.*

```dataview
TASK
FROM #study
WHERE !completed AND due <= date(today) + dur(3 days)
SORT due ASC
```
*Upcoming study/revision tasks due in the next 3 days, pulled from anywhere in the vault.*

## 7. Ideas to steal for PrepForge

1. **Atomic-note enforcement + backlinks-as-first-class.** Nudge one-concept notes and auto-surface "notes that link here" on every note — the graph *is* the product.
2. **Auto-generated MOC / topic dashboards.** A Dataview-style query engine so a topic page (e.g. "System Design") self-populates with every linked note, no manual upkeep.
3. **Permanent-note → flashcard pipeline.** Let users mark `Q::A` inline (or highlight a claim) to spawn a spaced-repetition card *from their own note* — tie revision to the idea, not the source.
4. **FSRS-based whole-note review**, not just cards: resurface stale-but-important notes on a schedule (like the "6-months-untouched" query above).
5. **Progressive-summarization UI:** layered bold → highlight → one-line summary, with a "skim mode" that shows only the top layer for fast pre-interview revision.
6. **Templated capture with one hotkey** (QuickAdd-style): quick-capture a fleeting note, then a "refactor into permanent" review flow — the daily habit that grows a Zettelkasten.
7. **Reference/source import for the research track:** import a JD, article, or paper as a "literature note," then spin atomic prep-notes off it that link back to the annotation.
8. **Inline query fields** (`difficulty:: hard`, `topic:: graphs`, `confidence:: 2`) so users build custom review dashboards and weak-spot filters over their own notes.

---

## Sources

- Getting Started with Zettelkasten in Obsidian — https://obsidian.rocks/getting-started-with-zettelkasten-in-obsidian/
- Zettelkasten / connected second brain (Obsibrain) — https://www.obsibrain.com/blog/zettelkasten-how-to-build-a-connected-second-brain-that-actually-grows-with-you
- Evergreen vs Permanent notes (Obsidian Forum) — https://forum.obsidian.md/t/evergreen-notes-vs-permanent-notes/19915
- Automated MOCs with Templater + Dataview — https://readwithai.substack.com/p/automated-maps-of-content-in-obsidian
- How I use Obsidian Dataview (Cassidy Williams) — https://cassidoo.co/post/obsidian-dataview/
- Creating a MOC using Dataview — https://myhub.ai/items/how-to-create-a-map-of-content-moc-using-dataview-in-obsidian
- QuickAdd plugin — https://github.com/chhoumann/quickadd
- Dataview beginner's guide — https://obsidian.rocks/dataview-in-obsidian-a-beginners-guide/
- Dataview query structure (docs) — https://blacksmithgu.github.io/obsidian-dataview/queries/structure/
- Finding old notes with Dataview — https://obsidian.rocks/finding-old-notes-in-obsidian-with-dataview/
- 11 useful Dataview snippets (Prakash Joshi Pax) — https://beingpax.medium.com/11-useful-dataview-snippets-i-use-in-my-obsidian-vault-e7c0b8e62075
- obsidian-spaced-repetition (st3v3nmw) — https://github.com/st3v3nmw/obsidian-spaced-repetition
- Spaced Repetition Plugins (Obsidian Hub) — https://publish.obsidian.md/hub/02+-+Community+Expansions/02.01+Plugins+by+Category/Spaced+Repetition+Plugins
- Best spaced-repetition plugins (ObsidianStats) — https://www.obsidianstats.com/posts/2025-05-01-spaced-repetition-plugins
- Zotero + Obsidian academic workflow (Alexandra Phelan) — https://medium.com/@alexandraphelan/an-updated-academic-workflow-zotero-obsidian-cffef080addd
- Connect Zotero & Obsidian for PhD — https://girlinbluemusic.com/how-to-connect-zotero-and-obsidian-for-the-ultimate-phd-workflow/
- ZotLit plugin + templates — https://effortlessacademic.com/connecting-zotero-and-obsidian-with-the-zotlit-plugin-templates/
- Progressive Summarization (Forte Labs) — https://fortelabs.com/blog/progressive-summarization-a-practical-technique-for-designing-discoverable-notes/
- Nicole van der Hoeven — Dataview examples — https://notes.nicolevanderhoeven.com/obsidian-playbook/Obsidian+Plugins/Community+Plugins/dataview/Dataview+Examples
