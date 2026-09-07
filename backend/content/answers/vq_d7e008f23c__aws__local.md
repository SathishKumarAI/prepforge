---
qid: vq_d7e008f23c__aws__local
question: How do you monitor ADF pipeline performance?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 458
total_tokens: 687
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:17:16-05:00'
sources: []
---

**Situation & Task**  
At my last role I led a data‑engineering team that orchestrated ~200 Azure Data Factory (ADF) pipelines delivering nightly ETL for our product analytics platform. The SLA required 99.5 % pipeline success and <30 min runtime, but we were hitting 45 % failures during peak traffic.

**Action**  
I took full ownership:  

1. **Instrumentation** – Enabled *ADF diagnostics logs* to Azure Monitor Logs and created a custom **Azure Log Analytics workspace**. I added *pipeline run*, *activity run*, and *trigger run* metrics to the log schema.  
2. **Alerting & Dashboards** – Built Power BI dashboards (real‑time via DirectQuery) that surface failure rates, average runtime per activity type, and queue depth for each trigger. Configured Azure Monitor alerts (threshold + anomaly detection) that fire an email/Teams notification when success < 99 % or mean latency > 25 min.  
3. **Root‑cause analysis** – Leveraged *ADF run history* and *pipeline dependency graph* to pinpoint slow activities. Added retry logic with exponential back‑off for transient failures (Bias for Action).  
4. **Continuous improvement loop** – Instituted a weekly “Pipeline Health” review meeting; each pipeline gets a health score based on uptime, latency, and cost. I automated the score calculation in an Azure Function that updates a SQL Data Warehouse table.

**Result**  
Within 6 weeks:  

- Success rate rose from **55 % to 99.8 %**.  
- Mean runtime dropped from **45 min to 18 min** (cost savings ~$12k/month).  
- Alert‑to‑resolution time decreased from **4 hrs to 30 min**.

The bar‑raiser will note my *ownership* of the end‑to‑end monitoring stack, the *deep dive* into metrics and architecture, the *quantified impact*, and that I learned from the initial failure by iterating on alerts and retries.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
