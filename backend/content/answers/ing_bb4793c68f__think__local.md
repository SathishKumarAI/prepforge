---
qid: ing_bb4793c68f__think__local
question: 'Explain: A customer wants structured fields extracted from 10 million scanned
  documents with LLMs. Sketch the pipeline and the cost/latency math.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 208
output_tokens: 623
total_tokens: 831
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T13:18:42-05:00'
sources: []
---

**1️⃣ Clarify & set assumptions**  
- *Document type*: PDFs/images → OCR needed first.  
- *Fields*: e.g., name, address, invoice number – fixed schema.  
- *Accuracy target*: ≥ 95 % F1.  
- *Throughput*: 10 M docs in ~30 days (≈ 115 docs/sec).  
- *Cost drivers*: OCR engine, LLM inference per doc, storage, networking.

**2️⃣ Mental model / framework**  
Use a **pipeline of stages**:  
1. Ingestion → storage & metadata tagging.  
2. OCR → text extraction.  
3. Pre‑processing (layout parsing).  
4. LLM prompt + inference → field extraction.  
5. Post‑processing & validation.  

Treat each stage as an *independent cost/latency block* that can be parallelized.

**3️⃣ Step‑by‑step reasoning**

| Stage | Ops per doc | Avg latency (ms) | Cost driver |
|-------|-------------|------------------|------------|
| OCR (e.g., AWS Textract) | 1 call | 200 ms | $0.0015/1000 pages |
| LLM inference (gpt‑4o) | 1 prompt | 500 ms | $0.01/token * ~300 tokens = $3/doc |
| Post‑process & DB write | 1 op | 50 ms | negligible |

*Latency*: \(200+500+50 ≈ 750\) ms per doc → 115 docs/sec achievable with 150 parallel workers.

*Cost*:  
- OCR: \(10^7 \times \$0.0015/1000 = \$15{,}000\).  
- LLM: \(10^7 \times \$3 = \$30{,}000{,}000\).  
- Storage/network ~\$2 M.  
Total ≈ **$32 M** for the batch.

**4️⃣ Common traps to avoid**

- Under‑estimating token count → cost spike.  
- Ignoring layout‑aware OCR errors that propagate to LLM.  
- Assuming single‑threaded inference; you’ll need GPU clusters or serverless burst capacity.  
- Overlooking validation step – a 5 % error rate can be expensive downstream.

**5️⃣ Sanity‑check & verbalize**

- Verify per‑doc cost against budget: $3 is high; consider cheaper LLMs or prompt compression.  
- Confirm throughput: \(115 \text{ docs/sec} × 86400 ≈ 10M\) in 24 h, but add buffer for retries → 30 days target OK.  
- Communicate the trade‑off: higher accuracy ↔ higher cost/latency; propose a pilot with 100k docs to calibrate.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
