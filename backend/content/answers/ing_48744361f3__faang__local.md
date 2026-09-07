---
qid: ing_48744361f3__faang__local
question: The customer's "documents" turn out to be scanned PDFs, Excel exports with
  merged cells, and a 15-year-old SharePoint. The pilot assumed clean text. What do
  you do?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 260
output_tokens: 493
total_tokens: 753
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:32:22-05:00'
sources: []
---

**Clarify**  
The problem: an AI‑powered document ingestion pipeline that was built for clean, machine‑readable PDFs now receives heterogeneous inputs—scanned PDFs (no OCR), Excel files with merged cells (lossy data layout), and legacy SharePoint documents (possible metadata corruption). I’d confirm the exact formats, volume, and business goal (e.g., extract entities or build a knowledge graph).

**Approach**  
1. **Data profiling**: Sample each source to quantify OCR‑needed PDFs, Excel cell‑merge frequency, and SharePoint schema drift.  
2. **Pre‑processing layer**:  
   - *Scanned PDFs*: Integrate an OCR engine (Tesseract/Google Vision) with confidence thresholds.  
   - *Excel*: Flatten merged cells into a canonical tabular form; preserve headers via heuristics.  
   - *SharePoint*: Migrate to a modern content‑management API or export JSON, normalizing metadata.  
3. **Pipeline orchestration**: Use Airflow/Dagster to run source‑specific adapters before the shared AI inference step.  
4. **Fallback & human‑in‑the‑loop**: Flag low‑confidence cases for manual review.

**Depth**  
- OCR runtime ≈ 0.5 s per page; batch in parallel, cost ~O(n).  
- Excel flattening is O(rows×cols) with a small constant.  
- SharePoint migration costs depend on API limits but can be throttled.  
Trade‑offs: Adding OCR increases latency and cost; we mitigate by caching results.

**Edge Cases**  
- Extremely low‑resolution scans → poor OCR accuracy.  
- Nested merged cells in Excel leading to data loss.  
- Obsolete SharePoint columns missing expected metadata.  
Testing: unit tests for flattening, integration tests with sample PDFs, load tests on the OCR queue.

**Optimize & Communicate**  
I’d iterate on confidence thresholds, cache OCR outputs, and use a lightweight ML model to predict when OCR is needed (e.g., detect text presence). I’ll present the plan in a concise slide deck: problem statement → data profiling insights → modular pipeline diagram → cost/latency estimates. This showcases structured thinking, technical depth, and a clear communication strategy expected from FAANG interviewers.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
