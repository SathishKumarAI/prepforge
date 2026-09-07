---
qid: ing_3f38759484__aws__local
question: 'Explain: OWASP Top 10 for LLM Applications (2025)'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 424
total_tokens: 658
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:48:40-05:00'
sources: []
---

**Customer Obsession & Ownership**

> **Situation:** While designing a generative‑AI service for an internal sales chatbot, my team discovered that many LLM‑derived responses could expose sensitive customer data or violate privacy regulations.

> **Task:** I was tasked with building a compliance layer that protects users while keeping the model’s value intact.

> **Action:**  
> 1. **Dive Deep** into OWASP LLM Top 10 (2025) – identified *Injection*, *Broken Access Control*, *Privacy Violation*, *Data Poisoning*, and *Model Inversion* as top risks.  
> 2. Implemented a multi‑service architecture:  
>    - **AWS Lambda + Amazon GuardDuty** for real‑time request filtering (rate‑limit, IP reputation).  
>    - **Amazon API Gateway with WAF rules** to block injection patterns.  
>    - **Amazon SageMaker Feature Store** to tag user data and enforce *Least Privilege* model access via IAM policies.  
>    - **AWS Secrets Manager + KMS** for on‑the‑fly tokenization of PII before passing to the LLM.  
> 3. Added a *post‑generation audit* layer using **Amazon Macie** to detect privacy leaks, sending alerts to an Ops Slack channel via Amazon EventBridge.

> **Result:** Reduced privacy‑related incidents by **92 %** in the first quarter; compliance score improved from 65/100 to 97/100. The cost of the added security stack was < $0.02 per inference, keeping latency under 200 ms and throughput > 10k requests/day.

> **Bar‑raiser notes:** I demonstrated ownership by owning the full incident lifecycle, deep technical dive into OWASP risks, quantified impact, and iterative learning—refining WAF rules after a false‑positive spike.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
