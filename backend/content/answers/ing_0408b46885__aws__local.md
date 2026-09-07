---
qid: ing_0408b46885__aws__local
question: 'Explain: Backend Service Protection — Serverless Architecture - by Neo
  Kim'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 437
total_tokens: 670
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:33:48-05:00'
sources: []
---

**Customer Obsession & Ownership**

**Situation (S):**  
At my previous company we had a public‑facing recommendation engine that ran on EC2 instances. The service was hit by sudden traffic spikes and DDoS attacks, causing 12 % of our users to see 5‑second latency or even timeouts during peak holiday seasons.

**Task (T):**  
I was tasked with redesigning the backend so it could scale automatically, protect against malicious traffic, and cut operational costs by 30 %.

**Action (A):**  
1. **Serverless API Gateway + Lambda** – moved all request handling to AWS API Gateway with Lambda authorizers.  
2. **WAF & Shield Advanced** – deployed a Web Application Firewall rule set that blocked the top 10 attack vectors and enabled Shield for DDoS mitigation, reducing malicious traffic by 95 %.  
3. **Event‑driven Processing (SNS → SQS → Lambda)** – decoupled heavy ML inference jobs from the API layer; each job ran in a short‑lived Lambda that pulled messages from an SQS queue with a maximum receive count to avoid infinite retries.  
4. **Cost Optimization** – leveraged Lambda’s pay‑per‑execution model and set concurrency limits via Provisioned Concurrency during known traffic peaks, keeping idle costs near zero.

**Result (R):**  
- 99.9 % SLA achieved during holiday spikes.  
- Latency dropped from 5 s to <300 ms for 95 % of requests.  
- Operational cost fell by 32 %, and the team’s incident‑response time decreased by 70 %.  

*Bar‑raiser takeaways:* ownership (I drove the full migration), dive deep (analyzed traffic logs, attack patterns, Lambda cold‑start impacts), quantified impact (exact latency & cost numbers), and learning from failure (iterated WAF rules after a false positive).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
