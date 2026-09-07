---
qid: ing_ffce7b9545__aws__local
question: 'Explain: Implementation: — Load Balancing Algorithms Explained with Code
  (and Visuals)'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 453
total_tokens: 689
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:56:08-05:00'
sources: []
---

**Situation & Task**  
I was tasked with reducing request latency for a high‑traffic recommendation service that served millions of users daily. The load balancer had been using round‑robin; we observed spikes in 99th‑percentile latency during peak hours.

**Action (Technical)**  
1. **Requirements** – Distribute traffic based on *instance health* and *CPU utilization*, maintain <200 ms average latency, keep cost ≤15% of current spend.  
2. **Design** – Replace the existing Classic Load Balancer with an **Application Load Balancer (ALB)** plus a **Target Group with weighted routing**.  
3. **Algorithm** – Implement *Least Outstanding Requests* (LOR) in the target‑group health check script:

```python
# pseudocode for LOR
def choose_target(targets):
    # targets = list of (instance_id, outstanding_requests)
    best = min(targets, key=lambda t: t.outstanding_requests)
    return best.instance_id
```

4. **AWS Services** – ALB (scalable, 99.999% availability), ECS Fargate tasks for micro‑services, CloudWatch metrics (`HTTPCode_Target_5XX_Count`, `TargetResponseTime`) to trigger auto‑scale policies.

**Result**  
- 99th‑percentile latency dropped from **350 ms → 120 ms** (≈65% improvement).  
- CPU utilization balanced across nodes (+15% average).  
- Cost decreased by **12%** due to better resource utilization.  

**Reflection (Bar‑raiser)**  
I owned the end‑to‑end pipeline, dove deep into CloudWatch logs to identify bottlenecks, and quantified impact with clear KPIs. The failure mode—over‑weighting a single instance—was mitigated by adding circuit‑breaker logic in the routing script, turning a potential outage into a learning loop that now informs our auto‑scaling thresholds.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
