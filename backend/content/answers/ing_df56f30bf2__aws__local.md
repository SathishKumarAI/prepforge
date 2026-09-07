---
qid: ing_df56f30bf2__aws__local
question: 'Explain: Wrong Tool Selection — Safety And Governance'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 357
total_tokens: 585
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:44:40-05:00'
sources: []
---

**Situation / Task**  
I was leading a fraud‑prevention project for a fintech client that required real‑time AI scoring of transactions. The team chose an on‑premises TensorFlow inference engine because it promised low latency, but the data scientists had not evaluated its compliance with GDPR and internal security policies.

**Action**  
*Ownership & Dive Deep*: I immediately pulled the product owner, legal, and security into a sprint review. We mapped each data flow against the *Right to be Forgotten* and audit‑log requirements.  
I proposed switching to **Amazon SageMaker Endpoint** combined with **AWS Nitro Enclaves** for isolated inference and **AWS Key Management Service (KMS)** for encryption at rest. This allowed us to enforce fine‑grained IAM policies, automatically rotate keys, and meet GDPR’s data minimization standards.  
We also added a *Model Monitoring* job in SageMaker to flag drift and a *GuardDuty* rule for anomalous traffic.

**Result**  
The migration cut inference latency from 350 ms to 120 ms (3× faster), reduced infrastructure cost by **$18k/month** (serverless vs. on‑prem), and eliminated the compliance risk—no GDPR fines were incurred during the audit. The client reported a 15% reduction in false positives, directly boosting revenue.

**Learnings**  
I learned that selecting the right tool isn’t just about performance; it’s about governance and cost. I now routinely run a *tool‑fit* matrix before architecture decisions to ensure we align with Customer Obsession, Ownership, and Deliver Results.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
