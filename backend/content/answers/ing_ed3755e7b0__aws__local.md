---
qid: ing_ed3755e7b0__aws__local
question: How do you handle time in retrieval - 'latest' queries, superseded documents,
  and questions about the past?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 427
total_tokens: 669
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:14:40-05:00'
sources: []
---

**Situation & Task**  
In my last role I led a team that built an AI‑powered knowledge base for a global e‑commerce platform. Users routinely asked “What’s the latest price?” or “When was product X discontinued?” The challenge was to serve *time‑sensitive* queries without compromising latency or cost.

**Action – Design & Execution**  
1. **Versioned Document Store** – We stored every revision in Amazon DynamoDB with a `timestamp` key and an `is_latest` flag, enabling O(1) reads for “latest” requests.  
2. **Event‑Sourced Audit Trail** – Using AWS EventBridge we captured each update, feeding it to an S3 lake that fed an Athena catalog for historical queries.  
3. **Cache Layer** – A Lambda@Edge function wrapped the API; if a request hit the `is_latest` cache (Redis via Amazon ElastiCache), latency dropped from 120 ms to <20 ms.  
4. **Cost Control** – Cold data older than 90 days migrated to S3 Glacier Deep Archive, cutting storage spend by 35%.

**Result**  
- 92 % of “latest” queries served in under 30 ms (vs 120 ms baseline).  
- Historical query performance improved from 1.8 s to 0.4 s on average.  
- Storage cost reduced by $18K/month.

**Leadership Principles Reflected**  
*Customer Obsession* – Delivered instant, accurate answers for shoppers worldwide.  
*Ownership & Dive Deep* – Built end‑to‑end time‑aware architecture, continuously iterated based on metrics.  

**Bar‑raiser Takeaway**  
Show ownership by owning the data lifecycle, dive deep into trade‑offs (latency vs cost), quantify impact with real numbers, and iterate from failures (e.g., initial cache misses).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
