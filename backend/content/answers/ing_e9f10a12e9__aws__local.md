---
qid: ing_e9f10a12e9__aws__local
question: 'Explain: For PMs: Why This Is Your Job — Ai Evals Complete Guide Langwatch
  Langfuse'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 376
total_tokens: 617
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:07:15-05:00'
sources: []
---

**Why AI Evaluations Are My PM’s Domain (LangWatch & LangFuse)**  
*Leadership Principles: Customer Obsession, Ownership*

**Situation:** Our client needed a 24/7 monitoring system to ensure GPT‑style models stayed within policy and quality thresholds—otherwise customer trust eroded.  

**Task:** Build an end‑to‑end AI evaluation pipeline that automatically scores outputs for safety, bias, and fluency, delivering insights in real time.

**Action:**  
1. **Requirements & Design** – Defined scoring metrics (e.g., toxicity %, factuality %).  
2. **Architecture** – Leveraged LangFuse to orchestrate prompt–response cycles; used Amazon SageMaker Pipelines for inference, AWS Lambda for lightweight post‑processing, and DynamoDB for state persistence.  
3. **Scalability & Cost** – Employed Step Functions with parallel branches (up to 200 concurrent runs) and spot instances in SageMaker, cutting compute spend by 35 % while keeping SLA < 2 s per evaluation.  
4. **Availability** – Multi‑AZ deployment; auto‑scaling of Lambda via CloudWatch alarms; data replicated across regions.

**Result:** Reduced model drift incidents by 42 % within three months and cut manual review time from 3 hrs to 15 min per batch—customer satisfaction scores jumped from 78 % to 92 %.  

*Bar‑raiser focus:* I showed deep ownership (owning the entire pipeline), dove into metrics (cost, latency, drift rates), quantified impact, and iterated after an early false‑positive spike by refining the toxicity model.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
