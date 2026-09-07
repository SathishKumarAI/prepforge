---
qid: ing_a62b3c02ca__aws__local
question: What is LLM-as-judge? — Faq
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 486
total_tokens: 716
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:42:42-05:00'
sources: []
---

**LLM‑as‑Judge: What It Means for Amazon**

> **Leadership Principles:** *Customer Obsession* & *Ownership*  
> **Scenario (S):** A customer wants a fair, automated arbitration system for marketplace disputes.  
> **Task (T):** Build an LLM‑based “judge” that reads evidence, applies policy, and issues rulings with auditability.  
> **Action (A):**  
> 1. **Requirements & Design:**  
>    * Use **Amazon SageMaker** to fine‑tune a GPT‑4 model on historical dispute transcripts (≈ 500 k lines).  
>    * Wrap the LLM in a stateless Lambda function behind API Gateway, enforcing **IAM** for role‑based access.  
>    * Persist every input–output pair in **DynamoDB** with a signed hash for traceability.  
>    * Integrate **Amazon Comprehend** to extract entities and sentiment, feeding the LLM context.  
> 2. **Scalability & Availability:** Auto‑scaling Lambda + provisioned concurrency ensures < 200 ms latency during peak (peak 5k requests/day). Dual‑AZ DynamoDB gives 99.999% availability.  
> 3. **Cost & Trade‑offs:** Model inference via SageMaker endpoints (~$0.02/1K tokens) keeps cost ≈ $15k/month; trade‑off is a slightly higher latency vs. on‑prem GPU clusters.  
> 4. **Bias Mitigation:** Periodic drift checks with **Amazon Lookout for Metrics** and manual audit loops.  
> **Result (R):** Achieved a **95% accuracy** against human arbitrators, reduced resolution time from 48 h to 6 h, and cut customer support tickets by 35%. Learned that continuous model retraining is essential; we now schedule quarterly fine‑tuning with fresh data.  

*Bar‑raiser focus:* Ownership of end‑to‑end pipeline, deep dive into LLM tuning, quantified impact on SLA, and clear learning loop from drift detection failures.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
