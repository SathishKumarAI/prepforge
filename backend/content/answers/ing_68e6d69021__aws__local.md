---
qid: ing_68e6d69021__aws__local
question: 'Explain: Autoscaling on queue depth — Llm Gateway And Serving Platform'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 545
total_tokens: 778
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:21:32-05:00'
sources: []
---

**Situation / Task**  
I led the rollout of an LLM gateway for a real‑time recommendation engine that receives ~30 k inference requests per minute. The team needed a self‑scaling backend that could grow and shrink with queue depth while keeping latency < 200 ms.

**Action**  
1. **Requirements & Design** –  
   *Front‑end*: API Gateway → SQS (dedicated “inference” queue).  
   *Back‑end*: ECS Fargate containers running the LLM inference microservice, exposed via an Application Load Balancer (ALB).  
2. **Autoscaling on Queue Depth** –  
   * CloudWatch metric `ApproximateNumberOfMessagesVisible` triggers a target‑tracking scaling policy:  
     - Desired value: 200 messages per container.  
     - Policy scales the ECS service between 2–20 tasks; each task hosts a GPU‑enabled inference model.  
   * ALB health checks ensure only healthy containers receive traffic, guaranteeing high availability.  
3. **Cost & Trade‑offs** –  
   * Using Fargate eliminates cluster management overhead but costs $0.10/GB‑hour per container; target‑tracking keeps spend tight (average 5 containers → ~$200/month).  
   * Alternative: Spot instances + Savings Plans for 30 % savings, at the cost of potential interruptions—acceptable because the queue depth automatically triggers replacement.  

**Result**  
- Latency stayed <190 ms during peak load, meeting SLAs.  
- Scaling events reduced idle GPU hours by **42 %**, cutting monthly inference costs from $3,200 to $1,860 (≈ 41 % savings).  
- Customer satisfaction scores improved by 15 points on the post‑deployment survey.

**Bar‑raiser focus** – I demonstrated *Ownership* by driving end‑to‑end architecture, *Dive Deep* through detailed metric tuning, and quantified impact with real cost & latency data. Failure lessons: early tests revealed a mis‑configured CloudWatch alarm; we fixed it by adding an alerting pipeline that now auto‑notifies the ops team within 30 s of threshold breaches.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
