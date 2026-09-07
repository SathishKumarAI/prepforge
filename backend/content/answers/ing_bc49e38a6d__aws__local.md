---
qid: ing_bc49e38a6d__aws__local
question: Your product adds thumbs up/down on assistant messages. What do you build,
  and where does the data go?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 430
total_tokens: 671
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:29:33-05:00'
sources: []
---

**Situation & Task (S)**  
I was tasked to add a thumbs‑up/down feature to our AI assistant so that we could surface the most useful responses and continuously improve the model. The goal: collect actionable feedback while keeping latency <50 ms and staying within a $5k/month budget.

**Action (A)**  
1. **Client‑side:** Added a lightweight React component that posts an event (`feedback`) to API Gateway with `message_id`, `user_id`, and `vote`.  
2. **API Layer:** API Gateway triggers a Lambda (`RecordFeedback`) which writes the vote into a *dynamo* table (partition key = `message_id`).  
3. **Analytics Pipeline:** The same Lambda pushes an event to Kinesis Data Streams → Kinesis Firehose → S3 (raw logs). A Glue job aggregates votes per message every 5 min and writes a summary CSV to S3.  
4. **Model Update:** Every night, a SageMaker training job pulls the aggregated data, retrains the ranking model, and pushes the new artifact to S3/Model Registry.

**Result (R)**  
- Latency remained <45 ms; 99th percentile traffic handled without throttling.  
- The feedback loop reduced low‑quality responses by **32%** in two weeks (measured via downstream click‑through).  
- Cost stayed at $4.8k/month—below the target.

**Learning & Ownership**  
I owned the end‑to‑end flow, dug deep into Dynamo TTL and Kinesis shard sizing to avoid hotspots, and iterated on the aggregation logic after a spike in anomalous votes. This aligns with *Customer Obsession* (improving user experience) and *Ownership* (responsible for reliability & cost).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
