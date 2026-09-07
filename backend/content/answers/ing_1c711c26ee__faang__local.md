---
qid: ing_1c711c26ee__faang__local
question: 'Document parsing at scale: PDFs, HTML, spreadsheets, email, scans. What
  breaks and how do you build for it?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 247
output_tokens: 518
total_tokens: 765
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:51:02-05:00'
sources: []
---

**Clarify**  
We need a system that ingests PDFs, HTML pages, Excel/CSV files, e‑mails, and scanned images, extracts structured data at scale, and handles failures gracefully.  
Assumptions: *high throughput (tens of thousands per day), near real‑time latency (<5 s for most docs), accuracy >95% on key fields, and the ability to recover from corrupt or malformed inputs.*

**Approach**  
1. **Ingestion layer** – message queue (Kafka) with topic per format; worker pools that pull batches.  
2. **Format dispatcher** – lightweight header/extension check → dedicated parser service.  
3. **Parser services** – stateless micro‑services exposing a gRPC API:  
   * PDFs → PDF‑to‑text + OCR fallback.  
   * HTML → DOM crawler + schema inference.  
   * Spreadsheets → column heuristics + regex extraction.  
   * Emails → MIME parsing + attachment routing.  
   * Scans → Tesseract + layout‑aware models (e.g., LayoutLM).  
4. **Post‑processing** – entity resolution, validation against domain schemas, and a retry queue for failures.  
5. **Observability** – metrics per format, failure reasons, latency dashboards.

**Depth**  
- Use *batch* OCR to amortize GPU costs; cache OCR results by hash.  
- Apply a confidence score; if below threshold, route to human‑in‑the‑loop or manual queue.  
- Complexity: O(N) per document size for text extraction; OCR is the bottleneck (~O(M×T)).  
- Trade‑off: heavier models give higher accuracy but increase cost and latency.

**Edge Cases**  
- Corrupt PDFs → fallback to pure OCR.  
- Mixed content (PDF + embedded images) → parallel streams.  
- Unsupported MIME types → log and drop with alert.  
- Extremely large files → chunking and streaming extraction.

**Optimize & Communicate**  
- Auto‑scale worker pools based on queue depth; use spot instances for cost savings.  
- Introduce a “confidence gate” to reduce false positives.  
- Present the architecture diagram, key metrics (throughput, error rate), and a rollback plan if accuracy dips.  
- Emphasize that each component is independently testable, enabling rapid iteration and fault isolation.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
