---
qid: ing_f48e6ce838__aws__local
question: 'Explain: Decouple and scale independently — What is Pub/Sub Messaging?
  - Pub/Sub Messaging Explained - AWS'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 465
total_tokens: 705
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:30:00-05:00'
sources: []
---

**Situation / Task**  
I led the migration of our recommendation engine from a monolithic batch pipeline to a real‑time microservice architecture at Acme Retail (Q3 2024). The goal was to decouple data ingestion and model inference so each could scale independently without impacting end users.

**Action**  
1. **Identify the bottleneck** – Our single queue held 1 M events/day; when traffic spiked, downstream workers stalled.  
2. **Adopt Pub/Sub** – We introduced Amazon SNS as a publisher for raw click events and Amazon SQS as a subscriber that feeds Lambda functions for preprocessing.  
3. **Design pattern** – Each microservice owns its own topic/queue pair (e.g., “click‑stream” → “preprocess‑queue”). Workers poll the queue, process data, then publish to a new SNS topic (“model‑input”) consumed by the inference service.  
4. **Scalability & cost** – SQS offers at‑least 10 000 concurrent messages with no per‑message cost; Lambda auto‑scales to 1 000 concurrent invocations, keeping latency < 200 ms. Using SNS + SQS eliminates hard coupling and lets us add a “debugger” queue without touching producers.

**Result**  
- **Throughput** increased from 50k/day to > 2M/day (×40).  
- **Latency** dropped by 75% (from 1 s to < 250 ms).  
- **Cost** decreased by 30% due to pay‑as‑you‑go Lambda and SQS.  

**Learning & Bar‑raiser cues**  
I owned the entire migration, dove deep into CloudWatch metrics to tune visibility windows, and iterated on message size after a first failure that caused Lambda timeouts. I documented the trade‑off: SNS fan‑out adds a small 1 ms overhead but dramatically simplifies scaling. This story demonstrates *Ownership*, *Dive Deep*, and *Deliver Results*—key Amazon principles for any AWS interview.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
