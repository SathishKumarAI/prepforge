---
qid: ing_18e0be20db__eli5__local
question: 'Explain: DB auto-increment — Explaining 5 Unique ID Generators'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 162
output_tokens: 267
total_tokens: 429
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:15:24-05:00'
sources: []
---

Imagine a library where every new book must get a unique library card number so librarians can find it instantly. In databases, we use **ID generators** to give each record its own “library card.”  
1. **Auto‑Increment (Identity)** – like handing out the next sequential number on the shelf: 1, 2, 3… Simple and fast.  
2. **Sequence** – a reusable counter that can be shared by many tables; think of it as a master clock that all books tap into for their numbers.  
3. **GUID/UUID** – a globally unique random string (like a passport number); great when you need uniqueness across different servers or systems.  
4. **Snowflake ID** – combines timestamp, machine id, and counter into one 64‑bit number; like a time‑stamped ticket that still guarantees order.  
5. **Custom Generator** – your own rule (e.g., “YYYYMMDD‑NNN”) coded in the database; useful when business needs a specific format.  

Each method balances speed, uniqueness, and format, just as different card‑giving systems suit different libraries.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
