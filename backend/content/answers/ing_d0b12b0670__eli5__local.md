---
qid: ing_d0b12b0670__eli5__local
question: 'Explain: Caching Anti-Patterns — What is Caching? | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 164
output_tokens: 275
total_tokens: 439
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:05:58-05:00'
sources: []
---

**What is caching?**  
Imagine you’re at a busy library and every time someone asks for a book, the librarian has to go all the way to the back shelf, pull it out, and bring it back. If many people keep asking for the same popular book, the whole library slows down. A *cache* is like a small, well‑organized desk right next to the front desk that holds copies of those frequently requested books. When someone asks again, the librarian can hand them the copy instantly, saving time and reducing strain on the shelves.

**Caching anti‑patterns** are ways you might set up that desk that actually make things worse—like putting every book in a single pile (no sorting), or never cleaning out old copies so the desk gets cluttered. In system design, bad caching habits include:  
- **Storing everything:** filling the cache with rarely used data, wasting space.  
- **Never expiring items:** keeping outdated information that misleads users.  
- **Using too small a size:** causing frequent evictions and extra database hits.  

Good caching is like a tidy, purpose‑built desk: it holds just the right books, refreshes them on time, and keeps the library running smoothly.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
