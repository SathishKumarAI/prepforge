---
qid: ing_c5c7c8f50c__star__local
question: 'Explain: Get hands-on with Splunk — Luna Evaluation Models  Cloud Observability
  | Splunk'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 338
total_tokens: 583
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:05:33-05:00'
sources: []
---

**Situation:**  
At my previous role, our security team was drowning in log noise from dozens of cloud services. We had a quarterly compliance deadline to produce a clear incident‑response report, but manual filtering was taking days and the risk score drifted over 30% month‑to‑month.

**Task:**  
I needed to build an automated, scalable observability pipeline that could ingest all Splunk Enterprise Security events, apply Luna Evaluation Models for threat scoring, and surface actionable insights in real time—so we met compliance on schedule and cut false positives by at least half.

**Action:**  
I started by provisioning a managed Splunk Cloud instance (using the free trial) to avoid local overhead. Using the **Luna Evaluation Models SDK**, I wrote a Python script that pulled raw logs via Splunk’s REST API, parsed them into structured JSON, and fed them into Luna’s pre‑built “cloud‑native” threat model. The script ran nightly in a Docker container orchestrated by Kubernetes, automatically updating the model weights based on new labeled data from our SOC analysts. I also leveraged Splunk’s **Event Collector** to stream logs directly from AWS CloudWatch and Azure Monitor, ensuring low latency.

**Result:**  
The automated pipeline cut incident triage time from 48 hrs to under 2 hrs, reduced false‑positive alerts by 47%, and enabled us to submit the compliance report ahead of the quarterly deadline. I learned how Splunk’s cloud observability layer can be combined with Luna models to turn raw telemetry into actionable risk scores at scale.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
