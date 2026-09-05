---
qid: ing_61d20442f5__eli5__local
question: 'Explain: Database — Design URL Shortener | System Design Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 164
output_tokens: 320
total_tokens: 484
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:11:30-05:00'
sources: []
---

Imagine you’re running a library that turns long, dusty books into tiny bookmarks so people can share them easily. The “database” is the book‑case where every bookmark (short URL) lives, and the “design” decides how to keep it tidy.

**Key parts of the design**

- **Table for URLs** – One row per short link:  
  *id* (the tiny code), *original_url*, *created_at*, *clicks*.  
  Think of each row as a bookmark with a label, the full book title, when it was made, and how often people open it.

- **Primary key** – The *id* is the bookmark’s unique name; just like every book has a distinct shelf number. It lets you fetch or update a link in one step.

- **Indexes on clicks or created_at** – These are extra “signposts” so you can quickly find the most popular or newest bookmarks, just as a librarian would know where to look for best‑sellers.

- **Sharding (splitting) by hash of id** – If the library grows huge, you spread bookmarks across several shelves. Each shelf handles a range of bookmark codes, keeping lookup fast and storage balanced.

The goal is simple: store each short link once, retrieve it instantly when someone clicks, and keep track of its popularity—all while staying organized as the collection expands.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
