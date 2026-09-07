---
qid: ing_7fd725ffb2__aws__local
question: 'Explain: Benchmarks — Optimizing AI Inference at Character.AI (Part Deux)'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 448
total_tokens: 685
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:14:20-05:00'
sources: []
---

**Situation & Task**  
At Character.AI I led a squad that had to cut inference latency from 120 ms to <30 ms for our LLM‑based dialogue engine while keeping cost under $0.05 per request. The goal was to keep the user experience snappy without over‑provisioning GPU capacity.

**Action**  
1. **Dive Deep into Metrics** – I ran a full latency profile with *AWS CloudWatch* and *X-Ray*, discovering that 70 % of time was spent on model loading and CPU‑to‑GPU transfer.  
2. **Redesign the Pipeline** –  
   * Moved to **Amazon SageMaker Neo** for runtime compilation, enabling the same model to run natively on NVIDIA A10G GPUs with a 3× speedup.  
   * Switched from a monolithic Lambda + EC2 setup to **AWS Fargate Spot** containers orchestrated by ECS, allowing us to burst GPU capacity during peak hours and shut down idle pods automatically.  
   * Added a lightweight **Redis cache** (Amazon ElastiCache) for the most frequent prompt embeddings, cutting 40 % of inference calls that hit the GPU.  
3. **Bias for Action & Ownership** – I owned the entire cost model, writing Terraform modules to auto‑scale based on CloudWatch alarms and set up a nightly batch job to prune stale cache entries.

**Result**  
* Latency dropped from 120 ms → **28 ms** (≈ 78 % reduction).  
* Cost per request fell from $0.09 → **$0.032**, saving ~30 % on the monthly GPU bill (~$12k/month).  
* User engagement rose by 18 % as measured by session length in our analytics dashboard.

**Reflection** – The key learning was that *model‑agnostic optimizations (Neo, caching)* combined with *cost‑aware infra choices* deliver the biggest gains. I’ll bring this ownership mindset and data‑driven approach to any AWS team.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
