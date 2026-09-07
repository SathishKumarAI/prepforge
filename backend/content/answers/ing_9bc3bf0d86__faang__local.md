---
qid: ing_9bc3bf0d86__faang__local
question: Design a document-extraction system. When do you use an OCR pipeline versus
  sending pages to a VLM?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 491
total_tokens: 735
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:46:20-05:00'
sources: []
---

**Clarify**  
We’re building a “document‑extraction” service that returns structured data (tables, key/value pairs, etc.) from scanned PDFs or images. The choice is between a classic OCR pipeline (Tesseract + layout analysis) and a Vision‑Language Model (VLM) like GPT‑4o/Vision or Llama‑Vision.  
Key assumptions to confirm:  

1. Input modality (image vs PDF with embedded text).  
2. Desired output format (JSON, CSV, etc.).  
3. Volume & latency constraints.  
4. Accuracy thresholds for OCR‑only vs VLM‑based extraction.

**Approach**  
1. **Detect if the document already contains searchable text** → skip OCR.  
2. If not, run a *fast* OCR + layout pipeline to get baseline bounding boxes and raw strings.  
3. Feed the OCR result into a lightweight rule‑engine for tables/key‑values.  
4. Only when the OCR confidence is low or the document has complex layouts (e.g., multi‑column, hand‑written annotations) do we forward the image to a VLM for end‑to‑end extraction.

**Depth**  
- **OCR pipeline**: Tesseract + PDFMiner → O(n) time; memory ~O(bbox count).  
- **VLM**: single API call (≈200 ms per page), but cost ~$0.02/page and higher latency.  
- Accuracy trade‑off: OCR ≈ 95% for printed text, VLM ≈ 98–99% for mixed layouts/handwriting.

**Edge Cases**  
- Highly degraded scans → both pipelines fail; need a fallback to manual review.  
- Multi‑language documents → ensure OCR supports all scripts or route to multilingual VLM.  
- Very large PDFs → split into pages, parallelize OCR, batch VLM calls.

**Optimize & Communicate**  
Start with the cheap OCR path and only “pay for performance” when needed. I’d present this decision tree in a diagram, justify cost/latency numbers, and note that adding a confidence threshold lets us auto‑switch to VLM without human intervention. This balances throughput, cost, and extraction quality—exactly what FAANG interviewers expect.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
