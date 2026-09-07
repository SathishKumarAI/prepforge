---
qid: ing_2a0aca17b4__aws__local
question: 'Explain: Debugging and Observability — What is an API? | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 429
total_tokens: 665
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:00:25-05:00'
sources: []
---

**Situation & Task (S)**  
While building a real‑time recommendation engine for an e‑commerce platform, the data science team noticed that model inferences were lagging by 2 s on peak traffic days. I was tasked with diagnosing the bottleneck and making the inference pipeline observable.

**Action (A)**  
I treated the inference endpoint as an **API**—a stateless contract exposed over HTTPS that accepts a user profile and returns ranked items.  
1. **Observability**: Instrumented the API with CloudWatch metrics (`latency`, `error_rate`) and X-Ray traces to see request paths.  
2. **Debugging**: Enabled detailed logs in Lambda (or ECS Fargate) for each inference call, capturing payload size, model version, and response time.  
3. **Design**: Switched from a single Lambda function to an **Amazon SageMaker endpoint** behind an Application Load Balancer, scaling based on `RequestCount` metrics. Added CloudWatch Alarms that trigger auto‑scaling of the endpoint’s instance count.  
4. **Cost & Trade‑offs**: The new design costs ~15 % more but reduces latency from 2 s to <200 ms and drops error rate by 90 %. I also added an SNS notification for any spike above 95th percentile.

**Result (R)**  
Post‑deployment, average inference latency fell to **180 ms**, throughput increased by **120 %**, and SLA compliance rose from 88 % to **99.5 %** within the first week.  

---

### Leadership Principles Highlighted
- **Customer Obsession** – Delivering a faster recommendation experience directly improves user satisfaction.  
- **Ownership & Dive Deep** – I took full ownership of the API’s health, dug into metrics, and iterated until the system met performance goals.

---

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
