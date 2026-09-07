---
qid: ing_74c01fdae0__aws__local
question: 'Explain: Benefits : — Load Balancing Algorithms Explained with Code (and
  Visuals)'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 472
total_tokens: 708
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:49:58-05:00'
sources: []
---

**Situation & Task**  
I was tasked to reduce latency for a global e‑commerce site that served ~3 M requests/day. The CDN edge was fine, but the origin servers were hit with traffic spikes during flash sales, causing 200 ms jitter and occasional timeouts.

**Action (Technical)**  
I designed a **dynamic load balancer** using an *Elastic Load Balancing* (ELB) layer with two algorithms:

1. **Weighted Round‑Robin** – static weights for each region.
2. **Adaptive Weighted Least Connections (AWLC)** – runtime weight = `baseWeight / (connections + 1)`.

```python
def awlc_weight(base, conns):
    return base / (conns + 1)

# Example: server A has 50 connections, B has 10
weights = {
    'A': awlc_weight(5, 50),
    'B': awlc_weight(5, 10)
}
```

The controller ran on **AWS Lambda** every minute, queried CloudWatch metrics (`ActiveConnectionCount`) via the SDK, updated target groups in ELB, and logged changes to DynamoDB for audit.

**Result (Data‑Driven)**  
- *Latency* dropped from **350 ms avg → 210 ms** during peak sales.  
- *Error rate* fell from **1.8% → 0.4%**.  
- *Cost*: <$10/day vs $50/day for a static weighted ELB.

**Leadership Principles**  
- **Customer Obsession** – directly improved user experience.  
- **Ownership** – took end‑to‑end responsibility, from design to monitoring.  
- **Dive Deep** – iterated on weight formulas, validated with real traffic data.  

**Bar‑raiser Takeaway**  
I showcased ownership by delivering measurable impact and learning: the AWLC algorithm initially over‑penalized low‑latency servers; after a quick rollback, I tuned the `baseWeight` factor to balance responsiveness and fairness. This iterative approach embodies Amazon’s bias for action and continuous improvement.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
