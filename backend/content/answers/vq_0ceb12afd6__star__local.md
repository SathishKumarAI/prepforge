---
qid: vq_0ceb12afd6__star__local
question: How to display Date in DD-MON-YYYY table?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 304
total_tokens: 542
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T21:47:39-05:00'
sources: []
---

**Situation:**  
In a legacy reporting dashboard for our retail analytics team, the sales data warehouse stored dates as TIMESTAMP values, but downstream BI tools expected them in the DD-MON-YYYY string format (e.g., “15-JUL-2024”). The mismatch caused incorrect grouping and aggregation, leading to a 12 % error spike in monthly revenue reports.

**Task:**  
I had to transform the raw timestamps into the required string format without impacting query performance or breaking existing downstream jobs.

**Action:**  
Using Oracle SQL, I created a view that leveraged `TO_CHAR` with the `'DD-MON-YYYY'` mask and set the NLS_DATE_LANGUAGE to English for consistent month abbreviations. To avoid runtime overhead on large tables, I added an indexed materialized view that pre‑computes the formatted dates. I also wrote unit tests in PL/SQL to validate formatting across all 12 months and added a cron job to refresh the materialized view nightly. Finally, I updated the ETL scripts to reference this view instead of the raw column.

**Result:**  
The new view eliminated date mismatches; monthly report accuracy improved from 88 % to 100 %. Query latency dropped by 30 % thanks to the indexed materialized view. I learned how careful formatting and pre‑computation can resolve data consistency issues while preserving performance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
