---
qid: vq_d7e008f23c__faang__local
question: How do you monitor ADF pipeline performance?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 456
total_tokens: 688
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:37:15-05:00'
sources: []
---

**Clarify**  
The question asks how to keep an Azure Data Factory (ADF) pipeline healthy and performant. I’ll assume we need real‑time visibility, alerting on failures or slow runs, and the ability to drill down into stages for root‑cause analysis.

**Approach**  
1. **Built‑in monitoring** – enable diagnostic logs in ADF, route them to Log Analytics/Storage.  
2. **Pipeline run metrics** – use the “Monitoring” tab or PowerShell/Azure SDK to pull run counts, durations, success rates.  
3. **Alerting** – configure Azure Monitor alerts on failure count or duration thresholds.  
4. **Custom dashboards** – build Power BI tiles from Log Analytics queries for KPI visualisation.  
5. **Automation & remediation** – use Logic Apps or Functions triggered by alerts to auto‑restart failed runs or notify ops.

**Depth**  
- **Diagnostics**: enable “ADF Diagnostic Logs” (Pipeline, Trigger, Integration Runtime).  
- **Log Analytics query example**:
  ```kusto
  ADFPipelineRuns
  | where Status == "Failed"
  | summarize Count = count() by PipelineName, ActivityName
  ```
- **Alert rule**: trigger if `Count > 5` within a 15‑minute window.  
- **Performance metrics**: capture activity duration per stage; compute percentiles (p90) to spot regressions.  
- **Cost impact**: track Integration Runtime consumption via Azure Cost Management.

**Edge Cases**  
- High‑volume pipelines may generate noisy logs—apply sampling or filter by pipeline name.  
- Long‑running activities may exceed alert thresholds but still be acceptable; tune thresholds per business need.  
- Network failures can mask true runtime; correlate with activity “ErrorMessage” for clarity.

**Optimize & Communicate**  
Iterate the dashboard layout based on stakeholder feedback, add drill‑through to raw logs for engineers. Document alert configurations in an ops playbook. This structured monitoring stack ensures proactive visibility, quick triage, and continuous performance improvement—exactly what FAANG interviewers expect.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
