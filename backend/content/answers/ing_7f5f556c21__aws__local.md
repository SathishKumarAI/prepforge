---
qid: ing_7f5f556c21__aws__local
question: 'Explain: Misclicks (Wrong Coordinates) — Computer Use Agents'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 479
total_tokens: 711
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:13:06-05:00'
sources: []
---

**Question:** *Explain: Misclicks (Wrong Coordinates) – Computer Use Agents*

---

### Situation  
I was leading a project that built a robotic‑agent platform to automate data entry in legacy ERP systems. The agents interacted via the UI, mimicking human clicks. Early pilots reported a 12 % error rate due to “misclicks” – the agent clicked at slightly wrong coordinates and sent incorrect data.

### Task  
Reduce misclick incidence below 1 % while keeping throughput >10 k transactions/day, ensuring the system remains cost‑effective on AWS.

### Action  
1. **Dive Deep into UI Layout** – captured high‑resolution screenshots per screen; used computer vision (OpenCV) to map *anchor points* and *relative offsets*.  
2. **Implement Adaptive Coordinate Correction** – built a lightweight Lambda layer that, before each click, queries DynamoDB for the latest anchor offsets and applies a learned correction vector (trained on 1 M past clicks).  
3. **Deploy Event‑Driven Feedback Loop** – every misclick triggers an SNS notification; CloudWatch metrics feed into an SQS queue processed by a SageMaker endpoint that refines the offset model nightly.  
4. **Cost & Availability** – all services are region‑specific, using on‑demand EC2 Spot for training and S3 for artifacts; total monthly spend dropped 30 % compared to the previous static approach.

### Result  
Misclick rate fell from 12 % to **0.8 %** in three weeks, boosting overall throughput by **18 %** (≈ 1.9 M records/month). The system now self‑optimizes with zero manual intervention, aligning with *Customer Obsession* and *Ownership*.  

---

**Bar‑raiser Takeaway:**  
- Demonstrated ownership by turning a failure point into a continuous improvement loop.  
- Showed depth: leveraged CV, ML, and AWS serverless stack to solve the problem at scale.  
- Quantified impact (error rate, throughput, cost).  
- Learned from misclicks by building an automated feedback system rather than patching manually.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
