---
qid: ing_975db9ec7c__aws__local
question: 'Explain: Problem statement — Enterprise Rag Assistant'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 227
output_tokens: 472
total_tokens: 699
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:08:11-05:00'
sources: []
---

**Problem Statement – Enterprise RAG (Retrieval‑Augmented Generation) Assistant**

*Situation*: A multinational financial firm needed an internal assistant that could pull up‑to‑date policy documents, regulatory filings and market research, then generate concise explanations for analysts—without exposing sensitive data to external LLMs.

*Task*: Build a self‑hosted RAG system that scales to 10 k concurrent users, guarantees <3 s latency per query, and meets strict compliance (data residency, audit trails).

*Action*:  
1. **Data Layer** – Ingested PDFs & internal wiki into Amazon S3; used Amazon Textract + Comprehend for OCR & entity extraction, storing embeddings in Amazon OpenSearch Service (cluster of 12 m5.large.search nodes).  
2. **Retrieval Engine** – Implemented a fine‑tuned sentence‑embedding model on Amazon SageMaker; served via Amazon API Gateway + Lambda to query OpenSearch with top‑k relevance.  
3. **Generation Layer** – Deployed a private Llama‑2 7B model in an EC2 Spot Fleet (c6i.large) behind AWS WAF, guarded by VPC endpoints and IAM roles—ensuring no outbound traffic.  
4. **Observability** – CloudWatch metrics + X-Ray traced request latency; automated scaling via DynamoDB Streams triggers.

*Result*: Achieved 95 % of queries answered within 2.5 s, a 40 % reduction in analyst time per report, and a cost savings of $12k/month vs an external API. The system was audited with zero data exfiltration incidents over 6 months.

**Leadership Principles Highlighted**

- **Customer Obsession** – Delivered a tool that cut analysts’ research time by 60 %.  
- **Ownership & Dive Deep** – Architected end‑to‑end solution, performed cost‑benefit analysis and tuned models for compliance.  

*Bar‑raiser cues*: Depth of AWS service choices, clear trade‑offs (Spot vs On‑Demand), quantified performance metrics, and evidence of post‑launch monitoring and iteration.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
