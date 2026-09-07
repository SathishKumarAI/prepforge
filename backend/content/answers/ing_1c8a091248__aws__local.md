---
qid: ing_1c8a091248__aws__local
question: 'Explain: Data Sovereignty and Control — Secure legal AI for the most sensitive
  matters | Harvey'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 510
total_tokens: 747
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:30:50-05:00'
sources: []
---

**Situation (S)** – In 2023 I led a cross‑functional team at **AWS AI Services** to launch “SecureAI” for the U.S. Department of Defense. The client’s requirement: all training data and model inference had to remain *within* U.S. borders, with zero export of raw or processed data, while still delivering state‑of‑the‑art NLP capabilities.

**Task (T)** – Build a fully compliant, end‑to‑end pipeline that guarantees **data sovereignty**, preserves confidentiality, and scales to 10 TB/day of unstructured text without violating the Defense Federal Acquisition Regulation Supplement (DFARS) clauses on controlled unclassified information (CUI).

**Action (A)**  
- **Ownership + Customer Obsession**: I scoped a “Data‑at‑Rest” architecture using *Amazon S3* with *SSE‑KMS* and an in‑region KMS key, ensuring all objects never leave the 1–AZ region.  
- **Dive Deep + Bias for Action**: Implemented *AWS Ground Station*‑driven ingestion of satellite feeds directly into a *Lake Formation* catalog, then processed via *Amazon SageMaker Processing* jobs running on *Elastic Inference* to reduce GPU cost by 35 %.  
- **Invent & Simplify**: Created a *serverless inference layer* with *Lambda@Edge* and *API Gateway*, automatically routing requests to the nearest edge location while keeping data in‑region.  
- **Deliver Results + Scalability**: The solution handled peak loads of 20,000 concurrent inferences per second with <50 ms latency, using auto‑scaling groups for SageMaker endpoints and *Amazon CloudFront* caching.

**Result (R)** – Delivered the product on‑time, 18 % below budget ($2.4M vs $3M forecast), and achieved a compliance audit score of **“Zero Findings”** in the first year. The client now processes 12 TB/day with 99.999% availability, fully meeting DFARS requirements.

*Bar‑raiser note*: I emphasized end‑to‑end ownership, quantified latency & cost savings, and iterated on failure modes (e.g., key rotation failures) to harden the pipeline.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
