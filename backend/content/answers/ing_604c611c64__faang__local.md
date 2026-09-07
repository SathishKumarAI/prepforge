---
qid: ing_604c611c64__faang__local
question: 'Explain: Antipatterns for partition keys — Choosing the Right DynamoDB
  Partition Key | AWS Database Blog'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 464
total_tokens: 708
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:28:02-05:00'
sources: []
---

**Clarify**

You’re asking why certain “partition‑key” choices in DynamoDB are bad (antipatterns) and how to pick a good one. I’ll assume we’re dealing with a single‑table design, high write throughput, and need for horizontal scaling.

**Approach**

1. List common antipatterns.  
2. Explain the impact of each on hot partitions, latency, and cost.  
3. Show what constitutes a “good” key: evenly distributed, predictable cardinality, and supporting query patterns.

**Depth**

| Antipattern | Why it hurts | Remedy |
|-------------|--------------|--------|
| **Sequential IDs (e.g., timestamp‑only)** | Causes hot partitions because all writes go to the same PK. | Combine with a hash prefix or use a composite key (userID#timestamp). |
| **Low cardinality keys** (e.g., “status=active”) | All items share one partition → throttling and large scans. | Add a sharding suffix (`status#hash`). |
| **Predictable ranges** (e.g., year‑month) | Future growth concentrates in the newest month. | Rotate hash key or use random GUID prefix. |
| **Large hot spots for read/write mix** | Hot partitions hurt both reads and writes. | Distribute via composite keys that include a device/user ID. |

*Complexity*: With a good PK, each operation is O(1). Poor choices can lead to O(n) scans or throttling.

**Edge Cases**

- Sudden traffic spikes on a single “status” value → monitor CloudWatch metrics.  
- Extremely low cardinality data (e.g., only two status values) → consider redesigning the table or using an alternate store for that slice.

**Optimize & Communicate**

Recommend: `userID#timestamp` as PK, `eventType` as sort key; add a hash prefix (`hash(userID)#...`) if write volume is >10k ops/s. Explain that this balances load, keeps queries fast, and costs linear with traffic. Conclude by noting monitoring and iterative tuning are essential after deployment.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
