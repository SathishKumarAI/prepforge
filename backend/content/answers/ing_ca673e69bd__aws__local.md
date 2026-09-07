---
qid: ing_ca673e69bd__aws__local
question: 'Explain: Now a road, even though it looks — Google Maps System Design Interview
  Question'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 469
total_tokens: 706
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:59:06-05:00'
sources: []
---

**Situation / Task**  
While leading the *Road‑Condition Monitoring* feature for a ride‑sharing app, I had to redesign the system that ingests real‑time road images from vehicle cameras and predicts pothole likelihood. The goal was to reduce trip‑delay incidents by 25 % within six months.

**Action (Design)**  
1. **Data Ingestion** – *Kinesis Video Streams* (real‑time video) → *S3* for raw storage.  
2. **Pre‑processing & Feature Extraction** – *AWS Lambda* triggers on S3 uploads, calls *Amazon Rekognition Custom Labels* to detect road anomalies; results stored in *DynamoDB* with TTL.  
3. **Model Training / Serving** – Use *SageMaker* to train a CNN on labeled data; deploy as a *Endpoint* behind an *Application Load Balancer*.  
4. **Real‑time Prediction** – Vehicle edge devices stream frames to the endpoint via *Greengrass*, caching predictions locally for latency <200 ms.  
5. **Analytics & Feedback Loop** – *Athena* queries DynamoDB logs; *CloudWatch Alarms* trigger retraining cycles every 30 days.

**Result**  
- Latency dropped from 1.2 s to 0.18 s per inference.  
- Trip‑delay incidents fell by **27 %** (from 8,200 to 5,940 events in Q4).  
- Cost reduced 35 % by leveraging spot instances for training and Lambda’s pay‑per‑execution model.

**Reflection**  
I owned the end‑to‑end pipeline, diving deep into AWS pricing models to keep costs low. The bar‑raiser asked about trade‑offs between edge inference vs cloud latency; I demonstrated how Greengrass balances cost and availability while ensuring high reliability (99.9 % uptime).  

> **Leadership Principles:** *Customer Obsession* – deliver safer rides; *Ownership* – end‑to‑end responsibility; *Dive Deep* – quantified performance gains.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
