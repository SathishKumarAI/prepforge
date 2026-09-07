---
qid: ing_51d9a62b16__aws__local
question: 'Q: What is the "Asymmetric Retrieval" problem?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 423
total_tokens: 654
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:30:04-05:00'
sources: []
---

**Answer (Amazon style)**  

*Leadership Principles:* **Customer Obsession** – we want a search that feels instant to users; **Dive Deep** – understand why latency spikes happen.

**Situation & Task**  
In 2023 I led the redesign of our recommendation engine for the global e‑commerce platform. Users reported a 4 % drop in conversion after a sudden 200 ms increase in query time during holiday traffic peaks. My task was to eliminate that latency without compromising relevance.

**Action**  
I identified the **Asymmetric Retrieval problem**: the system performed a heavy “cold” retrieval (full‑text index scan) for each request, while the “warm” cache hit path was highly optimized. The asymmetry caused uneven response times and resource contention.  

*Technical solution:*  
1. **Dual‑layer indexing** – use Amazon OpenSearch for full scans and Amazon DynamoDB Streams to keep a *pre‑computed* cache of popular queries.  
2. **Cache‑first policy with fallback** – route 90 % of traffic to the DynamoDB cache; only hit OpenSearch when a miss occurs.  
3. **Auto‑scaling and spot instances** for OpenSearch clusters during predicted peak windows, triggered by CloudWatch alarms on query latency.  

*Trade‑offs:* higher storage cost (~15 %) vs 80 % reduction in average latency (from 200 ms to 40 ms) and a 12 % lift in conversion.

**Result**  
Post‑deployment, we achieved **≤45 ms median latency** under 10 k QPS, cut the cache miss rate from 30 % to <5 %, and saw a **12 % uplift in revenue** during the holiday season.  

*Bar‑raiser notes:* I showed ownership by leading cross‑functional teams, dove deep into performance counters, quantified impact with real metrics, and learned that caching hot paths first is often cheaper than scaling cold paths.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
