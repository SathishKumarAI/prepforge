---
qid: ing_a45351e950__faang__local
question: 'Explain: Request a Unique ID — Design URL Shortener | System Design Interview
  | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 476
total_tokens: 718
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:07:20-05:00'
sources: []
---

**Clarify**  
You need a scalable service that turns an arbitrary long URL into a short, unique token (e.g., `https://short.ly/abc123`). The token must be collision‑free, easy to generate, and map back to the original URL. Assume millions of requests per day, 10⁹ distinct URLs, low latency (<100 ms), and eventual consistency.

**Approach**  
1. **API layer** – POST `/shorten` with `original_url`; GET `/r/{token}` redirects.  
2. **Token generation** – Base‑62 encode a monotonically increasing counter (or use a Snowflake ID).  
3. **Storage** – Hash table (e.g., DynamoDB/Redis) mapping token→URL; optionally a reverse map for deduplication.  
4. **Routing** – CDN + edge cache to serve redirects quickly.  
5. **Monitoring** – Metrics on hits, collisions, latency.

**Depth**  
- **Token size**: 7 chars ≈ 62⁷≈3·10¹² possibilities → > 1 billion URLs with <1% collision probability.  
- **Counter persistence**: Store last counter in a distributed lock (e.g., DynamoDB `PutItem` with conditional expression).  
- **Redundancy**: Replicate data across AZs; use eventual consistency for reads to keep latency low.  
- **Complexity**: O(1) generation, O(log N) lookup if using B‑tree DB, but sharded key‑value gives near O(1).

**Edge Cases**  
- Duplicate URLs → return same token (check reverse map).  
- Invalid URL format → 400 Bad Request.  
- Token not found → 404.  
- Counter overflow → rotate to a new namespace.

**Optimize & Communicate**  
To reduce latency, pre‑warm the cache with popular tokens and batch writes during low traffic. Explain trade‑offs: higher counter resolution reduces collisions but increases storage; eventual consistency speeds reads at the cost of stale redirects. Conclude by summarizing the system’s ability to scale horizontally while keeping user experience fast.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
