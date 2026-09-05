---
qid: ing_43ab4c65aa__eli5__local
question: 'Explain: Consistency patterns — GitHub - donnemartin/system-design-primer:
  Learn how to design large-scale systems. Prep for the system design interview.  Includes
  Anki flashcards. \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 195
output_tokens: 353
total_tokens: 548
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:23:58-05:00'
sources: []
---

Imagine a giant library that many people use at once. **Consistency patterns** are the rules that decide how the library keeps its books in order when everyone can check out or return them at the same time.

1. **Strong Consistency (Single‑Source Rule)** – Think of a librarian who checks every book before anyone else gets it. If you ask for “Moby Dick,” you’ll always see the exact copy that’s currently on the shelf, even if someone just returned it moments ago. This guarantees *you never read an old version*, but it can slow things down because the librarian must pause everyone while they verify.

2. **Eventual Consistency (Lazy Updates)** – Here the library lets people borrow books freely and updates the catalog later. If you ask for “Moby Dick,” you might see a slightly older copy at first, but soon enough the catalog will reflect the newest edition. This speeds up access but means *you may read an outdated version* until the update catches up.

3. **Causal Consistency (Storyline Order)** – Picture a series of books that must be read in order: “Book 1” → “Book 2.” The library ensures that if you finish Book 1, everyone who reads Book 2 next will see it as written after Book 1, even though other unrelated books can be updated at any time. It preserves the *storyline* while allowing parallel updates elsewhere.

These patterns trade off speed against how fresh and correct the data is—just like choosing between a careful librarian and a quick checkout system in our library analogy.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
