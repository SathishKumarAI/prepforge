---
qid: ing_5cc5ea3453__star__local
question: 'Explain: Calculate usage — system-design-primer/solutions/system_design/pastebin/README.md
  at master \u00b7 donnemartin/system-design-primer \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 267
output_tokens: 419
total_tokens: 686
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:33:15-05:00'
sources: []
---

**Situation:**  
At my last job I was tasked with redesigning the analytics layer for our company’s internal Pastebin clone, which was used by over 12 000 developers daily. The existing metrics dashboard only showed total request counts and raw storage size; we had no insight into how many users were actively using the service or how often each paste was accessed.

**Task:**  
I needed to build a lightweight usage report that calculated per‑paste hit rates, average lifetime, and user engagement, all while keeping read latency under 50 ms and not adding significant cost to our existing infrastructure (AWS S3 for storage, DynamoDB for metadata).

**Action:**  
1. Added a CloudWatch metric filter on the API gateway logs to capture `GET /pastes/{id}` events.  
2. Stored each hit in a time‑series table in DynamoDB with a TTL of 30 days to keep size manageable.  
3. Wrote an AWS Lambda scheduled every hour that scans the hit table, aggregates counts per paste ID, and writes the results into a read‑optimized analytics table.  
4. Exposed a GraphQL endpoint backed by Aurora Serverless for ad‑hoc queries; the query uses the pre‑aggregated data to compute hit rates, average age, and user churn.  
5. Added alerts when a paste’s hit rate drops below 1 per day for over a week, prompting auto‑archiving.

**Result:**  
The new dashboard showed that 68 % of pastes were accessed at least once in the last month, while only 12 % were truly “hot.” We automated archiving for stale content, freeing up ~200 GB of S3 space and cutting storage costs by 15 %. The metrics also helped product managers identify which feature requests drove the most engagement. I learned how to balance real‑time tracking with cost‑effective storage using DynamoDB TTLs and scheduled aggregation.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
