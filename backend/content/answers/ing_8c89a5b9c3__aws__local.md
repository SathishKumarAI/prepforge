---
qid: ing_8c89a5b9c3__aws__local
question: 'Explain: Load Balancer Redundancy — Availability | System Design'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 439
total_tokens: 671
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:43:47-05:00'
sources: []
---

**Scenario (S):**  
I was tasked to redesign our AI inference pipeline so that the model‑hosting load balancer could tolerate a full AZ outage without affecting latency or throughput.

**Task (T):**  
Build a redundant, highly available load balancing layer for 10 ML endpoints serving ~1 M requests/day, each request <200 ms, while keeping cost under $5k/month.

**Action (A):**  
- **Service stack:** `ALB` front‑end → `AWS Global Accelerator` to route traffic across *two* NLBs in distinct AZs; each NLB fronts a fleet of `EC2 Auto Scaling Groups` running GPU instances.  
- **Health checks & target groups** use HTTP/HTTPS with 30 s timeouts and deregistration delay of 5 min to avoid sudden drop‑offs.  
- **Scaling policy:** Predictive scaling using CloudWatch metrics (CPU, inference latency) + AWS Forecast for weekly peaks.  
- **Cost control:** Spot Instances + Savings Plans; use `ECS` on Fargate for stateless inference pods, which auto‑scale and are cheaper than EC2.  
- **Monitoring & alarms:** CloudWatch dashboards + X-Ray tracing to detect 5xx spikes; automated SNS rollback if latency >120 ms.

**Result (R):**  
After deployment, we observed a *99.999%* uptime during the AZ failure test, with no request loss and latency staying <210 ms. Cost decreased by **18%** vs the previous single‑AZ ALB design.  

---

> **Leadership Principles:**  
- **Customer Obsession:** ensured zero impact on inference latency for end users.  
- **Ownership & Dive Deep:** I architected, implemented, and tuned every component, validating with real load tests.  

Bar‑raiser focus: clear ownership, depth of technical trade‑offs (cost vs availability), quantitative metrics, and iteration from the failure test.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
