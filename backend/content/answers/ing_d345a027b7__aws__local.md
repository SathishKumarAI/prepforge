---
qid: ing_d345a027b7__aws__local
question: 'Explain: mind i guess we can dive right — Amazon System Design Interview:
  Design Parking Garage'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 466
total_tokens: 704
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:18:15-05:00'
sources: []
---

**Customer Obsession & Ownership**

*Situation*: A city council asked us to build a scalable, real‑time parking‑management platform for a downtown 10‑level garage that currently handles ~2,000 cars/day.

*Task*: Deliver an end‑to‑end system: spot detection → reservation → payment → analytics, with 99.9 % uptime and < $0.05/transaction cost.

*Action*:  
1. **Spot Sensors** – Raspberry Pi + ultrasonic sensors publish to **AWS IoT Core** (MQTT).  
2. **Real‑time Ingestion** – Data streams into **Kinesis Data Streams**, batched into **DynamoDB Global Tables** for low‑latency read/write (≈ 5 ms).  
3. **Reservation API** – Stateless **API Gateway + Lambda** (Python) backed by **Aurora Serverless v2** for relational queries, auto‑scaling to 10k RPS.  
4. **Payment** – Integrated **Amazon Pay** via Lambda authorizer; all charges logged in **S3 Glacier** for compliance.  
5. **Analytics** – Scheduled **Glue ETL** loads DynamoDB snapshots into **Redshift Spectrum**; dashboards in **QuickSight** show occupancy trends (e.g., peak hour 78 % fill).  

*Result*: Pilot deployment saw a 35 % reduction in search time, 20 % increase in paid spots, and cost per transaction dropped to $0.032—below target. We achieved 99.97 % availability during a 3‑month test.

**Dive Deep & Learn from Failure**

Post‑deployment, we observed a spike in sensor noise after rain. Adding an **AWS SageMaker** model that classifies “wet” vs. “dry” readings reduced false positives by 40 %. This iterative loop—monitor → model → deploy—demonstrates ownership and continuous improvement.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
