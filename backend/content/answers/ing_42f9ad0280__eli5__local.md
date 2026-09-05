---
qid: ing_42f9ad0280__eli5__local
question: 'Explain: Cons — Design URL Shortener | System Design Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 164
output_tokens: 271
total_tokens: 435
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:22:34-05:00'
sources: []
---

**Think of a URL shortener like a library that only keeps the book’s *call number* and forgets the title.**  
When you design it for an interview, you’ll run into a few “cons” – things that make the job trickier than it looks.

1. **Data scale** – Millions of URLs mean your database must handle billions of rows. If you use a simple table, reads can get slow and costs rise.  
2. **Uniqueness & collisions** – Generating a short code that never repeats is like assigning unique locker numbers; a bad algorithm will cause two books to share the same spot.  
3. **Availability vs consistency** – You want the link to work *every time* (high availability), but if many servers write at once, keeping them all in sync (strong consistency) can hurt speed.  
4. **Security & abuse** – Short URLs hide the destination; attackers can use them for phishing or malware. Adding checks and rate‑limits is like having a librarian verify every request.  

So while the idea seems simple, scaling, uniqueness, data consistency, and safety make it a real design challenge.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
