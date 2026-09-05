---
qid: ing_a1e09bc823__eli5__local
question: 'Explain: Full-Text, Spatial, and Inverted Indexes'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 161
output_tokens: 301
total_tokens: 462
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:54:20-05:00'
sources: []
---

Imagine you’re in a giant library where every book is a piece of data.

**Full‑text index**  
Think of it as a super‑fast “search your notes” button. It scans the whole page, finding any word you type, even if it’s buried inside a paragraph. Like flipping through every page to find the word *“quantum.”* It lets you ask, “Show me everything that mentions *quantum*, no matter where it is.”

**Spatial index**  
Now picture a map of the library with each book’s location plotted as a dot. A spatial index quickly tells you which books are near a certain spot—say, all books in the “Physics” aisle within 10 meters of the entrance. It’s like asking, “Give me everything close to this point on the floor.”

**Inverted index**  
Finally, imagine a master list that says, “Word *quantum* appears in book 12, book 57, and book 88.” Instead of scanning every page, you look up the word and instantly get all books containing it. It’s the library’s “word‑to‑books” map.

So: full‑text scans everything for any word; spatial zooms to a region; inverted flips the direction—go from word to its locations directly. All three make searching fast but serve different needs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
