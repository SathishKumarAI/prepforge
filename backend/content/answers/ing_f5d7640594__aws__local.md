---
qid: ing_f5d7640594__aws__local
question: 'Explain: PDF/Layout Chunking — Chunking Strategies'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 492
total_tokens: 721
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:32:39-05:00'
sources: []
---

**PDF/Layout Chunking – My Approach**

*Leadership Principles:* **Customer Obsession** (understand user needs for fast search) & **Ownership** (own end‑to‑end pipeline).

**Situation / Task**  
In my last role I built a document‑search feature for a legal‑tech SaaS. Users needed sub‑second full‑text and layout queries on millions of PDFs, but the PDFs were >200 MB each with complex tables and images.

**Action**  
1. **Chunking Strategy** – I implemented a hybrid *semantic* + *layout* splitter:  
   - *Semantic*: OCR + NER to identify logical sections (e.g., clauses).  
   - *Layout*: PDF‑miner to preserve table boundaries, producing ~2 kB chunks (~200 per doc).  
2. **AWS Stack** –  
   - `Amazon Textract` for OCR & table extraction.  
   - `Lambda@Edge` + S3 Event triggers for on‑demand chunking (cost‑effective, no idle workers).  
   - Store chunks in `DynamoDB` with a GSI on `chunk_id`.  
   - Ingest into `Amazon OpenSearch Service` for full‑text & layout queries.  
3. **Scalability** – Parallel Lambda invocations (max 10 k concurrent) handled peak loads; S3 lifecycle moved raw PDFs to Glacier after chunking.  
4. **Cost/Trade‑offs** – Using on‑demand Lambdas saved $0.20 per 100 k chunks vs reserved capacity, while Textract OCR cost was amortized by batching.

**Result**  
- Query latency dropped from 12 s → 350 ms (90% reduction).  
- Throughput increased to 5 k queries/min without SLA breaches.  
- Storage savings of 60% via Glacier tiering.  

*Bar‑raiser check:* I took full ownership, dived deep into PDF semantics, quantified impact with latency & cost metrics, and learned that a hybrid chunker outperformed pure OCR—an insight now baked into our next product sprint.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
