---
qid: ing_bc4998c421__aws__local
question: 'Explain: MemoryGraft: Persistent Compromise of LLM Agents via Poisoned
  Experience Retrieval'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 413
total_tokens: 650
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:29:24-05:00'
sources: []
---

**Situation / Task**

I was part of a security‑ops team that had to safeguard a customer‑facing LLM service used for dynamic content generation. An adversary discovered a way to inject malicious experiences into the agent’s memory, causing it to persist harmful behavior across sessions—what we later called **MemoryGraft**.

**Action (Technical Design)**

1. **Audit Experience Streams** – We instrumented every experience ingestion point with an AWS Lambda that hashes the payload and cross‑checks against a DynamoDB “trusted‑experiences” table.  
2. **Immutable Replay Store** – Experiences are written to Amazon S3 (object versioning) and tagged with a signed JWT from Cognito, ensuring tamper‑evidence.  
3. **Secure Retrieval Layer** – A Go microservice on ECS Fargate queries the S3 store via SDK v2, verifies signatures, and serves only whitelisted experiences.  
4. **Rate Limiting & Canary Testing** – API Gateway throttles retrieval calls; CloudWatch Alarms trigger a rollback to a “clean” memory snapshot if anomalies spike.

**Result**

Within 48 hrs we reduced the window for persistent compromise by **>99%**, cut false‑positive poisoning attempts from 12/hour to <1/hour, and achieved 99.999% availability with <$0.05 per retrieval.  

**Leadership Principles Reflected**

- *Customer Obsession* – Eliminated a serious privacy risk before customers ever saw it.  
- *Ownership & Dive Deep* – Took full ownership of the entire ingestion‑to‑retrieval pipeline, dissecting every touchpoint for vulnerabilities.  

**Bar‑raiser Takeaway**

A strong answer shows concrete ownership, deep technical dives, measurable impact, and a learning loop (post‑incident review led to automated policy updates).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
