---
qid: ing_e97f9a988b__aws__local
question: 'Explain: Circuit Breaker'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 225
output_tokens: 420
total_tokens: 645
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:05:52-05:00'
sources: []
---

**Scenario (S)**  
I was leading a data‑science team that deployed an online recommendation model behind a Lambda‑based inference API. After a sudden spike in traffic, the downstream feature store became throttled and our latency shot up from 50 ms to >2 s.

**Task (T)**  
Restore service quality while protecting the feature store and maintain trust with end users.

**Action (A)**  

1. **Own the problem (Ownership)** – I immediately opened a Jira epic, set up a Slack channel, and scheduled a real‑time monitoring drill.  
2. **Dive deep into metrics** – Using CloudWatch we saw 95 % of requests hit an `ThrottlingException`.  
3. **Implement a circuit breaker** –  
   * **AWS services**: Lambda, API Gateway, DynamoDB (for state), and Step Functions for orchestration.  
   * **Design**: A lightweight Lambda wrapper tracks consecutive failures; after 5 in a row it flips the circuit to “open” for 30 s, returning a cached fallback response (`Cache-Control: stale-while-revalidate`). The state is stored in DynamoDB with TTL to auto‑reset.  
4. **Bias for action** – I deployed the change via CodePipeline in 12 min and monitored the impact.

**Result (R)**  

* Latency dropped back to <80 ms within 5 min.  
* Failure rate reduced from 15 % to <1 %.  
* Customer satisfaction (NPS) improved by 8 points over the next week.  

The bar‑raiser will note my ownership, deep metric analysis, quantified impact, and learning loop: we later added predictive throttling alerts using SageMaker Forecasting to pre‑emptively open the circuit.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
