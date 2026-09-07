---
qid: ing_7cd0e24172__aws__local
question: 'Q: How would you handle a query that requires information from BOTH a chart
  and a table on different pages?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 430
total_tokens: 671
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:07:16-05:00'
sources: []
---

**Situation:**  
While building a data‑science portal for a retail client, a user asked for the “average spend per customer in Q3 *and* the corresponding conversion rate from the marketing campaign”. The spend figure lived on a chart page (PDF) while the conversion rate was in an HTML table on another page.

**Task:**  
Provide a single, instant answer without forcing the user to download and merge two files.

**Action:**  
1. **Own the data pipeline** – I scoped the requirement, mapped the source formats, and drafted an AWS‑centric solution.  
2. **Extract & unify** – Used **AWS Glue** with a crawler to parse PDFs (chart) via *PyMuPDF* and HTML tables via *BeautifulSoup*. The crawler created two Athena tables (`spend_q3`, `conversion_rate`).  
3. **Query engine** – Created an AWS Lambda that runs a single SQL query in Athena:  

   ```sql
   SELECT s.avg_spend, c.conv_rate
   FROM spend_q3 s
   JOIN conversion_rate c ON s.year = c.year AND s.quarter = c.quarter;
   ```
4. **Deliver results** – The Lambda returns JSON to an API Gateway endpoint the portal consumes; users see a combined card instantly.

**Result:**  
- Query latency dropped from 45 s (manual download) to <2 s.  
- User satisfaction score rose 18% in post‑deployment survey.  
- Cost savings: Glue ETL ran once per day, $0.12/day vs. manual effort of ~4 hrs/week.

**Reflection:**  
I *dive deep* into format quirks (PDF text extraction errors) and built retry logic for flaky tables. The bar‑raiser will note my ownership of the end‑to‑end flow, data‑driven impact, and iterative learning from initial extraction failures.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
