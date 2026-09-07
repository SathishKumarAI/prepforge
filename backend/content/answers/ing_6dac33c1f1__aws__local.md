---
qid: ing_6dac33c1f1__aws__local
question: Why is load balancing necessary? — What is Load Balancing?
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 459
total_tokens: 692
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:31:34-05:00'
sources: []
---

**Why load balancing is essential for ML inference**

*Leadership Principles:* **Customer Obsession** – ensuring every prediction request returns fast and reliably; **Ownership** – managing the entire end‑to‑end pipeline.

---

### Situation  
I was responsible for a real‑time recommendation service that served 200 k requests per second (RPS) with < 50 ms latency. The inference model lived on an Auto Scaling group of GPU instances behind a single TCP proxy. During traffic spikes, the proxy became a bottleneck and the latency doubled.

### Task  
Design a resilient, cost‑effective load‑balancing layer that could scale automatically while keeping SLA intact.

### Action  
1. **Deploy an Application Load Balancer (ALB)** with target groups pointing to ECS Fargate tasks running the model.  
2. Configure *path‑based routing* so that health checks hit a lightweight “ping” endpoint, avoiding unnecessary GPU load.  
3. Enable *dynamic scaling* by linking ALB metrics (`RequestCount`, `TargetResponseTime`) to an Auto Scaling policy for the ECS service.  
4. Use **AWS CloudWatch** alarms to trigger a *Spot‑Instance fallback* during cost spikes.  
5. Implement *circuit breaker* logic in the inference client to redirect traffic if target latency exceeds 100 ms.

### Result  
- Latency dropped from 120 ms to 48 ms (60% improvement).  
- 99.9 % of requests met SLA, a 30 % reduction in failed predictions.  
- Cost per RPS fell by 18 % due to Spot‑Instance utilization.  

---

**Bar‑raiser check:** I own the entire flow, dug deep into metrics to pinpoint the choke point, quantified impact with real numbers, and iterated quickly after the first failure (proxy overload). This demonstrates ownership, depth, and a learning mindset—exactly what Amazon looks for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
