---
qid: ing_57b6e5cd3a__aws__local
question: 'Explain: Resource state monitoring and alerting — Event-Driven Architecture'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 447
total_tokens: 680
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:43:57-05:00'
sources: []
---

**Situation**  
At my previous company we had a fleet of edge devices that generated telemetry for ML model inference. A spike in latency on one device type caused downstream model accuracy to drop by 12 %.  

**Task**  
Build a fully automated, event‑driven monitoring system so we could detect resource state changes (CPU, memory, GPU) and trigger corrective actions within seconds.

**Action**  
1. **Data ingestion** – Each device publishes metrics to **Amazon Kinesis Data Streams** (10 k records/second).  
2. **Processing** – A Lambda function runs a *state machine* that compares real‑time values against thresholds stored in **DynamoDB**.  
3. **Alerting & remediation** – If an anomaly is detected, the function writes to an **SNS topic** and invokes another Lambda that calls **AWS IoT Device Management** to reboot or update firmware.  
4. **Observability** – Metrics are pushed to **Amazon CloudWatch**; dashboards use **Grafana on Amazon Managed Service for Grafana**.  

This pipeline scales horizontally: Kinesis shards auto‑scaling, Lambda concurrency is limited by provisioned concurrency (cost‑controlled), and SNS fan‑out supports up to 1 M subscribers. The system achieved 99.95 % availability with an average alert latency of **2.3 s**.

**Result**  
Reduced model accuracy loss from 12 % to < 0.5 %, cut manual intervention hours by 80 %, and saved ~$15k/month in avoided downtime costs.

---

### Leadership Principles  
- **Customer Obsession** – Ensured end‑user ML predictions remained accurate.  
- **Ownership** – Designed, implemented, and maintained the full stack.  

*Bar‑raiser focus:* depth of design (Kinesis + Lambda vs. CloudWatch alarms), quantified impact (latency, cost savings), and lessons from a failed prototype that over‑provisioned Lambda concurrency.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
