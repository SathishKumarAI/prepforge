---
qid: ing_00074dfcfb__star__local
question: 'Explain: Table Extraction and Structured Data Retrieval'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 315
total_tokens: 548
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:28:39-05:00'
sources: []
---

**Situation:** While working on a fintech client’s quarterly reporting tool, the legacy PDF invoices were full of hand‑written tables that our automated dashboards couldn’t parse. The finance team needed clean CSVs to feed their KPI calculations.

**Task:** I had to build an end‑to‑end pipeline that could reliably extract tabular data from scanned PDFs and output structured JSON/CSV for downstream analytics, all within a 4‑week sprint.

**Action:** First, I prototyped a layout‑aware OCR model using Google Vision’s Document AI, fine‑tuned on 200 annotated invoice samples. To preserve column integrity, I added a rule‑based post‑processing step that detected grid lines and corrected misaligned cells with OpenCV contour analysis. For robustness, I wrapped the extraction in an Airflow DAG that logged confidence scores; low‑confidence tables were flagged for manual review. Finally, I exposed the output via a REST endpoint built on FastAPI, returning JSON keyed by invoice ID.

**Result:** The new pipeline reduced data entry time from 3 hours per batch to under 15 minutes and increased extraction accuracy to 97 % (up from 68 %). The finance team reported a 40 % faster KPI cycle and I learned how to blend ML with classic image processing for reliable structured data retrieval.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
