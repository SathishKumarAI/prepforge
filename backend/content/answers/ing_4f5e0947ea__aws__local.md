---
qid: ing_4f5e0947ea__aws__local
question: 'Explain: Mitigation Strategies — Llm Security'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 402
total_tokens: 630
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:24:36-05:00'
sources: []
---

**Situation / Task**  
At my previous role, we launched a customer‑facing chatbot powered by GPT‑4 to handle support tickets. After a security audit, we discovered that the LLM could inadvertently reveal PII or internal logic when queried in certain ways. My goal was to build an end‑to‑end mitigation framework so that the service remained compliant and trustworthy.

**Action**  
- **Ownership & Bias for Action**: I took full ownership of the risk and pushed a rapid iteration cycle.  
- **Dive Deep**: We instrumented every prompt, logged token usage, and ran adversarial tests (prompt injection, jailbreaks).  
- **Design**: Built a “Prompt‑Guardian” microservice (AWS Lambda + API Gateway) that applies regex rules, semantic filtering (Amazon Comprehend), and a fine‑tuned policy model to block PII leakage.  
- **AWS Services**: VPC‑endpoint for S3 logs, DynamoDB for rule store, CloudWatch for real‑time alerts, KMS for encrypting stored prompts.  
- **Scalability / Cost**: Lambda concurrency throttled at 5 k requests/s; auto‑scales with the chatbot load. Estimated $0.12/hr per lambda cluster vs. $2.40 for a dedicated EC2 instance—cut costs by 95%.  

**Result**  
Within two weeks, we reduced PII exposure incidents from **15/day to 0** and passed SOC‑2 compliance audit. Customer satisfaction scores improved by **+4.7%** (Net Promoter Score). The framework was later adopted company‑wide for all LLM services.

> **Bar‑raiser notes:** Demonstrated clear ownership, deep technical dive, measurable impact, and a learning loop that turned a vulnerability into a scalable security product.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
