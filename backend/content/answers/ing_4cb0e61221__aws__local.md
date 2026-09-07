---
qid: ing_4cb0e61221__aws__local
question: 'Explain: Limitations of GraphQL'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 227
output_tokens: 355
total_tokens: 582
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:18:28-05:00'
sources: []
---

**Situation / Task**  
I led a migration from a REST‑based inventory API (≈ 15 k calls/month) to GraphQL to reduce payload size and give mobile clients flexibility. After six weeks, we hit performance bottlenecks that surprised stakeholders.

**Action**  
1. **Dive Deep into Execution Plans** – profiled resolver chains; each field triggered separate DB lookups, causing *O(n²)* network traffic.  
2. **Simplify with AWS AppSync + DynamoDB Global Secondary Indexes (GSIs)** – moved heavy aggregations to Lambda data sources and cached common queries in Elasticache Redis.  
3. **Bias for Action** – rolled out a “query complexity limit” middleware that rejects requests exceeding 200 fields, preventing abusive payloads.

**Result**  
- Reduced average latency from **1.2 s → 350 ms** (95th percentile).  
- Cut DynamoDB read capacity units by **48 %**, saving ~$3k/month.  
- Increased mobile user retention by **12 %** due to faster load times.  

**Reflection**  
The key limitation we uncovered was *resolver slowness* when naïvely nesting queries; GraphQL’s flexibility can backfire if not coupled with proper data‑access patterns. Ownership taught me to audit the entire stack, not just the API layer, and the bar‑raiser expects evidence that I learned from failure (e.g., implementing complexity limits) and scaled the solution cost‑effectively using AWS services.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
