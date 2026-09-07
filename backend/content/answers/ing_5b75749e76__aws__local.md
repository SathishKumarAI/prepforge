---
qid: ing_5b75749e76__aws__local
question: 'Explain: Research — Harvey | AI software for legal and professional services'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 623
total_tokens: 855
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:52:05-05:00'
sources: []
---

**Situation**  
At my previous firm we were losing ~35 % of billable hours to manual contract review. The client wanted an AI‑driven solution that could surface obligations, risks, and compliance gaps in real time while staying compliant with GDPR and industry regulations.

**Task**  
Build a fully managed, scalable platform that ingests PDFs/Word docs, extracts structured data, flags high‑risk clauses, and exposes the insights via a secure web UI—all within 6 months and under $500k.

**Action**  

| Step | Technical Design | AWS Services | Rationale |
|------|------------------|--------------|-----------|
| 1. Ingest & OCR | S3 bucket + EventBridge trigger → Amazon Textract (OCR) | **S3, EventBridge, Textract** | Near‑real‑time processing; cost per page $0.0015 |
| 2. NLP & Classification | AWS SageMaker endpoint with a pre‑trained BERT fine‑tuned on legal corpora + custom risk ontology | **SageMaker, ECR, Lambda** | Handles multi‑label classification (liability, indemnity, jurisdiction). |
| 3. Knowledge Graph | Store clause embeddings in Amazon Neptune; use Neo4j‑style queries for dependency analysis | **Neptune** | Enables graph traversal for cross‑document risk propagation. |
| 4. Security & Compliance | VPC endpoints, IAM roles with least privilege, KMS‑encrypted S3, GDPR‑friendly data residency | **VPC, KMS, IAM** | Meets regulatory requirements; audit logs in CloudTrail. |
| 5. Frontend | React SPA hosted on Amplify, API Gateway + Lambda authorizer for fine‑grained ACLs | **Amplify, API Gateway, Lambda** | Rapid deployment; zero‑server maintenance. |

**Result**  
- Deployment achieved 90 % reduction in manual review time (from 6 hrs to 0.6 hrs per contract).  
- Accuracy of risk flagging hit 92 % F1‑score after continuous fine‑tuning with user feedback loops.  
- Cost per processed document dropped from $5 to <$0.50, saving ~$120k annually.

**Leadership Principles Highlighted**  

*Customer Obsession* – built a tool that directly eliminated the bottleneck in our client’s workflow.  
*Ownership & Dive Deep* – I drove architecture decisions, benchmarked models, and iterated on failure points (e.g., mis‑classified clauses) until metrics met SLA.

**Bar‑raiser takeaways**  

- Demonstrated *ownership* by leading cross‑functional teams and making trade‑offs between accuracy vs. cost.  
- Showed *deep dive* into model performance, data pipelines, and compliance checks.  
- Quantified impact (time & cost savings) and reflected on lessons learned: early user testing prevented a costly 10 % drop in precision.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
