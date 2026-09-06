---
qid: ing_0016adaf66__think__local
question: 'Explain: Splunk IT Service Intelligence — Luna Evaluation Models  Cloud
  Observability | Splunk'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 197
output_tokens: 502
total_tokens: 699
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T02:45:25-05:00'
sources: []
---

**Explaining Splunk IT Service Intelligence – Luna Evaluation Models & Cloud Observability**

Splunk’s **IT Service Intelligence (ITSI)** is a SaaS platform that unifies log data, metrics, events, and traces into a single view of application performance and user experience.  
At its core are **Luna evaluation models**—a set of pre‑built analytics templates that let you quickly surface key service health indicators without writing code.

| Feature | What it does | Why it matters |
|---------|--------------|----------------|
| **Service Models (SLO, SLI)** | Define what “good” looks like for a service (e.g., 99.9 % uptime). | Gives you a target to measure against and alerts when thresholds are breached. |
| **Impact Analysis** | Correlates metric anomalies with downstream services or users. | Helps isolate the root cause of outages. |
| **Root‑Cause Detection** | Uses machine learning to surface the most likely failure source (e.g., DB latency, network lag). | Reduces mean time to recovery (MTTR). |
| **Predictive Analytics** | Trains on historical data to forecast future incidents or performance dips. | Enables proactive capacity planning and pre‑emptive remediation. |

### Cloud Observability with Luna

When you run your workloads in public clouds (AWS, Azure, GCP) you get massive volumes of telemetry—VPC flow logs, cloudwatch metrics, Kubernetes events, etc. Splunk ITSI ingests all of this into a unified data lake and applies the Luna models to:

1. **Map Cloud Resources to Business Services** – e.g., “Web Front‑End” maps to an ECS cluster, an RDS instance, and a CDN.
2. **Detect Anomalies Across Layers** – from cloud networking to application code, spotting spikes in API latency or dropped packets in the same alert flow.
3. **Visualize End‑to‑End SLIs** – dashboards that show user satisfaction, transaction success rates, and underlying infrastructure health side‑by‑side.

The result is a single pane of glass where DevOps, SREs, and business stakeholders can see real‑time service health, understand the *why* behind degradations, and act before customers notice.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
