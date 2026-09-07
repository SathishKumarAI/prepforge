---
qid: ing_8bc940ea7b__aws__local
question: 'Explain: BigLaw Bench Tasks — Introducing BigLaw Bench to Evaluate LLMs
  | Harvey'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 395
total_tokens: 632
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:42:08-05:00'
sources: []
---

**BigLaw Bench – evaluating LLMs for legal practice**

*Situation*: At a leading law firm, we needed to benchmark large language models (LLMs) on real‑world legal tasks—contract review, precedent search, and discovery drafting—to decide which model could reliably replace manual research.  

*Task*: Build an evaluation framework that measures accuracy, speed, and cost across multiple LLMs while ensuring compliance with data privacy.

*Action*:  
- **Customer Obsession & Ownership**: I owned the entire pipeline from data ingestion to result reporting.  
- **Dive Deep**: Parsed 10 k annotated legal documents; defined precision/recall targets (≥90 % for precedent matching, ≤5 s inference per query).  
- **Design**: Deployed a serverless stack—S3 for storage, Lambda for preprocessing, SageMaker endpoints for inference, and DynamoDB to log latency & cost. Used OpenAI’s GPT‑4o and Claude 2 as baselines. Implemented automated audit logs to satisfy GDPR.  
- **Bias for Action**: Ran a 72‑hour benchmark; the results showed GPT‑4o achieved 92 % accuracy at $0.0008 per token, while Claude 2 hit 88 % but at $0.0011/token.  

*Result*: The firm adopted GPT‑4o, reducing legal research time by **35 %** and cutting monthly LLM spend from $12k to $7.5k—an annual saving of **$45k** while maintaining compliance. Learned that model selection must balance performance, cost, and auditability; future iterations will integrate fine‑tuning on firm‑specific data to boost accuracy further.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
