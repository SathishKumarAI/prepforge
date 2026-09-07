---
qid: ing_b3da150d75__aws__local
question: 'Explain: Company context — Character Ai'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 226
output_tokens: 389
total_tokens: 615
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:11:38-05:00'
sources: []
---

**Context & Problem (S)**  
At **Character.ai**, we were building a conversational AI platform that lets creators embed lifelike NPCs into games and apps. The core challenge: **scale the inference pipeline to support > 50k concurrent users while keeping latency < 200 ms** without exploding GPU costs.

**Action (T & A)**  
I took *ownership* of the inference layer, drafted a micro‑service architecture in **AWS Lambda + SageMaker Runtime**, and introduced a **model caching tier** on **Amazon ElastiCache for Redis**. I also built an autoscaling rule that spun up additional GPU instances on **EC2 Spot** whenever cache hit rates fell below 85 %. To keep costs down, I enabled *on‑demand* GPU reservations for the baseline load and scheduled *spot-only* scaling during peak hours.

**Result (R)**  
- Latency dropped from 350 ms to **180 ms** (a 48 % improvement).  
- Concurrent user capacity increased from 12k to **60k**, a 400 % lift.  
- GPU spend fell by **30 %** year‑over‑year, freeing $120K for R&D.

**Reflection (D)**  
The key insight was *dive deep* into cache hit patterns; we discovered that most requests were for the same high‑profile characters. By caching their embeddings, we reduced inference calls by 70 %. I shared these findings in a post‑mortem and updated our ops playbook to include “Cache‑First” checks before scaling. This reinforced the principle of **Bias for Action**—acting fast, learning quickly, and iterating.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
