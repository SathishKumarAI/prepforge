---
qid: ing_f0c91c4051__aws__local
question: 'Explain: Combining Vertical and Horizontal Scaling'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 227
output_tokens: 395
total_tokens: 622
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:21:23-05:00'
sources: []
---

**Situation / Task**  
While revamping a recommendation engine for a global e‑commerce platform, my team had to support a sudden 4× traffic spike during the holiday season without exceeding our SLA of < 200 ms latency.

**Action**  
I championed an **hybrid scaling strategy**:  

- **Vertical** – I re‑architected the inference pipeline on EC2 g5.12xlarge instances (GPU + high‑memory) and leveraged Amazon SageMaker’s *Elastic Inference* to boost GPU utilization by 30 %. This cut per‑request cost from $0.06 to $0.042 while keeping latency constant.  
- **Horizontal** – I introduced a **stateless microservice** in ECS (Fargate) that cached the top‑10 item vectors in Amazon ElastiCache for Redis, allowing rapid lookup and reducing SageMaker calls by 55 %. Auto‑Scaling was driven by CloudWatch metrics (CPU > 70 % → add pods; < 30 % → scale down).  

I also added a **canary deployment** via AWS CodeDeploy to validate each rollout against latency and error rates, ensuring zero‑downtime.

**Result**  
During the peak week we handled 12 M requests with 98.7 % success, while overall costs dropped 22 % compared to a pure vertical approach. Latency stayed below 180 ms for 99.9 % of traffic.  

**Learnings**  
I realized that *“Invent & Simplify”* is about combining the right scaling levers; “Dive Deep” helped me quantify GPU vs. cache trade‑offs, and “Bias for Action” drove rapid iteration with canary checks.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
