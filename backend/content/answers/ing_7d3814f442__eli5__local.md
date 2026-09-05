---
qid: ing_7d3814f442__eli5__local
question: 'Explain: Users Table (Optional) — Design URL Shortener | System Design
  Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 168
output_tokens: 258
total_tokens: 426
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:55:18-05:00'
sources: []
---

Think of a URL shortener like a **post office that gives every letter a tiny, easy‑to‑remember stamp**.  
The *Users Table* is an optional “address book” for people who want to keep track of their own letters.

- **User ID** – a unique name (like a passport number) that identifies you.
- **Email / Username** – the contact details so the system can tell you who owns what.
- **Created URLs** – a list of the tiny stamps you’ve made, plus when you added them and how many times they’re used.

If someone just wants a quick “short link” for a friend’s website, they can skip the address book—just send the long URL, get a short one back.  
But if you want to see all your links in one place, set up an account; the system stores the mapping between your User ID and each short URL so you can edit or delete them later.  

So the Users Table is simply an optional personal folder that lets you manage many stamps at once, just like a post office keeps track of who owns which letters.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
