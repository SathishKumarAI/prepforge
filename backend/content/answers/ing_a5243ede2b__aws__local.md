---
qid: ing_a5243ede2b__aws__local
question: 'Explain: with here in the same thing um — Amazon System Design Interview:
  Design Parking Garage'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 405
total_tokens: 643
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:40:26-05:00'
sources: []
---

**Situation & Task**  
While leading a product team at my last role, we were asked to build an *intelligent parking‑garage platform* that would reduce wait times and maximize space utilization for a city council partner. The goal was **30 % faster vehicle ingress/egress and 25 % higher slot occupancy** within 12 months.

**Action (Design)**  
1. **Architecture** – event‑driven microservices on **AWS Lambda** (stateless, auto‑scaling) triggered by IoT sensor streams from RFID gates and cameras.  
2. **Data Layer** – **Amazon Kinesis Data Streams** for real‑time telemetry, persisted in **DynamoDB** (global tables for multi‑region failover).  
3. **Analytics** – **AWS Glue + Athena** for batch reporting; **Amazon SageMaker** trains a reinforcement‑learning model that predicts slot availability and optimizes gate routing.  
4. **Front‑end** – **React Native** mobile app using **API Gateway** + **Lambda@Edge** for low latency global access.  
5. **Security & Compliance** – IAM roles, KMS encryption, and **AWS Config** to enforce audit rules.

**Result**  
- Deployment in 9 weeks; first‑month occupancy rose from 68 % to 90 %.  
- Average wait time dropped 32 %, exceeding the target by 2 %.  
- Operational cost saved $120k/yr versus a monolithic solution.  

**Learning & Ownership**  
I owned the end‑to‑end delivery, iterated on feedback from city inspectors (bias for action), and conducted post‑mortems to refine our ML pipeline—demonstrating deep ownership and continuous improvement.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
