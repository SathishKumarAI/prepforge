---
qid: ing_07177dcdd1__eli5__local
question: 'Explain: Creating a Hybrid Retrieval Pipeline — Tutorials | Haystack'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 160
output_tokens: 241
total_tokens: 401
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:46:58-05:00'
sources: []
---

Imagine you’re looking for a specific recipe in a huge cookbook that’s split into two parts: one part lists recipes by title (like a quick‑look index), and the other part contains the full text of every recipe (the detailed instructions). A **hybrid retrieval pipeline** works just like that.

In Haystack, the *retrieval* step first uses a fast “vector search” to grab recipes whose titles are close to what you typed. That’s the quick‑look index. Then it runs a second check against the full recipe text to make sure the chosen ones really match your request—this is the detailed search.

**Key terms:**
- **Vector search:** A method that turns words into math vectors so we can find similar items quickly.
- **Hybrid retrieval:** Combining the quick vector lookup with an exact, text‑based check for higher accuracy.

So you get the speed of a title index and the precision of reading every word—just like flipping from the back cover to the inside pages of your cookbook.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
