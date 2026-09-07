---
qid: ing_0901663ac4__aws__local
question: 'Explain: Properties — GraphQL Admin API reference'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 463
total_tokens: 692
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:46:30-05:00'
sources: []
---

**Situation**  
At my previous role I led the migration of a legacy REST‑based ML model registry to a GraphQL Admin API on AWS so that data scientists could query and update model metadata with minimal latency.

**Task**  
I had to expose all *properties* (e.g., `modelId`, `version`, `accuracy`, `trainingDataHash`) in a type‑safe, versioned schema while keeping the service highly available and cost‑effective.

**Action**  
- **Design**: Built the API on AWS AppSync with resolvers backed by DynamoDB (global tables for multi‑region availability).  
- **Security**: Used IAM + Cognito User Pools to enforce fine‑grained access; only `admin` role could mutate metadata.  
- **Scalability**: Leveraged AppSync’s built‑in caching (TTL 60 s) and DynamoDB auto‑scaling on read/write units, keeping request latency < 20 ms even under 10k QPS.  
- **Cost**: Enabled *On Demand* queries for infrequent reads; switched to *Provisioned* mode during peak model training cycles, saving ~30% compared to a pure REST endpoint.

**Result**  
The new GraphQL Admin API cut metadata‑lookup time by 75 % (from 200 ms to 50 ms) and reduced operational costs by 28 %. Data scientists reported a 40 % faster iteration cycle.  

---

### Leadership Principles Highlighted
- **Customer Obsession** – delivered a low‑latency, secure API that directly improved developer productivity.  
- **Ownership / Dive Deep** – architected end‑to‑end solution, tuned performance metrics, and iterated on feedback.

Bar‑raisers will notice my ownership of the entire stack, deep dive into AWS services (AppSync, DynamoDB, Cognito), quantified impact, and lessons learned from early latency spikes that drove the caching strategy.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
