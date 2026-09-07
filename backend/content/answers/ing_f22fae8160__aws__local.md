---
qid: ing_f22fae8160__aws__local
question: 'Explain: Q113: Your computer-use agent passes demos but fails 30% of real
  workflows in production. Walk through your reliability engineering plan.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 248
output_tokens: 412
total_tokens: 660
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:24:33-05:00'
sources: []
---

**Situation & Task**  
In the last sprint my AI‑driven computer‑use agent scored 95 % on internal demos but dropped to 70 % in production – a 30 % failure rate for critical workflows (≈ $1M/yr impact). I had to build a reliability engineering plan that would close the gap while keeping latency <50 ms.

**Approach & Actions**  
*Ownership + Dive Deep*: I created a **Reliability Scorecard** in CloudWatch, aggregating success rates, error codes and user‑reported incidents. Using *AWS X-Ray* I traced 200 failed runs to discover that 68 % were caused by out‑of‑range inputs the demo set didn’t cover.  
I added an **Input Validation Service** (API Gateway + Lambda) that rejects anomalous requests with a 400 response and logs them for later training.  
For *availability*, I deployed the agent behind an **Application Load Balancer** with a weighted round‑robin to a new **Blue/Green** environment, allowing A/B testing of model updates without downtime.  
To *reduce cost* I switched from on‑demand GPU instances (p3.xlarge) to **Spot Instances** with a 30 % price drop, backed by an auto‑scaling group that keeps at least one healthy copy per AZ.

**Result**  
Within two weeks the production success rate climbed to 97 %, cutting potential losses from $1M to <$50k/yr. I logged the lessons in the post‑mortem: “Simulate edge cases early” and scheduled quarterly **Chaos Engineering drills** (using AWS Fault Injection Simulator) to keep confidence high.

*Key Amazon Leadership Principles*: **Ownership**, **Dive Deep**, **Bias for Action**, **Deliver Results**.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
