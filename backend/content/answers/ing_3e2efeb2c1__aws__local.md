---
qid: ing_3e2efeb2c1__aws__local
question: Your VLM extracts invoice fields at ~91% per-field accuracy. The customer
  needs 99% and you cannot fine-tune the model. What do you do?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 253
output_tokens: 414
total_tokens: 667
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:46:45-05:00'
sources: []
---

**Situation & Task**  
I was leading a VLM‑based invoice extractor for a fintech client. The model delivered ~91 % per‑field accuracy, but the SLA demanded 99 %. Fine‑tuning was blocked by policy, so I had to engineer a solution that hit the target while keeping cost and latency within budget.

**Action**  
1. **Pipeline Augmentation (Ownership + Bias for Action)** – Built a *post‑processing* validation layer in AWS Lambda triggered after OCR.  
2. **Rule Engine & Confidence Thresholding** – Integrated Amazon Textract’s field confidence scores with custom regex rules to flag low‑confidence matches.  
3. **Human‑in‑the‑Loop (HITL) via Amazon SageMaker Ground Truth** – For flagged records, routed a small batch (~5 % of invoices) to an internal reviewer. The ground truth labels were fed back into the inference pipeline as “golden examples” for *continuous improvement* without full model retraining.  
4. **Cost & Scalability** – Leveraged Lambda’s pay‑per‑execution pricing and S3 event triggers, keeping extra compute < $0.10 per invoice. Parallelization across 10 Lambda workers ensured sub‑second latency.

**Result**  
Accuracy on the production stream rose from 91 % to **99.2 %** within two weeks, with a cost increase of only **8 %** and no change in throughput. The solution was fully auditable; every flagged record logged its confidence score and reviewer decision for future analysis.

**Reflection (Bar‑raiser focus)**  
I owned the problem end‑to‑end, dove deep into confidence metrics, quantified impact with clear KPIs, and turned a failure point (model limitation) into a scalable process that can be iterated as new data arrives.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
