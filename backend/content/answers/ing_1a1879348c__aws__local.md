---
qid: ing_1a1879348c__aws__local
question: 'Explain: in the font size or the style — Google Docs System design | Part
  1| Operational transformation | differentail synchronisation'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 594
total_tokens: 840
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:25:30-05:00'
sources: []
---

**Situation & Task (S)**  
At a previous startup I was tasked with designing the real‑time collaboration core for a word‑processor that could support 200 k concurrent users without lag. The key requirement was *operational transformation* (OT) to keep every client’s document state consistent while allowing offline edits.

**Action (A)**  
I broke the problem into three layers:

1. **Client‑side OT engine** – a lightweight JavaScript library that applies local operations immediately and queues remote ops for re‑application.  
2. **Server‑side OT coordinator** – a stateless microservice on **AWS Lambda** (Python 3.11) that receives ops, transforms them against the current document version using a well‑known algorithm (e.g., *COT*), and returns the transformed op to all clients.  
3. **Synchronization bus** – **Amazon Kinesis Data Streams** streams ops in order; each shard guarantees sequential delivery per document. The Lambda reads from the stream, writes the new state to **DynamoDB** (partition key = `docId`, sort key = `version`), and publishes a notification via **SNS** to all subscribed clients.

*Scalability*: Kinesis shards scale horizontally; each Lambda instance handles one shard, so 1 M ops/sec can be processed with ~10 k concurrent Lambdas.  
*Availability*: DynamoDB’s global tables keep data in sync across regions (latency < 50 ms).  
*Cost*: Roughly $0.000016 per op for Lambda + $0.015 per GB‑hour for Kinesis; for 1 M ops/day this stays under $200/month.

**Result (R)**  
After deployment, the system handled 300 k concurrent users with <30 ms average latency per operation and zero merge conflicts in production tests. A/B testing showed a 35 % drop in user-reported “lag” versus our previous polling‑based approach.

---

### Amazon Leadership Principles Highlighted
- **Customer Obsession** – built a frictionless, instant‑sync experience that reduced perceived lag by 35 %.  
- **Ownership & Dive Deep** – architected the entire OT pipeline, chose AWS services for cost/latency trade‑offs, and tuned Lambda concurrency after profiling failures.

### What a Bar‑Raiser Looks For
- Clear ownership of every layer.  
- Depth in OT algorithm choice and reasoning about consistency guarantees.  
- Quantified impact (latency, user‑reported lag).  
- Learning loop: identified failure modes during spike tests (e.g., out‑of‑order ops) and added idempotent operation IDs to the protocol.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
