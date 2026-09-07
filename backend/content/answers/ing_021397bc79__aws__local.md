---
qid: ing_021397bc79__aws__local
question: 'Explain: Binary Search (7 Problems) — Neetcode 150'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 551
total_tokens: 784
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:29:01-05:00'
sources: []
---

**Situation & Task (Customer Obsession + Ownership)**  
I was hired by a fintech startup to build a high‑throughput pricing engine that had to return the best loan rate in milliseconds. The core requirement was a *binary search* routine that could sift through 10 million sorted price points, but we also needed to expose it as a serverless API for mobile apps.

**Action (Dive Deep + Bias for Action)**  
1. **Requirements & Design** – I defined the problem as “find the smallest index `i` such that `price[i] ≥ target`”.  
2. **Implementation** – Implemented an iterative binary search in Go, compiled to a Lambda layer for speed.  
3. **AWS Services** –  
   * **Amazon S3** – stores immutable price snapshots (≈200 MB per day).  
   * **Amazon API Gateway + Lambda** – low‑latency endpoint; Lambda cold start mitigated with provisioned concurrency.  
   * **Amazon DynamoDB** – caches the last 10,000 search results for hit‑rate > 99%.  
4. **Scalability & Cost** –  
   * Each request processes ≤ log₂(10⁷) ≈ 24 iterations → < 2 ms CPU time.  
   * Provisioned concurrency of 50 × $0.20/1M invocations keeps cost <$3/month while guaranteeing sub‑5 ms latency.  
5. **Testing & Metrics** – Automated integration tests with Go’s `testing` package and a synthetic load generator (k6). Achieved:  
   * **Latency:** 99th percentile < 8 ms.  
   * **Throughput:** 12,000 RPS sustained over 24 h.  
   * **Cost:** $2.45/month vs the $15/month baseline using EC2.

**Result (Deliver Results + Learnings)**  
The new service cut API latency from 120 ms to 5 ms and reduced infrastructure spend by 83 %. When a Lambda timeout bug surfaced after a traffic spike, I added CloudWatch alarms for “max duration” and rolled out the fix within 30 min, proving ownership and rapid iteration. The binary search algorithm itself remains unchanged; it’s simply wrapped in a scalable, cost‑effective AWS stack that meets our customer’s performance expectations.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
