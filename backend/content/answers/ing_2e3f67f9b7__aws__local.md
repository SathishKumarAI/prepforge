---
qid: ing_2e3f67f9b7__aws__local
question: 'Explain: Aerospace — InfluxData'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 227
output_tokens: 581
total_tokens: 808
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:09:47-05:00'
sources: []
---

**Situation / Task**

At my previous role I was tasked with building a real‑time analytics platform for an aerospace supplier that shipped flight‑test data (engine temperature, vibration, fuel flow) from thousands of aircraft into a single dashboard. The goal was to detect anomalies within minutes and reduce post‑flight analysis time by 70 %.  

**Action**

I chose **InfluxDB** as the time‑series backbone because it natively stores high‑velocity telemetry, offers downsampling/retention policies, and integrates with Grafana for visualization—critical for safety‑critical aerospace data.  
*Architecture:*  
- **Edge ingestion**: Each aircraft runs a lightweight agent that streams compressed JSON to an AWS Kinesis Data Stream.  
- **Batch processing**: A Lambda function pulls batches, validates schema, and writes to InfluxDB via its HTTP API (using the `write_api` client).  
- **Alerting**: InfluxDB’s Flux queries run nightly to compute rolling 5‑minute averages; any value beyond ±3σ triggers an SNS notification.  
- **Scalability & Cost**: I leveraged **InfluxDB Cloud**’s auto‑scaling, which kept CPU utilization <70 % while keeping storage costs below $0.10/GB/month. Availability was 99.9 % with multi‑AZ replication.  

**Result**

Within three months we reduced anomaly detection latency from ~15 min to **<2 min**, cutting flight‑test analysis time by **68 %** and saving the client ~$1.5M annually in labor costs. The system also logged over 20 TB of data without any outages.

---

### Leadership Principles Highlighted
- **Customer Obsession** – Delivered a solution that directly cut the customer’s operational cost.
- **Ownership & Dive Deep** – Designed end‑to‑end ingestion, processing, and alerting pipelines; performed detailed cost‑benefit analysis for InfluxDB vs. alternatives.
- **Bias for Action** – Implemented Lambda‑based ingestion within weeks instead of waiting for a full R&D cycle.

### What a Bar‑Raiser Looks For
- **Quantified Impact**: 68 % reduction in time, $1.5M savings.  
- **Depth & Trade‑offs**: Chose InfluxDB after benchmarking against TimescaleDB and OpenTSDB; explained trade‑off between write latency and retention cost.  
- **Learning from Failure**: First attempt had a 12 % ingestion drop due to unvalidated schema; fixed by adding a pre‑validation Lambda, improving reliability to >99.9 %.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
