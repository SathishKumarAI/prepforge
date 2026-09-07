---
qid: vq_0aa1524787__aws__local
question: How does one select the TOP N rows from a table?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 509
total_tokens: 741
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:38:09-05:00'
sources: []
---

**Behavioral (STAR – Deliver Results & Ownership)**  
*Situation:* While revamping the analytics dashboard for a SaaS client, I was asked to provide real‑time “top 10 revenue customers” without impacting production latency.  
*Task:* Build an efficient query that returns the top N rows on every refresh (every 30 s) while keeping costs under $50/month.  
*Action:* I benchmarked three approaches: a plain `ORDER BY … LIMIT`, a window function with `ROW_NUMBER()`, and a pre‑aggregated materialized view refreshed via Lambda + DynamoDB Streams. I chose the **materialized view** pattern, storing only the 10 rows in a low‑latency DAX cache backed by Aurora Serverless.  
*Result:* Query latency dropped from 1.2 s to <20 ms, and query cost fell from $0.13/hr to $0.02/hr—an **84 %** savings—and I earned the team’s “Data‑Driven Decision” badge.

---

**Technical Design (Dive Deep & Bias for Action)**  

| Requirement | Solution | AWS Services | Scalability | Availability | Cost |
|-------------|----------|--------------|------------|---------------|------|
| Return top N rows on demand | Pre‑aggregate & cache | **Aurora Serverless + DAX** | Auto‑scales to millions of queries per day | Multi‑AZ Aurora + DAX cluster | <$0.05/hr for 10 rows |
| Keep data fresh (≤30 s) | DynamoDB Streams → Lambda → Aurora UPDATE | **DynamoDB, Lambda, EventBridge** | Handles >10k writes/sec | Lambda concurrency limits | <$1/mo |

*Trade‑offs:*  
- **Window function** is simpler but locks the table and can’t meet <20 ms latency.  
- **Full table scan + LIMIT** scales poorly; each refresh costs O(N).  

By adopting a write‑through cache, we achieved low cost, high availability, and the required freshness—all while keeping our codebase simple for future maintainers.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
