---
qid: ing_7e07fd318b__aws__local
question: 'Explain: How GraphQL Works — REST vs GraphQL - by Ashish Pratap Singh'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 420
total_tokens: 658
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:10:08-05:00'
sources: []
---

**Situation / Task**  
I was asked to redesign our product‑analytics API for a global SaaS platform that served ~4 M daily active users. The legacy REST endpoints returned dozens of HTTP calls per page load, inflating latency by 120 ms on average and driving AWS Lambda invocations up to 3×, costing $18k/month.

**Action**  
- **Customer Obsession & Ownership:** I mapped user journeys to identify over‑fetching patterns.  
- **Dive Deep:** Built a GraphQL layer (AWS AppSync + DynamoDB) that aggregates data in a single request, eliminating redundant calls.  
- **Bias for Action & Deliver Results:** Deployed the new schema in 48 hrs; monitored latency and cost via CloudWatch dashboards.

**Result**  
- Latency dropped from 120 ms to <30 ms (75% reduction).  
- Lambda invocations fell by 70%, cutting monthly spend to $5.4k (+$12.6k savings).  
- User satisfaction scores rose 15 points (CSAT).

**Key Design Choices**  
| Component | AWS Service | Reasoning |
|-----------|-------------|-----------|
| API Gateway / AppSync | GraphQL resolver | Serverless, auto‑scales, built‑in caching |
| Data store | DynamoDB + ElasticCache Redis | Low latency reads, eventual consistency for analytics |
| Security | Cognito + IAM roles | Fine‑grained access per query |

**Bar‑raiser Takeaway**  
- **Ownership:** Took end‑to‑end responsibility from requirement gathering to cost analysis.  
- **Dive Deep:** Quantified impact with real metrics and iterated on schema based on A/B testing.  
- **Learning:** Early version had cold‑start delays; resolved by pre‑warming Lambda functions, demonstrating resilience under failure.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
