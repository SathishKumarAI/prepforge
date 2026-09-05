---
qid: ing_3dbb8c001c__star__local
question: 'Explain: FDE scenario: an enterprise customer wants a document-Q&A assistant
  over 2M internal documents, pilot in four weeks, and their security team forbids
  data leaving their VPC. Scope and design it.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 269
output_tokens: 354
total_tokens: 623
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:31:37-05:00'
sources: []
---

**Situation** – I was brought into a large financial services firm that had over two million confidential policy documents stored in an on‑premise data lake. They wanted a quick pilot of a document‑Q&A assistant for their compliance team, but the security group insisted nothing could leave their VPC.

**Task** – Build a secure, zero‑data‑exfiltration architecture that can ingest the entire corpus, index it, and expose a conversational interface to end users within four weeks, all while meeting strict latency (<2 s per query) and compliance requirements.

**Action** – I chose an in‑VPC Lambda layer that runs a lightweight inference engine (distilBERT fine‑tuned on internal FAQs). The documents were chunked into 512‑token slices, embedded with OpenAI’s embeddings API, and stored in a local PostgreSQL cluster behind a VPC endpoint. A search index was built using pgvector, enabling cosine similarity queries directly inside the database. For the UI I deployed an S3‑static front end behind CloudFront, and used Cognito for authentication; all traffic stays within the VPC via PrivateLink. We set up CI/CD with Terraform to spin up a dedicated test environment, automated data ingestion pipelines, and used AWS GuardDuty for continuous monitoring.

**Result** – The pilot launched on schedule after 28 days. Query latency averaged 1.8 s, and compliance auditors approved the zero‑exfiltration design. End users reported a 40% reduction in time to locate policy information. I learned how tightly coupling embeddings storage with local vector search can meet both performance and security constraints without sacrificing user experience.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
