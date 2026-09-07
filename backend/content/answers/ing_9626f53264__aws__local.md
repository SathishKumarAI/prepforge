---
qid: ing_9626f53264__aws__local
question: 'Explain: Programming & OOP Design & Problems (LLD)'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 420
total_tokens: 653
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:05:19-05:00'
sources: []
---

**Situation (S)** – While leading the ML Ops team at a fintech startup, we were asked to build an internal “Model Registry” that could store thousands of trained models and serve them with <50 ms latency for real‑time fraud detection.

**Task (T)** – Design a low‑level object model that supports versioning, lineage tracking, and automated rollback while keeping the API simple for data scientists.

**Action (A)**  
- Adopted **Ownership**: I mapped every requirement to a single domain entity (`Model`, `Version`, `Deployment`).  
- Applied **Dive Deep**: I wrote a UML diagram showing bidirectional associations and used a *Strategy* pattern for storage back‑ends (S3, DynamoDB).  
- Implemented **Factory** + **Builder** patterns so new model types could be added without touching existing code.  
- Leveraged AWS services – **Amazon SageMaker Model Registry**, **ECR** for Docker images, and **AppConfig** for rollout toggles.  
- Conducted a *cost/latency* trade‑off study: chose DynamoDB Global Tables (high availability) over RDS (higher latency).  
- Added unit‑test coverage of 92 % and CI/CD pipelines that run integration tests on every PR.

**Result (R)** – The registry handled **>20,000 models** with 99.9 % uptime; model deployment time dropped from 12 min to 3 min, saving ~$1k/month in compute costs. Feedback loop from data scientists improved feature‑engineering cycle by 35 %.  

*Bar‑raiser note:* I demonstrated clear ownership, deep technical design, measurable impact, and iterative learning from the first rollout failures (schema migration bugs).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
