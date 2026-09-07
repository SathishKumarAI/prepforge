---
qid: ing_50356b2a2f__aws__local
question: 'Explain: Assertions and Constraints — Dspy'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 227
output_tokens: 405
total_tokens: 632
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:26:38-05:00'
sources: []
---

**Customer Obsession & Dive Deep**

*Situation:* In a prototype for an automated legal‑document summarizer, the team noticed that generated summaries sometimes omitted key clauses—an unacceptable risk for compliance.

*Task:* I had to add a mechanism that guarantees every summary contains all required legal terms while keeping latency low.

*Action:* I introduced **DSPY’s assertion and constraint framework**.  
1. **Assertions** are declarative checks (`assert_contains("non‑disparagement clause")`) that run immediately after the LLM produces text, ensuring mandatory content is present.  
2. **Constraints** (e.g., `limit_length(200)`, `avoid_terms(["confidential"])`) guide the model’s generation via prompt engineering and fine‑tuned reward models.

I integrated these into a microservice on AWS Lambda, orchestrated by Step Functions for fallback logic if an assertion fails. The service logs every pass/fail to CloudWatch, feeding back into a DynamoDB table that drives continuous retraining of the constraint policy.

*Result:* After deployment, **false‑negative summaries dropped from 12% to <0.5%**, meeting regulatory SLAs. Latency increased by only 15 ms on average, and cost per request stayed under $0.002 thanks to Lambda’s pay‑per‑execution model.  

**Bar‑raiser takeaways:** I showed ownership of the compliance problem, dove deep into DSPY’s API to craft reusable assertions/constraints, quantified impact with real metrics, and learned that early assertion integration reduces downstream retraining costs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
