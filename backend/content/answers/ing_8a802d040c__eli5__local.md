---
qid: ing_8a802d040c__eli5__local
question: 'Explain: Write Globally and Read Locally — Live Comment System Design -
  System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 166
output_tokens: 244
total_tokens: 410
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:15:42-05:00'
sources: []
---

Imagine a big community garden (the “global” space) where every gardener can drop a note on any plant’s status, and a small notebook next to each plant (the “local” reader) that only shows the latest notes for that particular plant.  

**Write Globally** – Anyone can post a comment anywhere; the system stores it in a central log so no one misses it.  
**Read Locally** – When you look at a specific plant, you pull only the newest comments from that plant’s notebook, not the whole garden diary.

The key parts are:  
* **Event stream (global write)** – all new comments go here.  
* **Local cache (per‑item read)** – keeps the most recent few comments for quick display.  
* **Background worker** – copies new events from the stream into each plant’s cache, trimming old ones.

This keeps writes fast and scalable while letting users see fresh replies instantly, just like a garden where everyone can add notes but each plant’s own notebook stays tidy and up‑to‑date.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
