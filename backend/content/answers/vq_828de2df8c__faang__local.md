---
qid: vq_828de2df8c__faang__local
question: How do you monitor and debug ADF pipelines?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 596
total_tokens: 829
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:19:55-05:00'
sources: []
---

**Clarify**

> *Question:* “How do you monitor and debug Azure Data Factory (ADF) pipelines?”  
> *Assumptions I’d confirm:*  
> • The pipeline uses built‑in activities (Copy, Data Flow, Custom).  
> • You have access to the ADF portal, monitoring APIs, and log analytics.  
> • Real‑time alerts are required for production workloads.

**Approach**

1. **Centralized Monitoring** – enable diagnostic logs → Log Analytics / Event Hub.  
2. **Pipeline‑level health** – use the *Monitoring* tab: status, run counts, duration.  
3. **Activity‑level insight** – drill into each activity’s output, error messages, and metrics.  
4. **Alerting** – create alerts on failed runs or SLA breaches (via Azure Monitor).  
5. **Debugging** – replay runs with *debug mode*, use `GetPipelineRun` API to fetch raw logs, and inspect data flow diagnostics.

**Depth**

| Tool | What it shows | Typical use |
|------|---------------|-------------|
| **ADF Monitoring UI** | Run status, start/finish times, errors | Quick triage of failures |
| **Activity output pane** | Input/Output JSON, error codes | Pinpoint faulty data or schema mismatches |
| **Diagnostic logs (Log Analytics)** | Structured logs (activityRun, pipelineRun) | Correlate across pipelines, run queries for patterns |
| **Azure Monitor alerts** | Threshold‑based notifications | Auto‑alert on >5% failure rate |
| **Debug mode / Replay** | Re-execute with same parameters | Isolate intermittent issues without reprocessing entire dataset |

Complexity: O(1) per activity log fetch; overall monitoring scales linearly with pipeline runs. Trade‑off is cost of Log Analytics storage vs. richer analytics.

**Edge Cases**

* No logs enabled → first step to enable diagnostics.  
* Long‑running data flows may timeout – inspect *activityRun* duration > 24 h.  
* Missing output schema → error code `InvalidSchema`.  
* Network or gateway failures → check integration runtime health metrics.

**Optimize & Communicate**

- **Batch log queries**: use Kusto to aggregate failures per hour, reducing API calls.  
- **Custom dashboards**: Power BI linked to Log Analytics for SLA visualisation.  
- **Narrative**: “I first ensured diagnostics were routed to a central workspace, then leveraged the ADF monitoring UI for surface‑level status, and finally drilled into activity logs via the REST API for root‑cause analysis.”  

This structured flow demonstrates clear problem definition, systematic tooling, depth of technical insight, edge‑case awareness, and concise communication—key FAANG interview signals.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
