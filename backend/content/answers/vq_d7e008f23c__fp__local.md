---
qid: vq_d7e008f23c__fp__local
question: How do you monitor ADF pipeline performance?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 169
output_tokens: 449
total_tokens: 618
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:58:56-05:00'
sources: []
---

**Why monitoring matters**

An Azure Data Factory (ADF) pipeline is a *workflow* that orchestrates data movement and transformation. The fundamental problem it solves is *timely, reliable data delivery*. If any stage stalls or fails, downstream analytics suffer. Therefore we must observe two dimensions: **throughput** (how many units per time) and **latency** (time from trigger to completion). Monitoring is the observable counterpart of a control loop in systems theory; without it we cannot guarantee stability.

**What to watch**

| Metric | Why it matters | Typical threshold |
|--------|----------------|-------------------|
| *Pipeline run count* | Detect missing or duplicated runs | 0 per expected interval |
| *Run duration (CPU, IO)* | Indicates resource contention | >90th percentile of historical runs |
| *Failure rate* | Signals systemic issues | >5 % |
| *Trigger latency* | Measures queueing delays | >1 min |
| *Data movement volume* | Detects back‑pressure | >95 % of provisioned throughput |

**How to collect**

1. **ADF diagnostic logs** – enable *Azure Monitor* logs and stream them to a Log Analytics workspace.  
2. **Activity run metrics** – use the `PipelineRun` table; query with Kusto:  
   ```kusto
   PipelineRun
   | summarize avg(DurationMs) by PipelineName, bin(TimeGenerated, 5m)
   ```
3. **Custom alerts** – set thresholds on the above queries; push to Teams or Service Now.

**Non‑obvious insight**

ADF’s *trigger latency* is often the silent bottleneck. Even if a pipeline runs quickly, a long trigger queue can mask performance problems because the pipeline never starts. Monitoring only run duration will overlook this. Therefore always include trigger latency as a primary metric; it directly reflects the *queueing theory* of your orchestration layer.

By aligning these metrics with the control‑loop concept—measure → analyze → act—we ensure that ADF pipelines remain both efficient and reliable.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
