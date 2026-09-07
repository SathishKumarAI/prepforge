---
qid: ing_fd4ce6bf77__aws__local
question: 'Explain: Tell me about a time you had to learn a new AI technology or technique
  quickly to deliver something.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 387
total_tokens: 628
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:50:47-05:00'
sources: []
---

**Situation / Task**  
At my previous company we were building an on‑prem recommendation engine for a retail client. Their SLA demanded <2 s latency and 99.9% availability while handling 10k concurrent users. I was assigned to prototype a new *contrastive learning* model that could run inference in real time, but I had never worked with this technique.

**Action**  
1. **Dive Deep & Ownership** – I spent the first two days reading the original SimCLR paper and implementing a toy version on a single GPU.  
2. **AWS‑first design** – I chose SageMaker for training (using `ml.p3dn.24xlarge` to hit 30 ms per batch) and then deployed the model as a Lambda layer behind an API Gateway, backed by an ECS Fargate cluster with autoscaling to keep latency <1 s.  
3. **Bias for Action** – I set up automated CI/CD in CodePipeline, added CloudWatch metrics (latency, error rate) and alerts.  
4. **Deliver Results** – Within 5 days the prototype handled 12k concurrent requests, achieved 98.7% accuracy on a held‑out test set, and met the SLA.

**Result**  
The client approved production rollout; we saw a 35 % lift in conversion rate within two weeks of deployment (from 2.1 % to 2.8 %) and a 20 % reduction in server cost by leveraging spot instances for training.

*Key takeaways*: owning the learning curve, applying AWS services to meet stringent SLAs, and validating impact with real business metrics—exactly what a bar‑raiser expects.*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
