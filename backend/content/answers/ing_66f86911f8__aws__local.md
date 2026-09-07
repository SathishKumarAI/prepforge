---
qid: ing_66f86911f8__aws__local
question: 'Explain: i would like you to design a — Amazon System Design Interview:
  Design Parking Garage'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 614
total_tokens: 852
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:17:51-05:00'
sources: []
---

**Leadership Principles:** *Ownership*, *Dive Deep*  

---

### **Situation / Task**
I was asked to build a real‑time parking‑garage management system for a 200‑unit commercial complex that currently has manual ticketing and no analytics. The goal was to reduce wait times, increase revenue from spot usage, and provide drivers with instant availability information.

### **Action (Design)**
1. **Event Capture**  
   *Sensors* on entry/exit gates push JSON events (`gate_id`, `vehicle_id`, `timestamp`) to **Amazon Kinesis Data Streams** (high‑throughput ingestion).  

2. **Real‑time Processing**  
   *Kinesis Data Analytics* runs a Spark job that updates the current occupancy per floor in **DynamoDB** (single‑partition key: `floor#spot`).  
   *Every 5 s*, an AWS Lambda aggregates total free spots and writes to **Amazon CloudWatch Metrics** for monitoring.

3. **Analytics & Forecasting**  
   A nightly Spark job on **EMR** scans the last 30 days of Kinesis data, trains a linear‑regression model in **SageMaker**, and stores predictions in an S3 bucket. Lambda triggers a *CloudWatch Event* to update a **Redshift** table for BI dashboards.

4. **Driver Interface**  
   A lightweight API on **Amazon API Gateway + Lambda (Python)** serves the current free‑spot count and next‑available slot recommendations. Front‑end uses **Amplify** to cache responses via **DAX** for sub‑200 ms latency.

5. **Scalability & Availability**  
   *Kinesis* scales automatically; DynamoDB offers 99.999% availability with auto‑scaling on read/write capacity. All services run in a **VPC** with public/private subnets, and data at rest is encrypted via KMS.  

6. **Cost Control**  
   Spot instances for EMR (≈ 70% savings), Lambda’s free tier for the API, and DynamoDB auto‑scaling keep monthly spend under **$4k**, a 40% reduction versus the legacy system.

### **Result**
- Occupancy reporting latency dropped from 5 min to < 2 s.  
- Driver wait times at entry decreased by **35%** (from 3 min to 1.9 min).  
- Revenue increased by **12%** due to dynamic pricing based on real‑time demand predictions.  

### **Bar‑raiser Takeaway**
I demonstrated *ownership* by leading the end‑to‑end design, *dive deep* through data‑flow specifics and cost trade‑offs, quantified impact with concrete metrics, and learned from an initial failure in the sensor‑to‑stream pipeline (resolved via a retry queue).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
