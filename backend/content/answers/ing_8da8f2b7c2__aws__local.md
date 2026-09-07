---
qid: ing_8da8f2b7c2__aws__local
question: 'Explain: Types of Back of the Envelope Calculations in System Design Interviews'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 562
total_tokens: 796
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:46:02-05:00'
sources: []
---

**Customer Obsession & Dive Deep**

*Situation*: In a recent interview I was asked to sketch “back‑of‑the envelope” (BOE) calculations for a real‑time recommendation engine that would serve 1 M daily active users with <100 ms latency.

*Task*: Quickly estimate compute, storage, and network budgets so the design could be validated against cost & performance constraints.

*Action*  
1. **Define core metrics**:  
   * #queries per second (QPS) = DAU × avg requests/user ÷ 86400 ≈ 12 k QPS.  
   * Avg. model inference time = 30 ms → compute demand ≈ 360 CPU‑seconds/sec.  
2. **Compute sizing**:  
   * Assume each CPU core handles 1 inference/second → need ~360 cores.  
   * Use EC2 g4dn.xlarge (4 vCPUs, 16 GB GPU) per node; 90% utilization ⇒ 5 nodes ≈ $0.35/hr/node → ~$100/day.  
3. **Storage**:  
   * Model size = 200 MB; replicas for HA → 400 MB total.  
   * Use EFS with throughput 1 MiB/s (≈$0.30/GB‑month) → negligible cost.  
4. **Network & caching**:  
   * Edge CDN (CloudFront) to offload 70% of traffic, reducing backend QPS by 7.2 k.  
   * In‑memory cache (ElastiCache Redis) for hot items; 5 GB RAM → ~$0.04/hr.

*Result*: The BOE gave a **$140/day** baseline and proved the design met <100 ms latency at 12 k QPS. I later built a proof‑of‑concept that achieved 92 % of the projected throughput with only 4 nodes, saving ~30 % on compute costs.

*Learning*: BOEs must balance **accuracy vs speed**; over‑simplification can hide bottlenecks, while over‑engineering wastes time. Always iterate: validate assumptions against real data (e.g., actual QPS from analytics).  

---

> **Bar‑raiser cue**: Look for ownership—did the candidate own the entire estimate? Dive deep—did they justify each metric and service choice? Quantified impact—did they provide concrete cost & performance numbers? And learning—from the pilot, did they adjust the plan based on data?

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
