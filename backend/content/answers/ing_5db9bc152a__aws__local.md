---
qid: ing_5db9bc152a__aws__local
question: What Does Real World Back of the Envelope Calculation Involve?
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 502
total_tokens: 734
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:57:47-05:00'
sources: []
---

**Situation & Task**  
While leading a new recommendation engine at an e‑commerce startup, the product team asked me to estimate the cost and latency of serving 10 M requests per day with a neural‑ranker on AWS. I had to deliver a quick, data‑driven feasibility check before committing engineering resources.

**Action – Back‑of‑the‑Envelope Calculation**  
1. **Compute needs**:  
   *Model size* ≈ 200 MB → 0.2 GB per inference.  
   *Requests/day* = 10 M → 10 M × 0.2 GB = 2 TB/day of model traffic.  
   *CPU‑time*: Benchmarked locally: 50 ms per inference on a vCPU → 500 000 vCPU‑hrs/day ≈ $4,000/month (EC2 g5.xlarge at $0.90/hr).  

2. **Storage & data transfer**:  
   S3 for model artifacts = 200 MB × 10 = $0.02/month.  
   EFS for caching → 100 GB @ $0.30/GB/mo = $30/mo.  
   Data egress (model pulls) ≈ 2 TB × $0.09/GB = $180/mo.

3. **Latency & scaling**:  
   Target <200 ms → deploy 10 instances in an Auto Scaling group; 10×50 ms = 500 ms, but with async batch inference and GPU acceleration it drops to ~80 ms.  

4. **Cost total** ≈ $4,250/month + $210/mo for I/O ≈ $4,460/month.

**Result**  
The estimate convinced stakeholders that a serverless *Amazon SageMaker* endpoint would cost ~$3,800/month with 95 % lower latency (≈60 ms). We launched in two weeks and saw a 12 % lift in conversion—meeting the KPI within budget.

> **Leadership Principles:** Ownership & Dive Deep.  
> **Bar‑raiser focus:** Quantified impact, clear assumptions, quick trade‑off analysis, and learning from the pilot to refine cost models.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
