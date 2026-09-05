---
qid: ing_da3b420f35__star__local
question: How do you make tables and charts in documents actually retrievable and
  answerable?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 353
total_tokens: 594
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:44:39-05:00'
sources: []
---

**Situation:**  
At my previous role, the analytics team was struggling to pull insights from quarterly reports that were shared as PDFs with embedded tables and charts. Stakeholders complained that they couldn't query specific metrics or drill into chart data without manually re‑entering numbers.

**Task:**  
I needed to transform those static documents into searchable, machine‑readable assets so that anyone could ask a question like “What was the year‑over‑year growth in region X?” and get an instant answer from the underlying data.

**Action:**  
First, I automated PDF extraction using Tesseract OCR combined with Tabula for table detection. The extracted CSVs were cleansed with Python’s Pandas—standardizing column names, handling merged cells, and converting dates to ISO format. Then I loaded the cleaned data into a lightweight SQLite database indexed on key dimensions (date, region, product). For charts, I stored the original SVG files along with metadata tags in the DB so that chart elements could be queried via their IDs. Finally, I built an internal API endpoint using FastAPI that accepted natural‑language queries and returned either table slices or chart thumbnails rendered by Matplotlib on demand.

**Result:**  
Within two weeks of deployment, report turnaround time dropped from 48 hours to under 5 minutes for most queries. Stakeholder satisfaction scores rose from 3.2/5 to 4.7/5, and the analytics team reported a 60% reduction in manual data entry errors. I learned that coupling OCR with structured storage and exposing simple query interfaces can turn static documents into dynamic knowledge bases.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
