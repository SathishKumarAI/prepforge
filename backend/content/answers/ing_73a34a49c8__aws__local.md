---
qid: ing_73a34a49c8__aws__local
question: 'Explain: Advantages: — Stateful vs. Stateless Architecture'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 435
total_tokens: 665
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:47:15-05:00'
sources: []
---

**Situation (S)**  
In my last role I led the migration of a recommendation engine from a monolithic Spring Boot service to a serverless micro‑service stack on AWS. The legacy app was **stateful**, holding user session data in Redis and processing every request through the same JVM, which caused 30 % CPU spikes during peak traffic.

**Task (T)**  
I had to redesign the system to be **stateless** so we could scale out automatically with demand while keeping latency below 100 ms for 95 % of requests.

**Action (A)**  
1. *Dive Deep*: profiled request flows and identified that only a small subset of data needed persistence across calls.  
2. Replaced Redis with **Amazon DynamoDB** (eventual consistency, 10 µs reads) for user profile lookup and switched the compute layer to **AWS Lambda + API Gateway** – fully stateless functions.  
3. Added **Amazon SQS** as a queue between front‑end requests and Lambda to buffer bursts.  
4. Implemented *Lambda Destinations* for retries, ensuring no data loss.

This design eliminated shared JVM state, removed the 30 % CPU bottleneck, and cut operating costs by **$18k/month** (from $45k to $27k) while maintaining a 99.9 % SLA.  

**Result (R)**  
The new architecture handled 4× traffic with <10 ms added latency, proving that stateless services scale linearly and cost‑effectively.

---

> **Leadership Principles Highlighted**  
- **Customer Obsession**: Delivered faster, more reliable recommendations.  
- **Ownership & Dive Deep**: Took full responsibility for the migration, profiled performance, and chose optimal AWS services.  

Bar‑raisers look for clear ownership, deep technical justification, quantified impact, and lessons learned (e.g., we initially underestimated DynamoDB read capacity but adjusted after real traffic).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
