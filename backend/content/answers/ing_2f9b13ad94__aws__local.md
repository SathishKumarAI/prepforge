---
qid: ing_2f9b13ad94__aws__local
question: 'Explain: You pick one replica. Um, you got — Building Software Systems
  At Google and Lessons Learned'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 569
total_tokens: 809
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:13:05-05:00'
sources: []
---

**Situation & Task**  
In a recent project I led the migration of an on‑prem ML inference pipeline (TensorFlow Serving) to AWS so that we could serve 3 M predictions/day with sub‑200 ms latency and zero single‑point failure. The core requirement was *high availability* for a critical recommendation engine used by our mobile app.

**Action – Design & Implementation**  
1. **Architectural pattern**: I chose a *stateless microservice* in ECS Fargate, each task running a container with the model loaded once at startup.  
2. **Service discovery & load‑balancing**: A Network Load Balancer (NLB) fronts the tasks; health checks are routed to a dedicated `/health` endpoint that returns a 200 only when the model tensor graph is fully initialized.  
3. **Autoscaling**: I set up *Target Tracking* on CloudWatch metric `PredictionsPerSecond`. The scaling policy maintains at least 20% headroom for traffic spikes, automatically launching new Fargate tasks in the same availability zone.  
4. **Model distribution**: The trained model is stored in S3 (object versioning). A Lambda function triggers a *ECS task* to copy and load the new model whenever a newer version lands in the bucket – zero downtime blue‑green deployment.  
5. **Observability**: Prometheus + Grafana via CloudWatch Agent for latency, error rate; X-Ray traces each request through NLB → ECS → Lambda.

**Result**  
- Latency dropped from 350 ms to **180 ms (50% improvement)**.  
- Uptime hit **99.995 %**, meeting SLA.  
- Cost decreased by **22 %** vs the previous EC2‑based solution due to Fargate’s pay‑per‑second model.

**Reflection & Bar‑Raiser Focus**  
*Ownership*: I owned the end‑to‑end migration, coordinating with data science, dev‑ops, and security teams.  
*Dive Deep*: The performance regression was traced to a stale in‑memory cache; fixing it required profiling the TensorFlow graph load time.  
*Quantified Impact*: 180 ms latency saved ~12 k user sessions/day from timeouts.  
*Learning from Failure*: Early tests revealed NLB health checks were too aggressive, causing unnecessary task churn; we tuned thresholds based on observed warm‑up times.

**Leadership Principles Highlighted**  
- **Customer Obsession**: Delivering a smoother recommendation experience.  
- **Ownership & Dive Deep**: Own the solution and troubleshoot root causes.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
