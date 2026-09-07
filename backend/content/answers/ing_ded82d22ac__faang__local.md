---
qid: ing_ded82d22ac__faang__local
question: 'Explain: Requirements — Document Intelligence Pipeline'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 494
total_tokens: 723
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:17:20-05:00'
sources: []
---

**Clarify**  
The interviewer asks for a *Document‑Intelligence Pipeline*: an end‑to‑end system that ingests raw documents (PDFs, scans, emails), extracts structured data, and delivers it to downstream analytics or search.  
Assumptions: • Documents are semi‑structured (tables, forms). • Latency ≤ 2 sec per doc for real‑time use. • Scale ≈ 10k docs/day.  

**Approach**  
1. **Ingestion** – queue + storage (S3/Blob).  
2. **Pre‑processing** – OCR (Tesseract/PaddleOCR) → clean text & layout.  
3. **Extraction** – 2‑stage model:  
   *Rule‑based NER for known fields* + *Transformer‑based table/section detector*.  
4. **Post‑processing** – validation, schema mapping, confidence scoring.  
5. **Storage** – structured DB (Cassandra/PostgreSQL) + searchable index (ElasticSearch).  
6. **Serving** – API gateway + cache for queries.

**Depth**  
- OCR: multi‑language support; use GPU inference to hit < 0.5 s per page.  
- Extraction model fine‑tuned on 20k labeled docs; F1≈0.92 on fields.  
- Confidence threshold (0.8) triggers human review queue.  
- Use microservices with Kubernetes for horizontal scaling; autoscale by CPU/latency.

**Edge Cases**  
- Low‑contrast scans → OCR fails → fallback to image enhancement.  
- Highly nested tables → recursive parser.  
- Unstructured free text → default to keyword extraction.  
- Missing fields → impute or flag as incomplete.

**Optimize & Communicate**  
- Profile bottlenecks; replace CPU‑heavy OCR with TPU if throughput drops.  
- Cache recent extractions in Redis to reduce repeated scans.  
- Document pipeline as DAG (Airflow/Argo) for observability.  
Explain trade‑offs: heavier models → higher accuracy but more cost; rule‑based fallback reduces latency. End with KPI dashboard (accuracy, latency, cost per doc).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
