---
qid: ing_7cd0e24172__star__local
question: 'Q: How would you handle a query that requires information from BOTH a chart
  and a table on different pages?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 247
output_tokens: 324
total_tokens: 571
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:43:13-05:00'
sources: []
---

**Situation** – While working on a quarterly business review for a fintech client, I received a stakeholder request to compare the projected user growth chart (on page 3 of the report) with the actual churn table (page 8). The PDF was locked and the data had never been extracted before.

**Task** – My goal was to combine the two datasets into a single interactive dashboard so the executive team could see both projections and real figures side‑by‑side, within 48 hours for an upcoming board meeting.

**Action** – I used `pdfplumber` to pull the chart image and applied OCR with Tesseract to recover the plotted values. For the table, I parsed the PDF into a CSV via `tabula-py`. After cleaning missing entries in Pandas, I merged the datasets on the user segment key. Then I built a quick Streamlit app that rendered the merged data as a dual‑axis line chart and an editable pivot table, allowing drill‑downs by region.

**Result** – The dashboard was delivered ahead of schedule; the board used it to approve a revised churn mitigation plan that cut projected losses by 12 % next quarter. I learned how to quickly bridge disparate PDF sources using open‑source tools and deliver actionable insights under tight deadlines.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
