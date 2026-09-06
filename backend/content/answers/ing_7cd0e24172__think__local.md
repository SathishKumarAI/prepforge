---
qid: ing_7cd0e24172__think__local
question: 'Q: How would you handle a query that requires information from BOTH a chart
  and a table on different pages?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 200
output_tokens: 408
total_tokens: 608
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T09:15:34-05:00'
sources: []
---

**1️⃣ Clarify the ask & set assumptions**  
*Identify what “both” means*: is it data that must be combined or cross‑referenced? Assume the chart and table are on separate PDF/HTML pages but share a common key (e.g., year, product). Note any missing metadata (units, date ranges).

**2️⃣ Build a mental model of multi‑source fusion**  
Think of the task as *data extraction → alignment → synthesis*. Treat each source like a mini‑database: the chart gives visual trends, the table supplies exact figures. The goal is to merge them into one coherent answer.

**3️⃣ Step‑by‑step reasoning**  
a. Extract numeric values from the chart (via OCR or chart‑parsing libraries).  
b. Parse the table rows/columns into a structured format.  
c. Identify the linking key and align rows—use fuzzy matching if labels differ slightly.  
d. Combine the matched records: e.g., overlay chart trend lines with table totals.  
e. Generate an explanation that references both sources (e.g., “According to the line chart, sales grew 5 % in Q2; the table confirms a $1M increase”).

**4️⃣ Avoid common traps**  
- Don’t assume perfect label matches; handle synonyms or abbreviations.  
- Beware of page‑numbering shifts if documents are paginated differently.  
- Don’t ignore units—chart might be in percentages, table in absolute numbers.

**5️⃣ Sanity‑check & verbalize the process**  
Run a quick spot‑check: pick one key (e.g., 2023 revenue) and confirm that the chart’s trend point aligns with the table value. Then explain the workflow aloud or in writing, ensuring each step is justified and transparent. This makes the reasoning reproducible for future similar queries.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
