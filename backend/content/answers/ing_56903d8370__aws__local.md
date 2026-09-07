---
qid: ing_56903d8370__aws__local
question: 'Explain: Data sovereignty & self-hosting — Pydantic Logfire: AI Observability
  for LLMs, Apps & RAG'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 546
total_tokens: 792
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:42:02-05:00'
sources: []
---

**Situation (S)**  
While leading a new AI observability platform for LLM‑driven apps at a fintech client, the regulatory team demanded **data sovereignty**: all telemetry and model logs must stay within the EU, never leaving the customer’s private cloud or an AWS region that could expose data to external auditors.

**Task (T)**  
Deliver a self‑hosted observability stack that records LLM interactions, RAG pipelines, and user queries with full auditability while staying compliant, cost‑effective, and scalable.

**Action (A)**  

1. **Architecture** – Built on *Amazon EKS* in the EU‑Central region, using **Pydantic Logfire** as a typed log emitter that serializes events into JSON schemas.  
2. **Storage & Retention** – Logs are written to an encrypted **S3 bucket** (KMS‑managed keys) and replicated only within the same region. A lifecycle policy rolls logs to Glacier Deep Archive after 90 days, keeping storage costs <$0.01/GB/month.  
3. **Observability Pipeline** – Kafka on EKS streams logs to a *Kafka Connect* sink that pushes to an *Amazon OpenSearch* cluster (dedicated domain) for real‑time search and alerting.  
4. **Compliance & Auditing** – All data paths are VPC‑only; IAM roles enforce least privilege. A nightly audit script validates that no S3 objects have cross‑region replication or public ACLs, logging violations to a separate “compliance” topic.  
5. **Scalability & Cost** – Autoscaling EKS nodes (t4g.medium) handle 10 k requests/sec; OpenSearch is provisioned with burstable nodes for peak loads, keeping total monthly spend <$3K.

**Result (R)**  
Achieved 99.9% log ingestion latency under 200 ms, reduced storage costs by 70% vs a global S3 strategy, and passed EU‑GDPR audit in the first review cycle. The solution earned a **“Customer Obsession”** badge from AWS’s internal compliance team.

> *Bar‑raiser notes:* Ownership of data flows, deep dive into Pydantic schemas, quantifiable cost savings, learning loop: after initial mis‑configured ACLs we introduced an automated policy‑check step that now prevents future breaches.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
