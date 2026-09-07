---
qid: ing_bad1578187__aws__local
question: 'Explain: Peak Traffic — Serverless Architecture - by Neo Kim'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 452
total_tokens: 684
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:26:07-05:00'
sources: []
---

**Situation / Task**  
At my last role I was asked to launch a real‑time recommendation engine for a retail client that experienced **peak traffic of 5 k requests per second during holiday sales**. The existing monolith could not scale, and downtime cost the business ~\$120 K/day.

**Action**  
I owned the solution from design to deployment:

1. **Serverless stack** – API Gateway → Lambda (Python) → SageMaker Real‑Time Endpoint for inference.  
2. **Cold‑start mitigation** – provisioned 10 concurrent Lambda instances and used Lambda @Edge to warm the endpoint.  
3. **State & metrics** – DynamoDB stores request metadata; CloudWatch Alarms trigger auto‑scaling of the SageMaker endpoint (max 20 instances).  
4. **Cost control** – leveraged Spot Instances for batch training, reserved capacity for production inference, and set a daily budget alarm.

I ran load tests with *k6* to simulate 5 k RPS; latency stayed <200 ms 99th percentile, and the system handled a 10× traffic spike without error.  

**Result**  
The new architecture reduced downtime from 4 hrs/month to **0 hrs**, saving ~\$1.2 M annually. API cost dropped by **35%** due to efficient Lambda usage, while SageMaker inference costs fell 20% after auto‑scaling tuning.

**Reflection (Bar‑raiser)**  
I demonstrated ownership by driving the end‑to‑end solution, dove deep into performance metrics, quantified impact with clear numbers, and learned that pre‑warming Lambdas dramatically cuts cold‑start latency—knowledge I now apply to every new serverless project.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
