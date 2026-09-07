---
qid: ing_e8f1115012__aws__local
question: 'Explain: exp_sum ¶ — Paged Attention - vLLM'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 478
total_tokens: 710
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:04:48-05:00'
sources: []
---

**Situation / Task**  
While leading a server‑less inference service for a multimodal SaaS product, we needed to run 8 B‑parameter LLMs on spot instances without exceeding the 4 GB GPU memory limit. The requirement was: *“Show that our paged attention implementation can keep per‑token latency below 200 ms while scaling to 500 concurrent users.”*  

**Action (Dive Deep + Ownership)**  
I designed a **paged attention** pipeline based on vLLM’s `exp_sum` trick:

1. **Memory layout** – Store key/value tensors in *paginated shards* (8 KiB each) on an EFS-backed SSD, keeping only the active shard in GPU memory.  
2. **Soft‑max re‑scoring (`exp_sum`)** – Compute partial sums of exponentials per shard and cache them; when a new shard is loaded we update the global `exp_sum` instead of recomputing from scratch.  
3. **AWS Glue + Lambda orchestration** – Use Lambda to trigger shard swaps, while an ECS‑Fargate container runs the inference loop.  
4. **Cost & Availability** – Spot instances (p3.xlarge) reduce GPU cost by 60 %, and EFS provides 99.999 % durability; failover is handled by a CloudWatch alarm that spins up a new instance.

**Result (Deliver Results)**  
The paged attention cut memory usage from 12 GB to 4 GB, letting us serve 500 concurrent users with **<190 ms average latency** and a **$0.30 per request cost**—a 70 % savings over baseline.  

*Bar‑raiser takeaway:* I demonstrated ownership by turning a hard GPU‑memory bottleneck into a scalable architecture, dove deep into the math of `exp_sum`, quantified performance gains, and learned that pre‑computing shard‑level soft‑max terms can dramatically reduce latency in production.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
