---
qid: ing_21efd1503c__aws__local
question: 'Explain: A KVCache-centric Disaggregated Architecture for LLM Serving'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 502
total_tokens: 735
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:43:48-05:00'
sources: []
---

**Situation & Task**  
At my previous role I led the redesign of our LLM‑serving pipeline that was bottlenecked by 3 × higher latency when models were hot‑loaded from disk for every inference request. The goal: reduce average inference latency to <30 ms while keeping cost per thousand requests below $0.02.

**Action – Design**  
I proposed a **KVCache‑centric, disaggregated architecture**:

| Component | AWS Service | Role |
|-----------|-------------|------|
| Cache layer | Amazon ElastiCache for Redis (clustered) | Holds key‑value pairs of pre‑computed embeddings and attention scores. |
| Model shards | EC2 Spot + EBS gp3 | Stores model weights; only the active shard is loaded into GPU memory. |
| Orchestrator | AWS Step Functions + Lambda | Dynamically routes requests to the right cache shard, triggers lazy loading on miss. |

*Key decisions*:  
- **Cache‑first**: 90 % of requests hit Redis → 70 % fewer disk I/O ops.  
- **Lazy loading with pre‑warm**: Spot instances keep warm; cost down 40 %.  
- **Horizontal scaling**: Auto‑scaling on CPU utilization keeps 99.9 % availability during traffic spikes.

**Result (STAR)**  
Implemented within 6 weeks, the new stack cut average latency from 120 ms to **28 ms** (≈ 77 % improvement). Monthly cost dropped from $12k to **$7.2k** (36 % savings). We achieved a 99.97 % SLA during a 4× traffic surge.

**Reflection & Learning**  
I took full ownership: ran A/B tests, logged cache hit ratios, and iterated on eviction policies. The biggest failure was under‑estimating the cold‑start latency of Spot instances; I added a small on‑demand buffer tier to mitigate that risk.  

**Bar‑raiser cues** – Ownership, Dive Deep (metrics, trade‑offs), Bias for Action (rapid prototyping), Deliver Results (quantified impact).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
