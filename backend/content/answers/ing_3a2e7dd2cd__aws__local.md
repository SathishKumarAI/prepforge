---
qid: ing_3a2e7dd2cd__aws__local
question: 'Explain: REST vs GraphQL — System Design was HARD until I Learned these
  30 Concepts'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 479
total_tokens: 717
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:37:48-05:00'
sources: []
---

**Situation (S)**  
While leading a data‑science team at my last company we had to expose two very different front‑ends—an internal dashboard and a public mobile app—to the same recommendation engine. The legacy API was RESTful; the new mobile app required low payloads and flexible queries, so we explored GraphQL.

**Task (T)**  
Design an API layer that supports both consumers with minimal latency, while staying cost‑effective on AWS.

**Action (A)**  
1. **Dive Deep into requirements** – measured average payload size for REST (≈ 2 KB) vs. GraphQL queries (≈ 0.5 KB).  
2. **Choose services** – Amazon API Gateway + Lambda for REST; AppSync with DynamoDB Streams for GraphQL.  
3. **Scalability & Availability** – both use AWS managed services; AppSync auto‑scales to 10k QPS, while API Gateway handles 100k RPS.  
4. **Cost trade‑offs** – estimated $0.30/1M REST calls vs. $0.20/1M GraphQL requests (due to fewer payloads).  
5. **Implementation & Monitoring** – instrumented CloudWatch metrics and X-Ray traces; set up alerts for query latency > 200 ms.

**Result (R)**  
Within 4 weeks we rolled out the dual‑API design. The mobile app’s data usage dropped by **47%**, leading to a 12% lift in user retention. Total monthly API cost fell from $2,400 to $1,700—a **29% savings**—while latency stayed under 120 ms for 99.5% of requests.

> *Leadership Principles:*  
> • **Customer Obsession** – tailored the API to each consumer’s needs.  
> • **Ownership & Dive Deep** – led the end‑to‑end design, quantified trade‑offs, and iterated on failure points (e.g., initial cold‑start latency).  

Bar‑raisers look for clear ownership, depth of analysis, measurable impact, and lessons learned—exactly what this solution demonstrates.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
