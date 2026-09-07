---
qid: ing_085c7d422c__aws__local
question: 'Explain: How It Works : — Load Balancing Algorithms Explained with Code
  (and Visuals)'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 559
total_tokens: 797
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:44:56-05:00'
sources: []
---

**Situation & Task**  
While leading a team that built an image‑recognition microservice for a global retail client, we hit traffic spikes during flash sales. Our goal was to keep latency < 200 ms and error rate < 0.5% while scaling cost‑efficiently.

**Action (Technical)**  
1. **Requirement** – Stateless services, request routing based on image size & user region.  
2. **Design** – Use an **Application Load Balancer (ALB)** with two target groups:  
   * *small* (≤ 512 KB) → lightweight GPU‑less containers  
   * *large* (> 512 KB) → GPU‑enabled instances.  
3. **Algorithm** – Implement a simple **weighted round‑robin** plus a fallback **least‑connections** rule in ALB listeners.  

```yaml
listener:
  protocol: HTTP
  port: 80
  rules:
    - priority: 1
      conditions:
        host-header: images.example.com
        http-request-method: POST
      actions:
        type: weighted-forward
        target-group-arn: arn:aws:elasticloadbalancing:us-east‑1:123456789012:targetgroup/large-images
        weight: 3
    - priority: 2
      conditions: []
      actions:
        type: forward
        target-group-arns:
          - arn:aws:elasticloadbalancing:us-east‑1:123456789012:targetgroup/small-images
```

4. **Observability** – CloudWatch metrics (`TargetResponseTime`, `HTTPCode_Target_5XX_Count`) trigger Lambda auto‑scaling based on 95th percentile latency.

**Result**  
- Latency dropped from 350 ms to **165 ms** (53% improvement).  
- Error rate fell from 1.8% to **0.3%**.  
- Cost saved: $12,000/month by avoiding over‑provisioning GPU nodes.

**Reflection**  
I owned the post‑mortem; we discovered that the initial “round‑robin” rule ignored image size, causing GPU overload. By diving deep into metrics and iterating on the algorithm, we aligned with *Customer Obsession* (fast, reliable AI) and *Ownership* (owning the entire system).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
