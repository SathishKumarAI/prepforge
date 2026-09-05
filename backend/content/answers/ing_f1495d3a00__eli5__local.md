---
qid: ing_f1495d3a00__eli5__local
question: 'Explain: Database Design Tips | Choosing the Best Database in a System
  Design Interview'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 163
output_tokens: 358
total_tokens: 521
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:56:45-05:00'
sources: []
---

Think of your database like a library that’s always open.  
When you’re asked to choose a “best” one in an interview, the interviewer wants to know how you pick the right shelves for the books you’ll keep.

**1. Know the book types (data).**  
If most reads are simple look‑ups, a *key‑value* store is like a quick reference shelf—fast and lightweight. If you need complex relationships (e.g., author → books), a *relational* or *graph* database is better.

**2. Size matters.**  
A tiny collection fits on one shelf; millions of rows need multiple shelves, so think about sharding (splitting across servers) and indexing (fast finders).

**3. Workload shape.**  
Read‑heavy traffic needs replicas (extra copies for speed), write‑heavy work may use a log‑structured store that writes sequentially.

**4. Consistency vs. speed.**  
If your “library” can tolerate a momentary mismatch (like a book slightly out of place), you might choose eventual consistency (NoSQL). If every patron must see the exact same version, go for strong consistency (SQL).

**5. Future proofing.**  
Pick a system that lets you add new shelves (scaling) without tearing down the whole library.

In short: match data shape and traffic pattern to the right “shelf type,” plan for growth with sharding/replicas, and decide how strict you need consistency to be. This shows you can design a library that stays organized no matter how many visitors come.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
