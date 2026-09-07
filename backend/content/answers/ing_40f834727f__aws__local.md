---
qid: ing_40f834727f__aws__local
question: When will a load balancer (LB) will stop sending requests to a server?
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 407
total_tokens: 644
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:52:46-05:00'
sources: []
---

**Answer – Amazon Way**

**Leadership Principles:** *Customer Obsession* & *Dive Deep*

**Situation / Task**  
I was tasked to improve the reliability of our ML inference API that served 200 k requests/second across a fleet of GPU‑enabled EC2 instances behind an Application Load Balancer (ALB).

**Action**  
1. **Health checks:** Configured ALB target health checks to probe `/health` every 10 s, with *unhealthy threshold* = 3 and *healthy threshold* = 5.  
2. **Metric‑driven thresholds:** Leveraged CloudWatch metrics (`UnHealthyHostCount`, `TargetResponseTime`) to auto‑scale the target group.  
3. **Graceful shutdown logic:** Implemented a `/shutdown` endpoint that sets an instance flag; ALB stops routing new requests once the flag is set and the instance finishes current in‑flight inference jobs (max 30 s).  
4. **Cost/latency trade‑off:** Disabled *cross‑zone load balancing* to reduce inter‑AZ traffic cost, accepting a modest 2 % latency increase verified by synthetic tests.

**Result**  
- Reduced request loss during instance termination from 18 % to <0.5 %.  
- Cut autoscaling churn cost by 12 %, saving ~$15k/month.  
- Maintained SLA of 99.9 % response time under peak load.

**Bar‑raiser takeaways:**  
* Ownership – I owned the entire end‑to‑end health and shutdown flow.  
* Dive Deep – I debugged CloudWatch alarms, tuned thresholds, and validated with real traffic.  
* Quantified impact – concrete metrics on request loss and cost savings.  
* Learning from failure – initial design caused 18 % dropped requests; iterative tuning eliminated the issue.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
