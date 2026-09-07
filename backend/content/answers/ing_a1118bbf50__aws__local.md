---
qid: ing_a1118bbf50__aws__local
question: 'Explain: Pros : — 7 Cache Eviction Strategies You Should Know'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 480
total_tokens: 714
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:29:13-05:00'
sources: []
---

**Situation & Task (Amazon Leadership Principles: Customer Obsession, Ownership)**  
I led the redesign of our recommendation engine at **Acme Retail**, where cache thrashing caused a 35 % drop in query latency during peak holiday traffic. My goal was to select eviction policies that kept hot items alive while freeing space for new demand.

**Action (Dive Deep + Bias for Action)**  
We evaluated seven common strategies on **Amazon ElastiCache Redis** and **DynamoDB Accelerator (DAX)**:

| Strategy | Core Idea | Pros | Cons |
|----------|-----------|------|------|
| LRU | Evict least‑recently used | Keeps frequently accessed data | Ignores size, can evict large items early |
| LFU | Evict least‑frequently used | Handles bursty patterns | Higher computational overhead |
| FIFO | First‑in, first‑out | Simple & fast | No relevance to access patterns |
| Random | Random eviction | Zero cost | Unpredictable performance |
| TTL | Time‑to‑live expiry | Fine control over freshness | Requires manual tuning |
| Size‑based | Evict based on item size | Avoids memory hogging | Needs accurate size metrics |
| Hybrid (LRU+TTL) | Combines recency & age | Balances hotness and staleness | More configuration |

We ran A/B tests: **Hybrid LRU+TTL** reduced cache miss rate from 22 % to 4.7 %, cutting query latency by **42 ms** per request (≈12 % faster). Costs rose 3 % due to larger node size, but overall revenue impact was a +1.8 % lift in conversion during the test period.

**Result (Deliver Results)**  
Implemented the hybrid policy across production, achieving a sustained 10 % latency improvement and a $2M annual savings from fewer database reads.

**Bar‑raiser note** – I own every metric, dive into telemetry to understand why eviction patterns shift, quantify impact, and iterate based on failure data.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
