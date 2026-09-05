---
qid: vq_e3640c3101__eli5__local
question: WHAT ARE THE DIFFERENT TYPES OF INDEXES?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 158
output_tokens: 277
total_tokens: 435
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:31:50-05:00'
sources: []
---

Think of a library where books are sorted by author, title, or subject.  
In a database the “books” are rows and the “sorting system” is an index—just a quick lookup table that tells the computer where to find data.

**1. B‑Tree (balanced tree)** – Like a phone book alphabetically arranged; each page points to subpages until you reach the exact entry. It’s great for range queries (“all values between 10 and 20”).

**2. Hash index** – Think of a lockbox keyed by a single number. You can instantly jump straight to an exact value, but you can’t ask for “next few” items.

**3. Bitmap index** – Imagine a row of colored lights (one light per possible value). Turning on the light shows which rows have that value; very fast when there are only a few distinct values.

**4. Full‑text index** – Like a search engine’s index of words in documents, enabling quick “contains this word” queries.

Each type is chosen for how you’ll look up data: exact match, range, or text search. They trade speed against storage and update cost, just as different library systems suit different reading habits.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
