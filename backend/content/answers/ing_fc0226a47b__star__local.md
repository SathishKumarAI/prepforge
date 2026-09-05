---
qid: ing_fc0226a47b__star__local
question: 'Explain: Prelaunch — AWS Scale - by Neo Kim - The System Design Newsletter'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 332
total_tokens: 574
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:52:41-05:00'
sources: []
---

**Situation**  
I was on the product team for a new SaaS analytics platform that had to support an overnight launch in a single region. Our beta traffic forecasted 15 k concurrent users within the first hour, but we were limited by a modest EC2 capacity budget.

**Task**  
Design a pre‑launch scaling strategy that could handle peak load without overspending, while ensuring zero downtime and consistent latency.

**Action**  
I built an Auto Scaling group with two launch configurations: one using on‑demand instances for the warm‑up period, then switching to Spot Instances via a mixed‑instance policy. I added a CloudWatch alarm on CPU and request latency that triggered a scaling policy to add capacity 10 % per minute up to a cap of 200 instances. To avoid “spot exhaustion” we configured a fallback to a small pool of reserved instances and enabled instance refresh with a rolling update strategy. I also set up an Application Load Balancer with sticky sessions and health checks, and used AWS WAF to block suspicious traffic spikes.

**Result**  
During launch the platform handled 18 k concurrent users for two hours before scaling down automatically. We stayed under budget by 27 % compared to a pure on‑demand plan, and response times remained below 200 ms. The exercise taught me how to blend spot markets with reserved capacity and automate graceful scaling based on real metrics.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
