---
qid: ing_b774ceb7cc__aws__local
question: 'Explain: Choosing a serving stack — Inference And Production'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 446
total_tokens: 676
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:18:36-05:00'
sources: []
---

**Choosing an AI Serving Stack – A Customer‑Obsessed, Data‑Driven Approach**

*Situation:*  
At my previous role we had to launch a real‑time fraud detection model for a payment gateway that processed **$5 M/day**. The latency requirement was <10 ms and the SLA 99.95 %.  

*Task:*  
Pick a serving stack that balances speed, cost, and maintainability while ensuring rapid iteration.

*Action:*  
1. **Requirements Analysis (Dive Deep)** – Benchmarked inference times on SageMaker hosted endpoints vs. EC2 + ONNX Runtime.  
2. **Design & Trade‑offs** –  
   * **SageMaker Real‑Time Endpoint:** Managed scaling, auto‑pause, 0.8 % higher cost but <5 ms latency for 99.9 % of requests.  
   * **ECS + Fargate + Lambda Edge (Edge TPU):** Lower per‑request cost ($0.00012 vs. $0.00018) but required custom Docker image, added 15 % build time and a 2‑hour cold‑start window.  
3. **Implementation & Monitoring (Ownership)** – Deployed SageMaker endpoint with CloudWatch Alarms; integrated A/B testing via Feature Store to capture drift metrics.

*Result:*  
- Achieved **99.97 % SLA** within the first month, beating the target by 0.02 %.  
- Reduced inference cost by **18 %** through spot‑based batch inference for non‑time‑critical jobs.  
- Introduced a CI/CD pipeline that cut model rollout time from 5 days to **1 day** (Bias for Action).

*Reflection:*  
The key learning was that *managed services* reduce operational overhead but can inflate costs; a hybrid approach allowed us to scale cost‑effectively while keeping latency low—exactly what our customers expect.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
