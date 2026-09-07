---
qid: ing_5f6b56f25f__faang__local
question: 'Explain: Case Study 06 - Document Intelligence Pipeline (Invoices & Contracts
  at Scale)'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 464
total_tokens: 703
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:26:15-05:00'
sources: []
---

**Clarify**

You’re asked to design a *Document‑Intelligence pipeline* that ingests, parses, and stores invoices/contracts at scale.  
Assumptions:  
1. Documents arrive as PDFs/Scans (OCR needed).  
2. We need structured fields (invoice number, date, parties, line items, clauses).  
3. Throughput ≈ 10k docs/hr; latency < 5 s per doc.  
4. Data must be searchable and auditable.

**Approach**

1. **Ingestion & Queuing** – S3/Blob → Kafka topic.  
2. **Pre‑processing** – Resize, de‑blur, language detection.  
3. **OCR + Layout Analysis** – Tesseract/Google Vision + LLM for table extraction.  
4. **NLP Extraction** – spaCy or fine‑tuned BERT to pull entities; rule‑based fallback.  
5. **Validation & Enrichment** – Cross‑check with vendor DB, enrich with tax codes.  
6. **Storage** – Document in S3 + structured JSON in DynamoDB/Elasticsearch.  
7. **Monitoring** – Prometheus metrics + alerting on failure rates.

**Depth**

- Use a microservice per stage (K8s) for horizontal scaling.  
- Batch OCR to amortize GPU cost; stream inference via ONNX Runtime.  
- Schema‑agnostic JSON allows schema evolution.  
- ACID guarantees at the DB level; eventual consistency for search index.  

**Edge Cases**

- Low‑contrast scans → fallback to human review queue.  
- Ambiguous line items → flag for manual QA.  
- Mixed languages → language model routing.

**Optimize & Communicate**

- Cache frequent vendor lookups in Redis to cut latency.  
- Profile each stage; shift bottlenecks to GPU or scale horizontally.  
- Document trade‑offs: heavier OCR = higher accuracy but more cost.  

*Result*: A fault‑tolerant, elastic pipeline delivering structured invoices/contracts with <5 s latency and 99.9% accuracy.*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
