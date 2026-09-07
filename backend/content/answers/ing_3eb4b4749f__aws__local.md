---
qid: ing_3eb4b4749f__aws__local
question: 'Explain: into this a little later um when — Amazon System Design Interview:
  Design Parking Garage'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 588
total_tokens: 826
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:47:54-05:00'
sources: []
---

**Scenario (S)**  
I was hired as a Solutions Architect to build a *real‑time parking‑garage management platform* for a city council that needed to reduce congestion by 30 % and increase revenue by 15 % within one year.

**Task (T)**  
Design an end‑to‑end system that:  

1. Detects vehicle entry/exit with sub‑second latency.  
2. Computes dynamic pricing based on occupancy and time of day.  
3. Provides a mobile API for drivers to see free spots, reserve, and pay.  
4. Sends alerts to operators when capacity thresholds are breached.

**Action (A)**  

| Component | AWS Service(s) | Why |
|-----------|----------------|-----|
| **Edge detection** | Amazon Rekognition + IoT Greengrass | Low‑latency image inference on local gateways; only pass metadata to the cloud. |
| **Event ingestion** | Amazon Kinesis Data Streams | Handles millions of events per day with 1 ms latency. |
| **Real‑time analytics** | AWS Lambda + DynamoDB Global Tables | Serverless compute for pricing logic; globally replicated DB gives <10 ms read/write and high availability. |
| **Reservation & billing** | Amazon API Gateway + Step Functions + Stripe SDK | RESTful front‑end with automated state machine; Stripe handles PCI compliance. |
| **Alerting** | Amazon SNS + CloudWatch Alarms | Immediate push to ops dashboard; auto‑scales with spot instances. |
| **Cost control** | Spot Instances, Savings Plans | Forecasted 40 % savings vs on‑demand for compute-heavy workloads. |

**Result (R)**  

* Deployment of the prototype in three garages reduced average driver wait time from 12 min to 3 min (a 75 % drop).  
* Dynamic pricing increased revenue by **18 %** during peak hours, surpassing the 15 % goal.  
* System handled 1.2 M events/day with <5 ms latency; SLA of 99.99 % uptime achieved within the first quarter.

---

### Leadership Principles Reflected  

- **Ownership** – I scoped the entire solution, negotiated budget cuts, and drove cross‑functional adoption.  
- **Dive Deep** – Continuous monitoring revealed a bottleneck in image inference; we migrated to Greengrass edge compute, cutting latency by 60 %.  

**What a bar‑raiser hears:**  
Clear ownership of metrics, deep technical reasoning behind service choices, tangible impact numbers, and an honest reflection on the edge‑compute optimization that fixed the latency issue.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
