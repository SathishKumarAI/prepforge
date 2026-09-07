---
qid: ing_d51fd8a216__faang__local
question: 'Explain: Retention Period — Amazon Kinesis Data Streams Terminology and
  concepts - Amazon Kinesis Data Streams'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 462
total_tokens: 706
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:55:17-05:00'
sources: []
---

**Retention Period – Amazon Kinesis Data Streams**

### Clarify  
*Problem:* What does “retention period” mean for a Kinesis stream, and how is it configured?  
*Assumptions to confirm:*  
- The stream stores records as a time‑ordered sequence.  
- Consumers read from shards; the data must be available long enough for replay or reprocessing.

### Approach  
1. Explain the concept of “time‑based retention.”  
2. Show how it is set per stream (default, min/max).  
3. Discuss implications on storage cost and consumer behavior.

### Depth  

| Item | Detail |
|------|--------|
| **Definition** | The window of time for which Kinesis keeps a record in the shard’s buffer after ingestion. |
| **Default** | 24 hours (1 day). |
| **Min / Max** | Minimum = 1 hour; Maximum = 365 days (subject to account limits). |
| **Configuration** | `RetentionPeriodHours` parameter on `CreateStream`, `UpdateShardCount`, or via console/CLI. |
| **Storage cost** | Charged per GB‑hour for the retained data. Longer periods increase cost linearly. |
| **Consumer impact** | Readers can reprocess older records within this window; if a consumer lags beyond it, those records are lost and must be re‑ingested. |

### Edge Cases  
- **High ingestion rate + short retention** → shard buffer overflows; records dropped.  
- **Very long retention** → storage costs explode; may hit account limits.  
- **Consumer failure** → data loss if not replayed before expiration.

### Optimize & Communicate  
Explain trade‑offs: choose the shortest period that satisfies business reprocessing needs to control cost, while ensuring consumers can keep pace (e.g., by checkpointing with DynamoDB). Emphasize monitoring CloudWatch metrics (`GetRecords.IteratorAgeMilliseconds`) to detect lag. Conclude with a recommendation: start at default, then adjust based on observed lag and cost budget.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
