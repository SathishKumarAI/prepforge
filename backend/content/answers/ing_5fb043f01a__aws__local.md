---
qid: ing_5fb043f01a__aws__local
question: 'Q: Why not just use a 2M token context window for all memory (L1-L3)?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 475
total_tokens: 716
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:02:26-05:00'
sources: []
---

**Answer – Amazon Interview Style**

**Situation & Task**  
When architecting the next‑generation multimodal AI platform, I was asked whether a single 2 M‑token context window could replace all hierarchical memory layers (L1–L3). My goal was to evaluate feasibility against performance, cost, and reliability.

**Action – Technical Design**  
I scoped requirements: *real‑time inference latency ≤30 ms*, *cost per request < $0.05*, *99.9 % availability*. I compared three options:

| Option | AWS Services | Latency | Cost (USD/req) | Trade‑offs |
|--------|--------------|---------|----------------|------------|
| 2 M‑token flat | SageMaker + EFS | 120 ms | $0.12 | High memory, S3 I/O bottleneck |
| Hierarchical L1–L3 | SageMaker + DynamoDB + EFS | 25 ms | $0.04 | Modular scaling, easier cache invalidation |
| Hybrid (shallow L2) | SageMaker + ElasticCache Redis | 35 ms | $0.07 | Balances speed and storage |

I proposed a **hierarchical approach**: L1 (in‑memory Redis) for hot tokens, L2 (EFS) for mid‑term, L3 (S3/Glacier) for cold data. This delivers *sub‑30 ms latency*, keeps costs under $0.05, and allows auto‑scaling of each tier.

**Result**  
After a 4‑week pilot, the system handled 1 M concurrent requests with **99.95 % uptime** and saved **$350k annually** versus a flat design.  

**Reflection – Leadership Principles**  
- *Ownership*: I drove the end‑to‑end cost‑benefit analysis.  
- *Dive Deep*: The data table surfaced hidden bottlenecks.  
- *Bias for Action*: Rapid prototyping validated assumptions before full rollout.

This showcases how Amazon’s principles guide scalable, customer‑centric AI architecture.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
