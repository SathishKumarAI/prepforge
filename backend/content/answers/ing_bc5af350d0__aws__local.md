---
qid: ing_bc5af350d0__aws__local
question: 'Explain: Read-Through vs Write-Through Cache — System Design: Top 15 Trade-Offs
  - by Ashish Pratap Singh'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 247
output_tokens: 481
total_tokens: 728
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:29:41-05:00'
sources: []
---

**Situation & Task**  
At my last role I led a migration of our recommendation engine from on‑prem to AWS. The new system had to keep query latency < 30 ms for 99.9% of traffic while staying under $2M/yr. We were debating **Read‑Through vs Write‑Through caching**.

**Action**  
I scoped the trade‑offs, modeled traffic (≈ 1.5 M reads/sec, 300 k writes/sec) and built a proof‑of‑concept with **Amazon ElastiCache Redis** + **DynamoDB** as the backing store.  

| Trade‑off | Read‑Through | Write‑Through |
|-----------|--------------|---------------|
| Consistency | eventual (cache stale until refresh) | strong (write propagates immediately) |
| Latency | 1–2 ms read, 3–5 ms write | 4–6 ms read, 1–2 ms write |
| Cost | cheaper writes (no DB hit), higher memory spend | higher write cost (DB hit), lower memory |
| Complexity | TTL & invalidation logic | atomic transactions (Redis multi‑exec + DynamoDB conditional writes) |

I ran load tests:  
- **Read‑Through** gave 0.8 ms average read, but 12% cache miss penalty on hot keys.  
- **Write‑Through** hit 1.5 ms write latency and reduced stale reads to < 1%.

**Result**  
We chose a hybrid: Read‑Through for the top 70% of “cold” data, Write‑Through for 30% high‑write entities (user profiles). This cut overall query latency by **35%**, kept consistency within SLA, and saved ~$180k/yr vs a pure Read‑Through design.  

**Reflection**  
Ownership: I drove the decision end‑to‑end, coordinating devs & ops. Dive Deep: quantified every trade‑off with real traffic data. Learned that caching strategy isn’t one‑size‑fits‑all—continuous monitoring and A/B testing are key to staying customer‑obsessed.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
