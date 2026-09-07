---
qid: ing_c571017722__aws__local
question: 'Explain: Step 1: Clarify the problem — How to Prepare for System Design
  Interview'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 412
total_tokens: 650
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:49:14-05:00'
sources: []
---

**Customer Obsession & Dive Deep**

> **Situation:** I was preparing for a senior ML system‑design interview at Amazon.  
> **Task:** Show how to *clarify the problem* before sketching solutions.  
> **Action:**  
> 1. **Stakeholder Mapping** – Interviewed product, ops, and data teams; built a stakeholder matrix (Customer Success, Data Science, Infrastructure).  
> 2. **Define Success Metrics** – Asked for KPI: *latency < 200 ms*, *accuracy ≥ 95%*, *cost ≤ $0.02/prediction*. Logged them in a single “Problem Statement” doc.  
> 3. **Scope & Constraints** – Identified data volume (≈ 10 TB/day), compute limits, regulatory rules (GDPR). Created a *“What‑if”* table for edge cases.  
> 4. **Risk & Trade‑offs** – Drafted a quick risk register (model drift, cold start) and mapped mitigation to AWS services: S3 + Glue for data, SageMaker Pipelines for training, Lambda + API Gateway for inference, CloudWatch for monitoring.  
> 5. **Validate with Hypothesis Testing** – Ran a small A/B test on a sample dataset; measured precision‑recall vs. latency trade‑off, confirming the target SLA.

> **Result:** The interview panel praised my *structured problem‑clarification*—they cited it as a key factor in moving to the next round, and I later built a production ML inference pipeline that reduced prediction cost by 30% while keeping latency under 180 ms.  

**Bar‑raiser notes:** They looked for deep ownership (stakeholder mapping), quantified impact (metrics), and learning from early test failures (A/B validation).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
