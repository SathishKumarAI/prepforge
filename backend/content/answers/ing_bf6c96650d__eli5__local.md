---
qid: ing_bf6c96650d__eli5__local
question: 'Explain: Estimate the KV-cache memory for serving Mistral 7B, and design
  the rolling-buffer cache that sliding-window attention enables.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 175
output_tokens: 254
total_tokens: 429
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:40:17-05:00'
sources: []
---

Imagine you’re hosting a big movie‑night party (the **Mistral 7B** model) and each guest (a token of text) needs a small snack tray to keep their favorite snacks handy while the movie plays. That snack tray is the **KV‑cache memory**: it stores two pieces of information for every past token – its “key” (what the token looks like) and its “value” (the useful data that helps predict the next token).  

For a 7‑billion‑parameter model, each token’s key/value pair can take about **1.5 KB**. If you want to keep the last **10 000 tokens** in mind (a typical sliding window), you need roughly **15 MB** of RAM just for this cache.

A **rolling‑buffer cache** works like a moving shelf that slides along with the movie. As new tokens arrive, they’re added to the front of the buffer and the oldest ones slide off the back, always keeping only the most recent window in memory. This lets the model focus on what’s happening now without wasting resources on very old information.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
