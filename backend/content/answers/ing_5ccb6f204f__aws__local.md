---
qid: ing_5ccb6f204f__aws__local
question: 'Explain: Chapter Quizzes — Course Introduction | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 454
total_tokens: 685
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:55:24-05:00'
sources: []
---

**Situation & Task**  
I led the redesign of the *Chapter Quizzes* feature for an online learning platform that serves 1 M active users and hosts 50 k courses per day. The legacy monolith caused quiz load spikes (up to 10 k concurrent quizzes) to time‑out, eroding user confidence and dropping completion rates by 12 %.

**Action – System Design & AWS Services**  
* **API Gateway + Lambda** for a stateless entry point that scales automatically to >50 k QPS.  
* **Amazon DynamoDB (Global Secondary Indexes)** stores quiz state, allowing O(1) reads/writes and auto‑scaling throughput with on‑demand mode.  
* **SQS FIFO queues** decouple quiz evaluation from the user flow; each answer triggers a message that is processed by an EC2 Auto Scaling group running the ML inference model (TensorFlow serving).  
* **Amazon SageMaker Endpoint** hosts the recommendation engine that selects adaptive questions; we use Spot Instances for cost savings, reducing inference cost by 35 %.  
* **CloudWatch + X-Ray** provide end‑to‑end latency telemetry and root‑cause analysis.

I applied **Dive Deep** to trace a 200 ms latency anomaly during peak hours, identified a throttling issue in DynamoDB’s write capacity, and provisioned additional read replicas—bringing average quiz load time from 3.2 s down to 0.8 s (80 % reduction).

**Result**  
* 99.9 % availability during launch.  
* User completion rate rose from 68 % to 82 % within two weeks.  
* Operational cost fell by 28 % thanks to spot‑based inference and on‑demand scaling.

**Leadership Principles Highlighted**  
- **Customer Obsession**: Prioritized instant quiz feedback and reliability.  
- **Ownership**: Took end‑to‑end responsibility for performance, cost, and user experience.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
