---
qid: vq_d1d8057442__aws__local
question: What is query to fetch last day of previous month in oracle?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 509
total_tokens: 742
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:15:53-05:00'
sources: []
---

**Behavioral (STAR)**  
*Situation*: In a production data‑warehouse on AWS Glue / Redshift we had to generate daily ETL jobs that snapshot the previous month’s sales. The job failed because the date logic was wrong, causing a 30 % delay in downstream reporting.  
*Task*: Fix the query and automate it so the pipeline runs reliably every day without manual intervention.  
*Action*: I rewrote the Oracle SQL to use `TRUNC` + `ADD_MONTHS` + `LAST_DAY`, added unit tests in Glue, and scheduled via CloudWatch Events.  
*Result*: The job now completes 25 % faster, reduces daily data lag from 3 h to < 30 min, and cut manual ticket volume by 80 %. I documented the change in Confluence and shared a quick‑start guide with the team.

**Technical / System Design**  
```sql
-- Oracle: last day of previous month relative to current date
SELECT LAST_DAY(ADD_MONTHS(TRUNC(SYSDATE, 'MM'), -1)) AS prev_month_last_day
FROM dual;
```
*Why this works*: `TRUNC(SYSDATE,'MM')` gives the first day of the current month. Subtracting one month (`-1`) moves to the previous month’s first day; `LAST_DAY` then returns its last calendar day.

**AWS Services & Trade‑offs**  
- *Glue / Redshift*: Execute this query in a nightly ETL job; low cost and fully managed.  
- *CloudWatch Events + Lambda*: Trigger Glue job; provides 100 % availability with minimal latency.  
- *Cost*: < $0.05 per run (Glue crawler + job).  

**Bar‑raiser notes**  
- Ownership: I owned the end‑to‑end fix and documentation.  
- Dive Deep: I traced the failure to a subtle date miscalculation.  
- Quantified Impact: 25 % faster jobs, 80 % fewer tickets.  
- Learning from Failure: Added automated tests for date logic to prevent regressions.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
