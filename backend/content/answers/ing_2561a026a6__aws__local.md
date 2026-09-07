---
qid: ing_2561a026a6__aws__local
question: 'Explain: Pattern 1: Active-Passive (Failover) — Design Load Balancer |
  System Design Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 247
output_tokens: 652
total_tokens: 899
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:50:36-05:00'
sources: []
---

**Scenario – Designing an active‑passive failover load balancer for a high‑traffic ML inference service**

| **Leadership Principle** | **Why it matters here** |
|---------------------------|--------------------------|
| *Ownership* | I own the reliability of every prediction that reaches a customer. |
| *Dive Deep* | The solution must surface trade‑offs in latency, cost, and data consistency across regions. |

---

### Situation  
A production ML inference API receives ~200 k requests/sec. A single region outage would drop all traffic, causing SLA violations and revenue loss.

### Task  
Build an **active‑passive** architecture that keeps the service available with < 50 ms added latency, while keeping cost within 10 % of the baseline.

### Action  

1. **Global Load Balancer (AWS Global Accelerator)**  
   * Routes to the active region by health checks; on failure, traffic is automatically redirected to the passive region.  
   * Provides low‑latency path and DNS caching.

2. **Regional Traffic Manager (ALB + NLB)**  
   * ALB fronts the inference containers (ECS Fargate).  
   * NLB handles TCP/UDP for GPU‑accelerated endpoints, ensuring no packet loss.

3. **Data Replication**  
   * Feature store & model artifacts stored in S3 with cross‑region replication (`S3 Cross-Region Replication`).  
   * Real‑time prediction results written to DynamoDB Global Tables (eventual consistency) – ensures the passive region can serve cached predictions if the active one is down.

4. **Health Checks & Automation**  
   * CloudWatch metrics trigger Lambda to change target group weights in ALB, ensuring a smooth switchover.  
   * CI/CD pipelines deploy new model versions to both regions; version tags guarantee consistency.

5. **Cost/Scalability Analysis**  
   * Baseline cost: $12k/month (single region).  
   * Dual‑region active‑passive adds ~8 % ($1k), staying within budget.  
   * Auto‑scaling on CPU/GPU utilization keeps response < 50 ms for 95 th percentile.

### Result  

* **Downtime**: Zero customer‑visible downtime in a simulated region outage (simulated for 3 hrs).  
* **Latency**: Avg +12 ms during failover, still below SLA.  
* **Cost**: 8 % increase vs. single‑region baseline.  

---

### What the bar‑raiser hears

1. **Ownership** – I framed “service availability” as a personal metric and drove it to zero.  
2. **Dive Deep** – I dissected latency, replication consistency, and cost trade‑offs with concrete numbers.  
3. **Quantified Impact** – 0 downtime & < 50 ms latency directly protect $4M/month revenue.  
4. **Learning from Failure** – After a real outage, we reduced failover lag by adding an additional NLB health check rule—showing iterative improvement.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
