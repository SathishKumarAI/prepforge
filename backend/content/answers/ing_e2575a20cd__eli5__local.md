---
qid: ing_e2575a20cd__eli5__local
question: What are the methods of database sharding?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 156
output_tokens: 236
total_tokens: 392
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:34:07-05:00'
sources: []
---

Think of a big library that’s too crowded for one librarian to manage. Sharding is like splitting the books into separate shelves so each librarian handles only their own shelf. In databases, the same idea applies—data is divided into chunks (shards) and stored on different machines.

**Horizontal sharding**: The rows are split by a rule (like “all customers born before 1990 go to Shelf A”). Each machine keeps whole tables but only its slice of rows.  
**Vertical sharding**: Different columns go to different shelves (“personal info goes here, purchase history goes there”). Each shard holds the same set of rows but only part of each row.

Sometimes a **hash** (like a fingerprint) decides which shelf a record belongs to; other times a **range** (age or ID numbers) is used. The goal: keep each librarian’s workload light and speed up look‑ups, just as sharding spreads database traffic across servers.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
