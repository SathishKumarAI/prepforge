---
qid: ing_acf1c5e4a2__eli5__local
question: 'Explain: Estimate the KV-cache memory for a 3B on-device model at 4k context,
  and name the levers that shrink it.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 177
output_tokens: 252
total_tokens: 429
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:11:33-05:00'
sources: []
---

Think of the KV‑cache as a temporary “parking lot” for every word you feed into the model while it’s still thinking about that sentence. For a 3 billion‑parameter transformer running with a 4,000‑token window, each token needs two tensors (key and value) that are roughly the same size as a hidden layer: about **1 GB per 1,000 tokens**.  
So for 4,000 tokens you’d need **≈4 GB of RAM** just to hold the cache while the model runs.  

You can shrink this parking lot in three ways:

1. **Reduce token count** – use a shorter context or truncate history.  
2. **Compress each entry** – store keys/values in lower‑precision (e.g., 8‑bit instead of 16‑bit).  
3. **Prune the cache** – discard rarely‑used keys/values or reuse them across similar queries.

Each lever trades a little speed or accuracy for less memory, letting a 3B model fit on modest devices.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
