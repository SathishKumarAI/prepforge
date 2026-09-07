---
qid: ing_39df4cf956__faang__local
question: 'Explain: Durability — What is Pub/Sub Messaging? - Pub/Sub Messaging Explained
  - AWS'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 495
total_tokens: 735
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:58:56-05:00'
sources: []
---

**Clarify**  
The interviewer asks how **Pub/Sub messaging** works in the context of durability on AWS. I’ll confirm: we’re discussing Amazon SNS/SQS or EventBridge patterns that guarantee message persistence and eventual delivery, not just fire‑and‑forget.

**Approach**  
1. Define “pub/sub” (publishers emit events; subscribers consume).  
2. Explain AWS services that implement it.  
3. Highlight durability guarantees: storage, retries, dead‑letter queues.  
4. Show how to design for fault tolerance and idempotency.

**Depth**  

| Layer | Mechanism | Durability Feature |
|-------|-----------|--------------------|
| **Publish** | SNS topic or EventBridge event bus | Events are written to highly replicated storage (multiple AZs). |
| **Transport** | SQS queue as a subscriber endpoint | Messages are stored on SSD across AZs; retries up to 4 weeks. |
| **Processing** | Lambda / EC2 poller | Idempotent handlers; DLQ for failures after max receives. |
| **Guarantee** | “At‑least‑once” delivery | SNS/SQS store until consumer acknowledges; if consumer crashes, message reappears. |

- **SQS FIFO queues** add ordering + exactly‑once semantics via deduplication IDs.  
- **Dead‑letter queues (DLQs)** capture undeliverable messages after `maxReceiveCount`.  

**Edge Cases**  
- Duplicate deliveries → implement idempotent logic or use SQS FIFO.  
- Backpressure when subscribers lag → increase queue visibility timeout or add more workers.  
- SNS topic deletion while publishing → publisher retries or fail‑fast with error callbacks.

**Optimize & Communicate**  
- Use **SQS Long Polling** to reduce empty responses (cost‑saving).  
- Partition topics by event type to balance load.  
- Monitor CloudWatch metrics (`ApproximateNumberOfMessagesVisible`, `AllMessagingFailures`) and set alarms for SLA breaches.  

*In sum*, Pub/Sub on AWS achieves durability by persisting events in replicated storage, retrying deliveries with exponential backoff, and routing failed messages to DLQs—ensuring that every message survives crashes, network partitions, or consumer outages.*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
