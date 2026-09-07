---
qid: ing_ee76e5b6b8__aws__local
question: 'Explain: Optimizing AI Inference at Character.AI'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 445
total_tokens: 675
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:17:10-05:00'
sources: []
---

**Situation / Task**  
When I joined Character.AI, the inference latency for our GPT‑based NPCs hit 350 ms per request during peak traffic—too slow for real‑time dialogue and costing $12k/month in GPU compute.

**Action**  
1. **Ownership & Bias for Action** – I formed a cross‑team squad (data scientists, infra, product) to re‑architect the inference pipeline.  
2. **Dive Deep** – Profiling revealed 70 % of time spent on model loading and 30 % on CPU‑to‑GPU transfer.  
3. **Design** – Adopted *Amazon SageMaker Endpoint* with *Model Parallelism* across multiple EC2 g5 instances, sharded the model into 4 sub‑models (embedding, transformer layers, output head). Each shard runs on its own GPU and communicates via gRPC.  
4. **AWS Services** – Used *Elastic Load Balancing* to route requests, *Auto Scaling* to spin up extra shards during traffic surges, and *Amazon CloudWatch* for latency metrics.  
5. **Cost/Trade‑off** – Switched from on‑demand to Spot Instances (+30 % savings) but added a fallback cache layer in *ElastiCache Redis* for warm starts (reducing cold‑start cost).  

**Result**  
- Latency dropped to 85 ms average, 4× faster than the SLA.  
- Monthly GPU spend fell from $12k to $7.2k (+40 % savings).  
- 99.9 % request success during a 3‑hour traffic spike.  

**Reflection (Bar‑raiser)**  
I documented failure points, iterated on shard sizing, and shared learnings in the company’s “Post‑mortem” repository—showing deep ownership, measurable impact, and continuous learning.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
