---
qid: ing_140c689af1__eli5__local
question: 'Explain: An enterprise wants semantic search over ~100M documents but is
  balking at vector-index infrastructure cost. Walk me through embedding compression
  options and the math.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 179
output_tokens: 347
total_tokens: 526
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:06:59-05:00'
sources: []
---

Imagine each document is a *fingerprint* made of many tiny dots (the vector dimensions). A big fingerprint library is expensive to keep because every dot takes space. To shrink it, we can **compress** the dots while keeping their overall shape.

1. **Quantization** – Think of turning a smooth color gradient into a limited palette. Each dot’s value is rounded to one of a few colors (e.g., 256 levels). If you have 300 dimensions and use 8‑bit levels, each document needs only \(300 \times 8 = 2{,}400\) bits instead of floating‑point 32‑bit numbers (\(300 \times 32 = 9{,}600\) bits).  
2. **Product Quantization** – Split the fingerprint into groups (say 10 groups of 30 dots), compress each group separately with a small codebook (e.g., 256 codes). The whole vector is now stored as 10 byte indices: \(10 \times 8 = 80\) bytes per document—much smaller.  
3. **Hashing / Bloom‑filter style** – Keep only the most important bits of each dot, turning the fingerprint into a short hash that still lets you compare similarity roughly.

Each method trades a little accuracy for huge savings: from millions of bits to just a few dozen per document, letting 100 million documents fit comfortably in memory while still supporting semantic search.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
