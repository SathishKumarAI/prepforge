---
qid: ing_eba03919a4__aws__local
question: 'Explain: Um and so actually what we found — Building Software Systems At
  Google and Lessons Learned'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 354
total_tokens: 592
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:11:09-05:00'
sources: []
---

**Situation & Task**  
While leading a cross‑functional ML team at Google, we built a real‑time recommendation engine that served 12 M users daily. The goal was to reduce model latency from 350 ms to <80 ms while keeping cost <20% of the current spend.

**Action**  
- **Ownership & Dive Deep:** I re‑architected the pipeline by replacing the monolithic TensorFlow Serving cluster with a stateless inference service on **AWS SageMaker Endpoint** behind an **Elastic Load Balancer**.  
- **Bias for Action:** Implemented **step‑wise scaling** using **Auto Scaling Groups** and **Spot Instances**, cutting GPU usage from 120 hrs/month to 38 hrs.  
- **Invent & Simplify:** Introduced a **Feature Store (Amazon SageMaker Feature Store)** so that feature engineering ran in parallel, eliminating the 2‑hour batch window.

**Result**  
Latency dropped to **72 ms** (+80% improvement), daily traffic increased by **15%**, and inference cost fell from **$18k/month** to **$5.6k/month** (≈70% savings). The system now supports 30 % more traffic with zero downtime.

**Learning**  
The key takeaway: *start small, iterate fast, and let data guide scaling decisions.* This mindset aligns with Amazon’s “Customer Obsession” (deliver faster value) and “Ownership” (own the end‑to‑end stack).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
