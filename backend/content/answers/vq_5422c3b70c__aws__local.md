---
qid: vq_5422c3b70c__aws__local
question: Schedule Trigger in ADF?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 226
output_tokens: 533
total_tokens: 759
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:51:54-05:00'
sources: []
---

**Situation (S)**  
At my previous role I led a migration of the nightly ETL pipeline from an on‑prem Hadoop cluster to **Azure Data Factory (ADF)**. The existing cron job processed ~3 TB of transactional logs every night, but we hit reliability issues: 12 % of runs failed due to missing trigger schedules and manual restarts.

**Task (T)**  
I was tasked with designing a robust, self‑healing schedule that guarantees the pipeline starts at the correct time, retries on failure, and reports status to our ops team—while keeping cost < $200/month.

**Action (A)**  
1. **Create an ADF Trigger:** I defined a *Schedule Trigger* with a 00:05 UTC start time, daily frequency, and added a *Retry Policy* (maxRetries=3, intervalInSeconds=300).  
2. **Add Dependency & Alerts:** Connected the trigger to a *Data Flow* that ingests logs; attached an Azure Monitor alert on `TriggerFailed` events, forwarding to PagerDuty.  
3. **Cost/Scaling Optimisation:** Leveraged *Azure Data Factory’s* *Integration Runtime* with self‑managed compute (2 DPU) and autoscale disabled because the workload is deterministic nightly.  
4. **Observability:** Exported trigger run metrics to Application Insights; built a Power BI dashboard showing success/failure trends.

**Result (R)**  
- 100 % on‑time execution for 90 consecutive days.  
- Failure rate dropped from 12 % to < 0.5 %.  
- Operational cost reduced by 35 % vs the previous cron‑based system.  

---

### Leadership Principles Anchored
- **Ownership** – I took full responsibility for end‑to‑end reliability and cost.  
- **Dive Deep** – Analyzed failure logs, tuned retry logic, and quantified impact on SLA.

### What a Bar‑Raiser Looks For
- Demonstrated ownership of the entire pipeline lifecycle.  
- Quantified improvements (e.g., 0.5 % failure rate).  
- Showed deep technical understanding of ADF triggers, Azure monitoring, and cost optimisation.  

> *Note:* In AWS we’d use **EventBridge** + **Step Functions** with CloudWatch alarms, but the design principles remain identical.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
