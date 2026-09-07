---
qid: ing_bb4793c68f__faang__local
question: 'Explain: A customer wants structured fields extracted from 10 million scanned
  documents with LLMs. Sketch the pipeline and the cost/latency math.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 252
output_tokens: 575
total_tokens: 827
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:58:25-05:00'
sources: []
---

**Clarify**  
The client has ~10 M scanned PDFs (≈ 50 MB each) and wants to pull a fixed set of fields (e.g., invoice number, date, total). We need a batch pipeline that outputs JSON records with < 2 s per doc latency for downstream analytics. Assumptions: OCR quality ≈ 90 %, documents are mostly text‑heavy, we have on‑prem GPU cluster or managed cloud.

**Approach**  
1. **Ingestion & chunking** – split PDFs into pages; store as JPEG/PNG in object storage (S3).  
2. **OCR** – use a high‑throughput engine (Tesseract + LSTM or Google Vision) to get raw text and bounding boxes.  
3. **LLM extraction** – feed each page’s OCR output to a fine‑tuned LLM (e.g., GPT‑4o or an open‑source model on GPU). Prompt template pulls the target fields.  
4. **Post‑process & aggregation** – merge per‑page results, resolve conflicts, and write structured JSON to BigQuery/Firestore.  
5. **Monitoring** – track OCR confidence, LLM token usage, and latency.

**Depth**  
- *Throughput*: 10 M docs / 1 month ≈ 385 k/day → 12 k/sec.  
- *OCR cost*: $0.00001/char → ~\$5k/month.  
- *LLM* (GPT‑4o, 100 tokens/doc) → \$0.03 per 1K tokens → \$30k/month.  
- *Latency*: OCR ≈ 200 ms/page; LLM inference ≈ 400 ms on a single GPU; pipeline parallelism reduces to ~2 s total per doc.  
- *Scalability*: Use Kubernetes autoscaling or serverless functions for burst spikes.

**Edge Cases**  
- Poor scan quality → fallback OCR (Tesseract) and manual review queue.  
- Multi‑language documents → add language detection step.  
- Extremely long invoices (> 50 pages) may exceed token limits; chunk by logical sections.

**Optimize & Communicate**  
- Cache repeated field patterns to reduce LLM prompt size.  
- Distill the LLM into a smaller model (e.g., distilBERT fine‑tuned on extraction) for 3× cheaper inference.  
- Present ROI: compare manual extraction ($200k/yr) vs. automated pipeline ($35k/yr).  
- Communicate trade‑offs clearly: higher accuracy → more expensive LLM; lower cost → more manual QA.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
