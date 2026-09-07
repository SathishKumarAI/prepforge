---
qid: ing_836af20a63__aws__local
question: 'Explain: Monitoring, Logging, and Alerting — How to Prepare for System
  Design Interview'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 496
total_tokens: 733
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:22:11-05:00'
sources: []
---

**Situation & Task (S)**  
I was tasked to build a production‑grade ML pipeline for a recommendation engine that handled 5 M requests/day. The client demanded *zero downtime* and real‑time drift detection, so I had to design monitoring, logging, and alerting that could scale with the traffic.

**Action (A)**  
1. **Logging** – I used **Amazon CloudWatch Logs** + **AWS Glue** to ingest raw logs from SageMaker endpoints into a structured Parquet catalog in S3.  
2. **Monitoring** – Created custom metrics (latency, prediction accuracy, concept‑drift score) and pushed them to **CloudWatch Metrics** via the *PutMetricData* API.  
3. **Alerting** – Leveraged **Amazon CloudWatch Alarms** with SNS topics for Slack/Email notifications; set thresholds at 99th percentile latency + a 10 % drop in accuracy.  
4. **Dashboards** – Built a Grafana dashboard (via Amazon Managed Service for Grafana) that visualised model performance, drift metrics, and resource utilisation.  
5. **Automation** – Configured an EventBridge rule to trigger a Lambda that retrains the model when drift alarms fire.

**Result (R)**  
- Reduced mean time to recovery from 45 min to **3 min**.  
- Detected and remediated concept drift before it impacted revenue, saving **$120k/month** in lost conversions.  
- Cost of the monitoring stack stayed below **$200/month** while supporting 5 M requests/day.

---

### Leadership Principles Highlighted
- **Customer Obsession** – Immediate visibility into model health protects user experience.  
- **Ownership & Dive Deep** – I designed end‑to‑end observability, not just surface metrics.  

### Bar‑raiser Takeaway
- *Quantified impact* (MTTR, revenue saved).  
- *Depth*: Detailed AWS services and trade‑offs (CloudWatch vs. Prometheus).  
- *Learning from failure*: Post‑incident review showed the importance of drift thresholds; I iterated to reduce false positives by 35 %.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
