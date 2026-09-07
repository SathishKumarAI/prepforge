---
qid: ing_9abc11b11c__aws__local
question: 'Q: How do you manage API keys for an LLM service?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 449
total_tokens: 682
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:15:04-05:00'
sources: []
---

**Answer (Amazon Style)**  

> **Situation:** While launching a serverless chatbot that calls OpenAI’s GPT‑4, I noticed our developers were hard‑coding API keys in source branches, risking accidental leaks and throttling.

> **Task:** Design a secure, auditable key management workflow that scales to 200+ concurrent Lambda invocations per minute without adding operational overhead.

> **Action (Technical):**  
> * **AWS Secrets Manager** stores the LLM key with rotation every 90 days.  
> * **Lambda@Edge + IAM roles** grant each function read‑only access; the key is fetched at runtime, not baked into code.  
> * **CloudTrail + Athena** log every `GetSecretValue` call; a scheduled query flags any abnormal access patterns (e.g., >10 calls/sec).  
> * For cost control, I set a **KMS‑based encryption key** and enabled automatic deletion of old secret versions after 30 days.  
> * Implemented a small **API gateway proxy** that caches the token in an Elasticache Redis layer for 5 minutes to reduce Secrets Manager calls, keeping latency <20 ms.

> **Result:** Reduced accidental key exposure incidents from 3 per quarter to zero; cut Lambda invocation costs by 12% (≈$1.2k/month) through caching; and achieved 99.999% availability during a regional outage thanks to cross‑region Secrets replication.

> **Leadership Principles Anchored:**  
> * **Customer Obsession** – Ensuring end users never see degraded service due to key failures.  
> * **Ownership & Dive Deep** – I audited the entire pipeline, identified risks, and engineered a robust, cost‑efficient solution.  

> **Bar‑raiser takeaway:** Demonstrated ownership by proactively addressing a hidden security flaw; dove deep into AWS services to balance performance, cost, and compliance; quantified impact with clear metrics; learned from prior incidents and built a resilient system for the future.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
