---
qid: ing_4b384e97cb__aws__local
question: 'Explain: Non-Functional Requirements — Conversational Agent'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 463
total_tokens: 692
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:15:12-05:00'
sources: []
---

**Situation (S)** – While launching a multilingual customer‑support chatbot for our global e‑commerce platform, I realized that the non‑functional requirements (NFRs) around latency, reliability and privacy would determine user adoption.

**Task (T)** – Own the NFR definition and architecture so the bot can answer 90 % of queries in < 500 ms with < 0.1 % downtime, while encrypting all data per GDPR.

**Action (A)** –  
1. **Customer Obsession & Ownership:** Conducted a “latency‑budget” workshop with UX and compliance teams to quantify user expectations (target 200 ms for high‑traffic zones).  
2. **Dive Deep + Invent & Simplify:** Deployed an **AWS Lambda** microservice per language, triggered by API Gateway, backed by **Amazon DynamoDB Global Tables** for low‑latency state storage.  
3. Used **Amazon SageMaker Endpoint** (multi‑region) with auto‑scaling to host the NLU model; added a **cache layer** in **ElastiCache Redis** to serve 70 % of repeat intent queries instantly.  
4. Enforced **KMS‑managed encryption** at rest and TLS 1.3 in transit; integrated **AWS WAF** for DDoS protection.  
5. Implemented **CloudWatch Alarms + EventBridge** to auto‑scale Lambda concurrency and trigger a rollback if latency > 500 ms.

**Result (R)** – Post‑deployment, the bot achieved 92 % of queries < 400 ms, 99.9 % uptime over 6 months, and reduced support tickets by **27 %**, saving ~$120k/month in ops costs.  
Learning: Early latency profiling prevented a costly 30‑min outage; continuous A/B testing on cache hit ratios kept the system lean.  

*Bar‑raiser cues:* Clear ownership, deep architectural choices, quantified impact, lessons from iterative failure handling.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
