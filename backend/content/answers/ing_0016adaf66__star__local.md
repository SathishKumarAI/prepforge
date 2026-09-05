---
qid: ing_0016adaf66__star__local
question: 'Explain: Splunk IT Service Intelligence — Luna Evaluation Models  Cloud
  Observability | Splunk'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 335
total_tokens: 579
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:28:47-05:00'
sources: []
---

**Situation:** While leading a migration of our on‑prem monitoring stack to AWS, the team struggled with bursty Lambda traffic that caused SLA dips. We had no clear way to correlate function latency spikes with downstream service health.

**Task:** I was tasked with building an end‑to‑end observability solution that could surface root causes in near real time and reduce mean time to resolution (MTTR) by 30 %.

**Action:** I evaluated Splunk IT Service Intelligence’s Luna Evaluation Models for cloud. First, I leveraged the Cloud Observability connector to ingest CloudWatch metrics, X-Ray traces, and S3 logs into Splunk Enterprise. Then I used Luna’s pre‑built “Serverless” model to map Lambda invocations, cold starts, and error rates onto a single service graph. By configuring custom KPI thresholds (e.g., 95th percentile latency >200 ms) and auto‑correlation rules that matched CloudWatch alarms with X-Ray anomaly detection, the model automatically flagged correlated events across services. I also scripted a Splunk dashboard that visualized latency heatmaps and linked directly to the underlying traces.

**Result:** Within two weeks of deployment, MTTR dropped from 45 minutes to 12 minutes—a 73 % reduction—and we avoided a major outage during peak traffic. The project taught me how Luna’s evaluation engine can surface hidden dependencies in cloud workloads, and reinforced the value of tight integration between metrics, traces, and logs for proactive service health.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
