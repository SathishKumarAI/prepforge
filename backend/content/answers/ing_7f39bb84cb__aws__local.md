---
qid: ing_7f39bb84cb__aws__local
question: 'Explain: uh this is measured at the server — Building Software Systems
  At Google and Lessons Learned'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 368
total_tokens: 606
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:12:48-05:00'
sources: []
---

**Situation / Task**  
I was leading a new ML inference platform at Google that had to serve image‑recognition models for millions of daily users while keeping latency under 200 ms. The team measured model accuracy *only* on the client side, so we were blind to how server‑side preprocessing and batching impacted real‑world performance.

**Action**  
1. **Ownership & Dive Deep:** I drove a cross‑team effort to instrument every request path—pre‑processing, GPU scheduling, and post‑processing—in Cloud Run + GKE.  
2. **Design:** Introduced a *dynamic batch scheduler* (Python + Redis) that aggregates requests into optimal size batches based on queue depth, reducing GPU idle time by 35 %.  
3. **AWS Parallels:** If this were Amazon, we’d use **SageMaker Endpoint** with a *Batch Transform* layer, auto‑scaling via CloudWatch metrics, and an API Gateway front‑end to guarantee 99.9 % SLA.

**Result**  
- Latency dropped from 320 ms to 190 ms (−40 %).  
- GPU utilization rose from 45 % to 78 %, cutting infrastructure cost by $18K/month.  
- The metric dashboard now shows real‑time *server‑side* accuracy, aligning ops and ML teams.

**Learning**  
I realized that “Customer Obsession” means understanding the end‑to‑end user experience—starting from server logs, not just model outputs. This shift in observability became a standard for all subsequent inference projects.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
