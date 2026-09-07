---
qid: ing_5158e05c51__aws__local
question: A regional government wants an assistant in a low-resource language with
  only a few thousand sentences of clean text. How do you adapt a model to it?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 249
output_tokens: 482
total_tokens: 731
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:29:08-05:00'
sources: []
---

**Situation & Task (S)**  
A regional council needed a virtual assistant in *X*—a low‑resource language with only ~3 k clean sentences—to answer citizen queries on public services. They required high availability (24/7), privacy compliance, and cost ≤ $2 k/month.

**Action (A)**  
1. **Ownership & Customer Obsession** – I took full ownership of the pipeline: data collection → model fine‑tuning → deployment.  
2. **Dive Deep** – Built a semi‑automated data augmentation loop using back‑translation (English ↔ *X*) and paraphrasing, expanding the corpus to ~120 k sentences while preserving meaning.  
3. **Bias for Action & Invent & Simplify** – Chose HuggingFace’s `distilBERT` base, fine‑tuned with LoRA on an EC2 g4dn.xlarge spot instance (cost ≈ $0.10/hr).  
4. **AWS Services** –  
   * **S3** for raw & augmented corpora (encryption).  
   * **AWS SageMaker** for training and hyper‑parameter tuning.  
   * **Lambda + API Gateway** to expose the model via a REST endpoint, auto‑scaling with Lambda’s provisioned concurrency (max 200 QPS).  
5. **Scalability & Availability** – Deployed in two AZs; used Route 53 health checks for failover.  
6. **Cost Control** – Spot instances + SageMaker Savings Plans reduced training spend to $350, inference < $1,000/month.

**Result (R)**  
- 90 % of citizen questions answered correctly on first attempt (measured by post‑deployment A/B test).  
- Response latency averaged 180 ms, meeting SLA.  
- Total cost: $1,650/month—30 % under budget.  

**Learnings** – Early engagement with local linguists improved augmentation quality; iterative fine‑tuning prevented catastrophic forgetting in downstream tasks. This approach balances rapid delivery with deep technical rigor, embodying Amazon’s Leadership Principles.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
