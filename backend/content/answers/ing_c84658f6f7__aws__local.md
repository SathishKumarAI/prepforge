---
qid: ing_c84658f6f7__aws__local
question: 'Q9: How would you handle documents with tables, charts, and images?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 527
total_tokens: 762
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:55:00-05:00'
sources: []
---

**Situation / Task**  
In a prior role I led the migration of our legacy legal‑document repository (≈ 50 TB) to an AI‑driven search platform that had to parse tables, charts and images for compliance audits.

**Action**  
I architected a serverless pipeline on AWS:

| Step | Service | Reason |
|------|---------|--------|
| Ingest & dedupe | **S3 + S3 Event** | Highly available storage; triggers processing. |
| OCR & table extraction | **Amazon Textract (Document/Text)** | Extracts text, tables, charts in a single pass; supports multi‑page PDFs. |
| Image classification | **Amazon Rekognition** | Detects logos/diagrams to preserve semantic context. |
| NLP summarisation | **AWS Comprehend + Lambda** | Generates entity tags for quick search. |
| Orchestration | **Step Functions** | Guarantees idempotent, fault‑tolerant flows; retries on transient failures. |
| Indexing | **OpenSearch Service** | Low‑latency full‑text & structured queries. |

I added a **custom Python Lambda** to post‑process Textract’s table JSON into relational format and used DynamoDB for metadata caching. The entire stack runs on **pay‑as‑you‑go**, keeping cost below $0.02 per document processed.

**Result**  
Processing throughput increased from 10 docs/hr to 2,500 docs/hr (250×). Search recall rose from 82% to 96%. User satisfaction (NPS) improved from 55 to 78. I also documented failure modes and introduced a “retry‑on‑schema‑mismatch” rule, reducing downstream errors by 40%.

**Leadership Principles Reflected**  
- **Customer Obsession**: Delivered a faster, more accurate search that cut audit time by 60%.  
- **Ownership / Dive Deep**: Built the end‑to‑end pipeline, profiled bottlenecks, and iterated on failure cases.

**Bar‑raiser Takeaway**  
I showed deep technical ownership, quantified impact with real metrics, and learned from early failures to harden the system—exactly what Amazon expects.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
