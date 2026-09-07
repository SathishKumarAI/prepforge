---
qid: ing_893645147c__faang__local
question: 'Explain: Amazon SQS message quotas — Amazon SQS message quotas - Amazon
  Simple Queue Service'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 725
total_tokens: 966
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:03:36-05:00'
sources: []
---

## Clarify  
The interviewer asks about **Amazon SQS (Simple Queue Service) message quotas**—the limits on how many messages a queue can hold, how often they can be sent/received, and the size constraints. I’ll assume we’re talking about *standard* queues (not FIFO), and that the context is designing a system that might hit these limits.

## Approach  
1. List all SQS quota categories.  
2. Explain each limit’s purpose and typical values.  
3. Discuss how to discover current limits programmatically.  
4. Mention ways to increase or work around limits if needed.

## Depth  

| Category | Typical Value (per account) | Notes |
|----------|----------------------------|-------|
| **Maximum number of queues** | 10 000 | Unlimited per region if you request an increase. |
| **Maximum queue size** | 120 000 000 messages *or* 256 GB total | Either metric can hit first; SQS stores the message body in memory and on disk. |
| **Maximum message size** | 256 KB (standard) / 256 KB (FIFO) | Payload cannot exceed this; use S3 + reference if larger. |
| **Receive message wait time** | 0–20 s | Long‑polling up to 20 seconds per request. |
| **Send/receive API rate** | 300 000 messages/sec (global) | Roughly 5 k messages/sec per queue; burstable but capped by overall account limits. |
| **Maximum inflight messages** | 10 000 | Messages that have been received but not deleted. |

*How to check:*  
- AWS CLI: `aws sqs get-account-attributes`  
- SDK: `GetAccountAttributes` API call returns the same values.

*Increasing limits:*  
- Open a support ticket (service quota increase).  
- For queue size, consider partitioning data across multiple queues or off‑loading large payloads to S3 and storing only keys in SQS.

## Edge Cases  
- **Burst traffic**: Even if per‑queue rate is fine, the global account limit can be exceeded during a spike. Test with a stress script.  
- **Large messages**: Exceeding 256 KB will result in `InvalidParameterValue`. Verify payload size before sending.  
- **Inflight cap**: If consumers lag, inflight may hit 10 000 and further receives fail; monitor with CloudWatch metrics (`ApproximateNumberOfMessagesNotVisible`).  

## Optimize & Communicate  
In a production design I’d:

1. **Partition workloads**: Use multiple queues per logical stream to stay below the 5 k msg/sec limit.  
2. **Leverage long‑polling**: Set `ReceiveMessageWaitTimeSeconds=20` to reduce empty receives and cost.  
3. **Monitor metrics**: CloudWatch alarms on `ApproximateNumberOfMessagesVisible`, `Inflight`, and API error rates.  
4. **Graceful degradation**: If a queue nears its size limit, redirect new messages to a “staging” queue and batch‑process them into S3 or DynamoDB.

By articulating these limits, how to query them, and mitigation strategies, I demonstrate both depth of knowledge and a pragmatic approach to designing resilient, scalable messaging pipelines—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
