---
qid: ing_680a51a276__eli5__local
question: 'Explain: Indexes — Design URL Shortener | System Design Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 165
output_tokens: 220
total_tokens: 385
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:20:52-05:00'
sources: []
---

Imagine a library where every book has a unique ISBN, but readers want to find a book by its title quickly. The librarian creates an **index**—a separate list that says “title → location.” When someone asks for *The Great Gatsby*, the librarian looks up the title in the index and instantly knows exactly which shelf holds it.

In a URL shortener, the long web address (the “book”) is stored in a table, while a separate **index** maps the tiny code (e.g., “abc123”) to that long address. When a user clicks the short link, the system first checks this index; because it’s organized for fast look‑ups, it can retrieve the full URL almost instantly without scanning every record.

So an index is just a pre‑sorted reference table that points from a key (the short code) to its data (the long URL), dramatically speeding up searches.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
