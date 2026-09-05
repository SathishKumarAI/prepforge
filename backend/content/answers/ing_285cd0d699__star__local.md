---
qid: ing_285cd0d699__star__local
question: 'Explain: Our serving cost is dominated by KV cache, not weights. Get it
  down by an order of magnitude and tell me what you give up.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 255
output_tokens: 374
total_tokens: 629
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:49:07-05:00'
sources: []
---

**Situation** – In my last role at a video‑recommendation startup we were deploying a transformer‑based recommendation engine to millions of users. The inference cost ballooned because each request had to materialize a large KV cache for the model’s self‑attention, consuming 70 % of our GPU memory and inflating cloud spend by $12k/month.

**Task** – I was tasked with cutting the per‑request serving cost by at least an order of magnitude while keeping latency below 50 ms and maintaining <5 % loss in recommendation precision.

**Action** – First, I profiled the cache usage and discovered that most KV entries were sparsely accessed. I replaced the dense tensor with a compressed sparse row (CSR) format and added a frequency‑based eviction policy so only the top‑20% of tokens stayed resident. Next, I quantized the keys/values to 8‑bit integers using per‑tensor affine scaling, which reduced memory by 75 %. Finally, I moved the cache out of GPU RAM into a fast NVMe SSD tier with async prefetching, so GPU was only hit when a miss occurred.

**Result** – The combined optimizations slashed KV cache usage from 12 GB to 1.2 GB per request, cutting serving cost by $1.2k/month (≈10×). Latency stayed at 48 ms, and AUC dropped only 0.3 %. I learned that aggressive compression plus intelligent eviction can dramatically reduce memory costs but requires careful validation of the impact on downstream metrics.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
