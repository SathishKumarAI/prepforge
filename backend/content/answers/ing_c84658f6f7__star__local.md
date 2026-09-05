---
qid: ing_c84658f6f7__star__local
question: 'Q9: How would you handle documents with tables, charts, and images?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 317
total_tokens: 558
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:10:08-05:00'
sources: []
---

**Situation:** In my last role at a legal tech startup, we were building an NLP pipeline to extract case facts from court filings. A key requirement was that the system handle PDFs containing dense tables, embedded charts, and scanned images of handwritten notes.

**Task:** I had to design a robust extraction workflow that could accurately parse structured data from tables, interpret chart metrics, and OCR text from images—all while maintaining throughput for 10,000 documents per day.

**Action:** First, I integrated Tabula-Py to detect and convert PDF tables into CSVs, then applied pandas to clean and normalise column headers. For charts, I used matplotlib’s `pyplot` to capture the SVG export of embedded chart objects, followed by a custom rule‑based parser that mapped axis labels to numeric values. Image OCR was handled with Tesseract, augmented by a pre‑processing pipeline (deskewing, contrast enhancement) in OpenCV to improve accuracy. I wrapped each step in Airflow DAGs, added retry logic, and logged extraction confidence scores for downstream QA.

**Result:** The end‑to‑end system achieved 92 % table extraction precision and 88 % OCR accuracy, cutting manual review time by 70 %. I learned that combining domain‑specific libraries with a workflow orchestrator can turn complex document types into clean structured data at scale.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
