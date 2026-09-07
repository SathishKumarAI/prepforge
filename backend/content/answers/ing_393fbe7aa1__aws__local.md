---
qid: ing_393fbe7aa1__aws__local
question: 'Explain: System Design: TINDER as a microservice architecture'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 456
total_tokens: 688
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:34:28-05:00'
sources: []
---

**Context & Challenge (S)**  
I was asked to redesign Tinder’s core matching engine as a set‑of microservices for a global rollout. The goal: reduce latency by 30 % while supporting 10 M daily active users and a 5× growth in the next year.

**Action (T)**  
1. **Decompose into services** – *Matching*, *User Profile*, *Recommendation Engine*, *Analytics* and *Notification*.  
2. **Data store** – DynamoDB for user profiles (low‑latency reads/writes), S3 + Athena for historical logs, and Neptune for graph traversal of “swipe” relationships.  
3. **Compute** – Lambda + Step Functions orchestrate the recommendation workflow; SageMaker endpoints host a boosted tree model that scores potential matches in real time.  
4. **Messaging** – EventBridge routes swipe events to downstream services with at‑least‑once semantics, guaranteeing eventual consistency.  
5. **Observability** – CloudWatch metrics + X-Ray traces expose latency per service; Auto Scaling based on percentile thresholds keeps 99.9 % of requests <150 ms.

**Result (R)**  
- Latency dropped from 250 ms to 170 ms (+32 %).  
- Throughput increased by 5× with no outage during peak traffic spikes.  
- Operational cost decreased 18 % by using serverless compute and DynamoDB on‑demand pricing.  

**Learnings (A)**  
I owned the trade‑off between eventual consistency and real‑time accuracy, documenting that a 200 ms staleness window was acceptable for user experience while keeping costs low. The bar‑raiser will note my ownership of metrics, deep dive into AWS services, and data‑driven impact—exactly what Amazon expects.  

**Leadership Principles**  
*Customer Obsession* (fast, reliable matches) + *Ownership* (end‑to‑end delivery from design to ops).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
