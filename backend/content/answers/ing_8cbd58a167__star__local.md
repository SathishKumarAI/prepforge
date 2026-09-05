---
qid: ing_8cbd58a167__star__local
question: 'Explain: Throttling type and algorithms — System Design Interview Cheat
  Sheet - System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 300
total_tokens: 543
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:14:22-05:00'
sources: []
---

**Situation** – In my last role I was building a recommendation engine that served millions of requests per second from our mobile app. Our traffic spikes during promotions, causing latency to climb past the SLA of 200 ms.

**Task** – I needed to design a throttling layer that kept response times within SLA while still delivering fresh recommendations and not rejecting legitimate users.

**Action** – I implemented a two‑tier approach: first a *token bucket* algorithm per user for short‑term burst control, then a global *leaky bucket* with a sliding window to smooth overall traffic. Tokens were replenished at 10 tokens/second with a maximum of 20 tokens, preventing sudden surges. For the leaky bucket I used Redis streams and Lua scripts to atomically decrement counters, ensuring consistency under high concurrency. I also added dynamic scaling: when average latency exceeded 150 ms, the system automatically lowered token rates by 20% until stability returned.

**Result** – After deployment we saw a 35 % reduction in request rejections, maintained SLA compliance during peak events, and cut infrastructure costs by 12 % through better resource utilization. I learned that combining per‑user and global throttling with real‑time metrics is key to balancing performance and fairness in large‑scale ML services.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
