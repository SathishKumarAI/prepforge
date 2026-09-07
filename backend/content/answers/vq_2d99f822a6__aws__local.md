---
qid: vq_2d99f822a6__aws__local
question: What’s the last thing you bought, and why did you buy it?
topic: Behavioral
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 368
total_tokens: 602
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:45:10-05:00'
sources: []
---

**Situation & Task**  
I was preparing for a high‑stakes sprint on our serverless e‑commerce catalog. The existing Lambda code had 35 % cold‑start latency and we were about to launch a new product line that would spike traffic by >200 %. I needed a quick, cost‑effective way to reduce startup time without breaking the monolithic architecture.

**Action**  
I bought an **AWS Nitro Enclave‑enabled EC2 instance (c5.large)**. By moving the most CPU‑intensive image‑processing logic into a lightweight enclave and exposing it via API Gateway + Lambda, I reduced the overall cold‑start latency from 1.4 s to 0.6 s—**a 57 % improvement**. The instance cost $0.10/hr versus the previous $0.40/hr for the dedicated CPU pool, saving **$120/month**.

I documented the architecture on Confluence, ran a load test with Artillery (200 k requests/second), and monitored CloudWatch metrics to prove stability.

**Result**  
The new pipeline handled the traffic spike during launch without any errors; our uptime remained 99.999%. The cost savings translated into a **$1.5 M annual budget reprioritization** for product development.  

**Leadership Principles**  
- **Customer Obsession**: Delivered faster, more reliable service to end‑users.  
- **Ownership & Dive Deep**: Took full responsibility, dissected the root cause, and engineered a scalable, cost‑efficient solution.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
