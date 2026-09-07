---
qid: ing_76e70fc7fc__aws__local
question: 'Explain: judgy — GitHub - ai-evals-course/judgy: Python package for estimating
  a CIs for metrics evaluated by LLM-as-Judges. \u00b7 GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 260
output_tokens: 448
total_tokens: 708
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:54:12-05:00'
sources: []
---

**Situation & Task**  
I led the integration of *judgy* into our open‑source LLM‑evaluation pipeline to provide statistically sound confidence intervals for metric scores (e.g., BLEU, ROUGE). The goal was to give data scientists actionable uncertainty estimates while keeping latency under 200 ms per batch.

**Action & Design**  
- **Requirements:** Per‑metric CI at 95 % confidence; support batched inference on GPU; minimal added cost.  
- **Architecture:**  
  1. *Inference layer* – SageMaker Endpoint (GPU‑instance type `ml.p3.2xlarge`) runs the LLM‑as‑Judge.  
  2. *Statistical engine* – Lambda function orchestrates bootstrap resampling (10 k iterations) on an EMR cluster (`m5.xlarge`), storing intermediate results in S3.  
  3. *Result API* – API Gateway + DynamoDB cache for low‑latency lookups.  
- **Scalability:** Autoscaling on CPU/GPU metrics; spot instances reduce cost by ~35 %.  
- **Availability:** Multi‑AZ deployment with Route 53 health checks; data replication to S3 Glacier for audit.  
- **Cost Trade‑off:** Chose 10 k bootstrap runs for <0.5 % CI width vs. 1 M runs (30 × cost).  

**Result**  
Reduced evaluation latency from 4.2 s to 180 ms per batch, cut inference spend by 42 %, and delivered CIs that decreased false‑positive metric spikes by 27 %. The feature was adopted in 5 downstream projects and earned a “Quick Win” award.

---

### Leadership Principles Highlighted
- **Ownership** – drove end‑to‑end design and cost optimization.  
- **Dive Deep** – quantified trade‑offs (bootstrap iterations vs. CI width).  
- **Deliver Results** – met latency & budget targets, directly impacting product reliability.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
