---
qid: vq_828de2df8c__aws__local
question: How do you monitor and debug ADF pipelines?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 484
total_tokens: 714
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:00:57-05:00'
sources: []
---

**Situation & Task** – In my last role I led a team that migrated 4 TB of nightly ETL jobs from on‑prem to **Azure Data Factory (ADF)**. The business required zero‑downtime, real‑time visibility and the ability to auto‑failover to an alternate data lake.

**Action** –  
1. **Centralized telemetry**: Enabled *Diagnostic settings* for every pipeline, sending activity logs to **Azure Monitor Logs** and metrics to **Application Insights**.  
2. **Custom dashboards**: Built Power BI dashboards that surface run‑time latency, success rates, and data volume per pipeline.  
3. **Alerting & automation**: Created Azure Logic Apps that trigger on `PipelineFailed` events; the logic app queries the run history, extracts error details, auto‑retries the failed activity (max 3 times), and posts a Slack notification with the stack trace.  
4. **Root‑cause analysis** – Used *ADF pipeline run history* to drill into each activity’s input/output JSON, correlating it with Azure Storage metrics (throughput, IOPS) via Log Analytics queries.  

**Result** – Reduced mean time to recover from 45 min to < 5 min, increased pipeline success rate from **92 % → 99.7 %**, and cut manual triage effort by **70 %**.

---

### Leadership Principles

- **Customer Obsession** – Delivered instant visibility for business users; SLA improved dramatically.  
- **Ownership** – Built end‑to‑end monitoring, automated remediation, and documented the playbook for future teams.

*Bar‑raiser cue:* I dug into the diagnostic logs to identify a hidden `Timeout` in a linked service’s connection string—an example of “Dive Deep.” The quantified impact (time saved) and the learning loop (automated retry logic) show true ownership.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
