---
qid: ing_398cf1e82b__eli5__local
question: 'Explain: Consistent Hashing — Top 4 Data Sharding Algorithms Explained'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 162
output_tokens: 286
total_tokens: 448
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:07:35-05:00'
sources: []
---

**Consistent hashing** is like a round‑table restaurant where every table (a “data shard”) has a unique number from 0 to 9999.  
When you want to store or look up a piece of data, you first give it a simple recipe name—say, “spaghetti.” You run that name through a cheap kitchen‑scale (“hash function”) and get a number (e.g., 3425). The dish is served at table 3425.  

If a new waiter joins the restaurant, they take over only a handful of tables near their spot on the circle; all other tables stay with their original waiters. Likewise, when a server leaves, only its adjacent tables are reassigned. This keeps most dishes still served by the same waiter (or server) even as people come and go, so the system remains stable without moving everything around.

**Key terms**  
*Hash function*: A quick recipe that turns any name into a number.  
*Shard*: A server or storage unit that holds a slice of the data.  
*Data sharding*: Dividing a big database into smaller, independent pieces.  

Consistent hashing is one of four main strategies for splitting data across servers so the system stays balanced and resilient as it grows or shrinks.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
