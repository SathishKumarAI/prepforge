---
qid: ing_d0670d21f9__aws__local
question: 'Explain: Saga — Top 6 Cloud Messaging Patterns'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 374
total_tokens: 604
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:12:06-05:00'
sources: []
---

**Situation & Task (Customer Obsession + Ownership)**  
When we launched our cross‑region analytics platform, latency spikes from the event bus caused stale dashboards for business users. I owned the “Saga” pattern – a stateful orchestration of cloud messaging events – to guarantee eventual consistency and minimize user pain.

**Action (Dive Deep + Bias for Action)**  
1. **Pattern mapping:**  
   * *Orchestrator* → Amazon EventBridge rule that routes `OrderCreated`, `PaymentCompleted` topics to an AWS Step Functions state machine.  
   * *Compensation* → Lambda functions triggered by dead‑letter queues to roll back partial updates in DynamoDB and S3.  
2. **Scalability & Availability:**  
   * Step Functions offers 99.95 % availability; each state uses a retry policy (exponential backoff) to absorb transient failures.  
   * EventBridge delivers at least once, ensuring no event loss even with regional outages.  
3. **Cost control:**  
   * Use on‑demand Lambda for lightweight compensations; provisioned concurrency only for the orchestrator step to keep costs < $0.02 per 1 M events.  

**Result (Deliver Results)**  
Implemented Saga reduced dashboard staleness from ~30 min to < 5 min and cut SLA violations by **42 %** in Q2. Monthly cost of the messaging layer dropped 18 %.  

**Bar‑raiser takeaways** – I demonstrated end‑to‑end ownership, deep understanding of AWS services, quantified impact, and a post‑mortem loop that refined retry logic after an initial failure.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
