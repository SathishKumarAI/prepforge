---
qid: ing_672074d3af__aws__local
question: 'Explain: Capacity and Storage Estimation — ChatGPT System Design - by Neo
  Kim and Hayk'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 495
total_tokens: 734
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:18:06-05:00'
sources: []
---

**Situation & Task**  
In my last role I led the design of a next‑gen chatbot (ChatGPT‑style) for an enterprise SaaS platform. The key challenge was estimating **capacity and storage** to support millions of concurrent users while staying within budget.

**Action – Technical Design**  
1. **Requirements** – 5 M active users, peak 200 k QPS, 30 day retention of conversation logs (≈ 10 GB/day).  
2. **Model hosting** – Deploy GPT‑3.5 via **Amazon SageMaker Endpoint** with autoscaling based on CPU/Memory metrics; use **Inference Pipelines** to batch requests in 128‑token windows, cutting GPU usage by ~35%.  
3. **Storage** – Store raw logs in **S3 Glacier Deep Archive** (cost $0.004/GB/month) and index recent data in **DynamoDB Global Tables** for low‑latency retrieval; use **AWS Glue** to ETL logs into a **Redshift Spectrum** warehouse for analytics.  
4. **Scalability & Availability** – Multi‑AZ SageMaker endpoints + Route 53 latency‑based routing give 99.9% availability; S3 and DynamoDB provide built‑in durability (11 nines).  
5. **Cost Control** – Spot instances for training, on‑demand for inference; automated cost alerts via CloudWatch → $1.2 M/yr vs the $2.8 M baseline.

**Result**  
Achieved 98% of peak QPS with < $0.50 per request and reduced storage costs by **55%**, enabling a 30‑day retention for 5 M users at <$1.3 M/yr.  

---

### Leadership Principles Highlighted  
- **Customer Obsession** – Designed to meet user latency & data privacy needs.  
- **Ownership / Dive Deep** – Took full responsibility, analyzed every cost line, and iterated the architecture after initial pilot failures (e.g., over‑provisioned GPU memory).  

Bar‑raisers look for: ownership in end‑to‑end delivery, deep technical trade‑offs, quantified ROI, and lessons learned from early missteps.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
