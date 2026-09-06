---
qid: vq_d7e008f23c__think__local
question: How do you monitor ADF pipeline performance?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 188
output_tokens: 515
total_tokens: 703
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T02:29:18-05:00'
sources: []
---

**1️⃣ Clarify the scope & assumptions**  
- Assume *Azure Data Factory (ADF)* is in use, not Synapse Pipelines.  
- “Performance” means execution time, success/failure rates, and resource utilization.  
- The audience has basic ADF knowledge but needs concrete monitoring tactics.

**2️⃣ Adopt a 3‑layer mental model**  
- **Pipeline level:** overall run metrics (duration, status).  
- **Activity level:** individual steps (copy, data flow, custom activities).  
- **Resource level:** underlying compute (integration runtime, Spark pool).  

Use Azure Monitor + Log Analytics as the backbone, with ADF‑specific insights.

**3️⃣ Step‑by‑step reasoning**

1. **Enable diagnostic logs** in the ADF resource → send to Log Analytics workspace.  
2. **Create metrics dashboards**: pipeline runs (count, success/fail), duration histograms.  
3. **Leverage built‑in monitoring**: ADF “Monitor” tab for run history, alerts on failures.  
4. **Add custom alerts**: use Kusto queries on Log Analytics to trigger when latency > threshold or failure rate spikes.  
5. **Inspect activity logs**: copy activity metrics (bytes transferred, time), data flow execution details.  
6. **Track integration runtime health**: CPU/memory usage via Azure Monitor for the IR VM or managed IR.  
7. **Use Azure Data Factory’s “Insights”** (preview) for end‑to‑end performance trends.

**4️⃣ Common traps to avoid**

- Relying solely on the UI; it refreshes slowly and hides historical patterns.  
- Ignoring custom activity logs—these often contain hidden failures.  
- Forgetting to set retention policies on Log Analytics, leading to data loss.  
- Not correlating pipeline‑level metrics with IR resource usage (causes misdiagnosis).

**5️⃣ Sanity‑check & communicate**

- Verify that a known slow copy activity shows up in the duration histogram and triggers an alert when slowed.  
- Show stakeholders the dashboard link; explain each widget’s source (metrics vs logs).  
- Summarize: “We capture all runs → store in Log Analytics → visualise with dashboards → auto‑alert on thresholds.”  

Repeat this structure for any monitoring question—identify scope, layer the model, walk through tools, watch pitfalls, and validate visually.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
