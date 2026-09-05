---
qid: ing_8c3a2cce92__star__local
question: 'Q: When would you use a Disk-based index (like DiskANN) over a RAM-based
  index (HNSW)?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 250
output_tokens: 301
total_tokens: 551
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:13:10-05:00'
sources: []
---

**Situation:**  
During a product launch for our recommendation engine, we had to serve embeddings for 12 million users. The query latency target was 50 ms, but our RAM‑only HNSW index required ~80 GB of memory—more than the 64 GB available on our inference nodes.

**Task:**  
I needed a nearest‑neighbor solution that fit within the memory budget while still keeping sub‑10 ms response times for real‑time personalization.

**Action:**  
I evaluated DiskANN, which builds an ANN graph on disk and streams only the necessary edges into RAM. I re‑encoded our 384‑dimensional vectors to float16, reduced the search depth (efSearch) from 256 to 128, and added a small in‑memory cache for hot queries. We also tuned the `num_threads` parameter to match our CPU cores, ensuring parallel disk reads didn’t become a bottleneck.

**Result:**  
The DiskANN index used only ~18 GB of RAM, freeing resources for other services. Query latency dropped to 32 ms on average, with a 99th‑percentile under 45 ms—well below the target. We also cut memory costs by 70%. I learned that disk‑based ANN can be a pragmatic trade‑off when dataset size outpaces RAM, provided you carefully tune precision and caching.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
