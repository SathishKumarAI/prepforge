---
qid: ing_adc1c39c0c__aws__local
question: 'Explain: schema side of things how we''re going — Amazon System Design
  Interview: Design Parking Garage'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 489
total_tokens: 727
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:58:26-05:00'
sources: []
---

**Customer Obsession & Ownership**

*Situation:* A regional retailer wanted an automated parking‑garage solution that reduced driver wait times and maximized space utilization for its growing e‑commerce fleet.

*Task:* Design a scalable, cost‑effective system that tracks real‑time occupancy, predicts arrivals, and offers dynamic pricing to incentivize off‑peak usage.

*Action:*  
1. **Data layer** – used **Amazon Kinesis Data Streams** to ingest sensor events (entry/exit) at 10 ms latency; stored snapshots in **DynamoDB** for instant lookups.  
2. **Analytics & ML** – built a Lambda pipeline that feeds data into **Amazon SageMaker** notebooks for a recurrent‑neural‑network model predicting arrival rates 15 min ahead (MAE = 3 % of total capacity).  
3. **Serving layer** – deployed the trained model on **SageMaker Endpoint** behind an Application Load Balancer, auto‑scaling to 2–8 instances based on CPU usage.  
4. **Pricing engine** – a serverless microservice (API Gateway + Lambda) updates dynamic rates in real time, backed by **ElastiCache Redis** for sub‑second lookups.  
5. **Monitoring** – CloudWatch dashboards track wait‑time metrics; alarms trigger automatic price adjustments when average queue > 2 minutes.

*Result:* Within 6 months the system cut average driver wait time from 4 min to 1.3 min (68 % reduction) and increased garage utilization by 12 %, generating an additional $1.8 M in monthly revenue while keeping operating costs below 5 % of gross income.

**Bar‑raiser cues:**  
- Demonstrated *ownership* of end‑to‑end data flow.  
- Applied *Dive Deep* into latency and ML accuracy trade‑offs.  
- Quantified impact with clear metrics (wait time, utilization, revenue).  
- Learned from an initial 15 % over‑prediction error by retraining on newer sensor data, improving MAE to < 2 %.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
