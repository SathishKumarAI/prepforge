---
qid: vq_94b680a1e8__eli5__local
question: How can I generate primary key values for my table?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 159
output_tokens: 226
total_tokens: 385
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:20:43-05:00'
sources: []
---

Think of your database table like a library shelf where every book must have a unique barcode so the librarian can find it instantly.  
In a computer table we call that barcode a **primary key**. The database can give each new row its own number automatically, just as the library prints a fresh code for every book you add.

- **Auto‑increment column**: Like a counter that keeps going up (1, 2, 3 …). When you insert a row, the system writes the next number and you don’t have to supply it.  
- **Sequence**: A separate “number bank” that hands out values on demand. You ask for one, get the next unused number, and use it as the primary key.

Both ways keep every key unique, so each record can be found or referenced without confusion—just like a library’s barcode system keeps every book in its exact spot.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
