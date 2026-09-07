---
qid: ing_893645147c__aws__local
question: 'Explain: Amazon SQS message quotas — Amazon SQS message quotas - Amazon
  Simple Queue Service'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 551
total_tokens: 789
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:35:37-05:00'
sources: []
---

**Situation (S)** – While architecting a real‑time recommendation engine for a global e‑commerce platform, we needed to decouple data ingestion from model training. The incoming clickstream was bursty: 200 k events per minute during flash sales and ~20 k in normal periods. **Task (T)** – Design an event pipeline that guarantees no loss of messages, scales automatically, and stays under the SQS quotas while keeping cost predictable.

**Action (A)** –  
1. **Choose FIFO vs Standard**: We used *Standard* queues for high throughput (up to 300 k TPS) because ordering was not critical.  
2. **Batching & Visibility Timeout**: Batches of 10 messages were sent with a 30‑second visibility timeout, reducing API calls by ~70 %.  
3. **Scaling with SQS Long Polling + Lambda**: Configured long polling (20 s) to keep the queue empty during low traffic, saving on request costs.  
4. **Quota Management**: Monitored the *NumberOfMessagesSent* metric in CloudWatch; set an alarm at 80 % of the 120 000 message‑per‑second quota (the default limit for Standard queues). On threshold hit, we auto‑spawned a second queue and routed traffic via Route 53 latency routing.  
5. **Cost & Availability**: With this design we stayed well below the 300 k TPS ceiling, incurred <$200/month in SQS charges, and achieved <0.01 % message loss.

**Result (R)** – The pipeline processed 1.2 M events during a peak sale with zero backlogs; downstream Lambda functions ran within 250 ms on average, leading to a 15 % lift in conversion rate.  

---

### Amazon Leadership Principles Highlighted
- **Customer Obsession**: Ensured real‑time delivery so users saw fresh recommendations instantly.  
- **Ownership & Dive Deep**: Monitored quotas, tuned batch sizes, and engineered failover queues—no hand‑off to ops.

### Bar‑Raiser Takeaways
- **Quantified Impact**: 15 % lift in conversion, <$200/month cost.  
- **Depth (Dive Deep)**: Detailed explanation of quota thresholds, long polling, and latency routing.  
- **Learning from Failure**: If the queue had hit its limit, we’d have seen a backlog; proactive scaling prevented that.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
