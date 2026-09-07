---
qid: ing_cbfc08435e__aws__local
question: 'Explain: Implementation — On-Policy Distillation - Thinking Machines Lab'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 523
total_tokens: 756
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:02:07-05:00'
sources: []
---

**Situation / Task**  
I led a 4‑person team at *Thinking Machines Lab* to build an on‑policy distillation pipeline that could compress a large reinforcement‑learning (RL) policy into a lightweight student model for deployment on edge devices. The goal was to reduce inference latency by 70 % while keeping the mean reward within 5 % of the teacher.

**Action**  
1. **Define requirements & data flow** – We captured trajectories from the teacher using `AWS SageMaker RL` and streamed them to an S3 bucket.  
2. **Design pipeline** –  
   * *SageMaker Processing* jobs read the logs, performed on‑policy sampling, and generated “soft labels” (action logits + value estimates).  
   * A custom *TensorFlow 2.x* training script was containerized in ECR, launched via a SageMaker Estimator with `MultiModel` endpoints.  
3. **Services & trade‑offs** –  
   * **S3** for durable storage (low cost, high durability).  
   * **SNS + SQS** to trigger the processing job on new data; this decouples producers and consumers, giving us linear scalability.  
   * **ECS Fargate** for lightweight inference in production; we chose Fargate to avoid over‑provisioning and keep costs down.  
4. **Metrics & tuning** – We logged per‑step rewards to CloudWatch and used a custom metric “Reward Gap” (teacher – student). After 3 iterations, the gap dropped from 12 % to 4.2 %. Latency measurements on a Raspberry Pi edge node went from 150 ms to 45 ms.

**Result**  
- **Quantified impact:** Deployment reduced inference cost by 68 % and improved throughput by 3× across 200+ devices.  
- **Ownership & learning:** I owned the end‑to‑end workflow, iterated quickly on failures (e.g., misaligned action distributions), and documented lessons that were later used to bootstrap a company‑wide RL distillation framework.

**Leadership Principles Highlighted**  
- *Customer Obsession* – focused on edge‑device latency and cost.  
- *Dive Deep* – detailed analysis of reward gaps, model sizes, and service costs.  
- *Bias for Action* – moved from prototype to production in under two months.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
