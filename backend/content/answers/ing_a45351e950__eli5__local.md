---
qid: ing_a45351e950__eli5__local
question: 'Explain: Request a Unique ID — Design URL Shortener | System Design Interview
  | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 167
output_tokens: 272
total_tokens: 439
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:58:47-05:00'
sources: []
---

Think of a URL shortener like a tiny post‑office that turns long, hard‑to‑remember letters into short nicknames.  
When someone asks the office to create a nickname (“request a unique ID”), the office must pick a code that no one else has used—otherwise two different letters would point to the same address and people would get lost.

**How it works in plain steps**

1. **Generate a candidate code** – The office picks a random string of, say, 6 characters (letters or numbers).  
2. **Check for uniqueness** – It looks up that string in its “database” of already‑used nicknames.  
3. **If it’s free**, the office records the pair (nickname → original address) and gives the nickname back to the user.  
4. **If it’s taken**, the office tries another random string until it finds a free one.

The database is simply a table that maps each short code to its long URL, like a phone book that lists every nickname with its real name.  

So the “unique ID” request is just a safe‑pick‑and‑store routine: generate, verify uniqueness, store, and return.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
