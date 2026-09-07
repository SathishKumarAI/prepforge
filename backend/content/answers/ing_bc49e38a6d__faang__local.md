---
qid: ing_bc49e38a6d__faang__local
question: Your product adds thumbs up/down on assistant messages. What do you build,
  and where does the data go?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 456
total_tokens: 700
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:00:47-05:00'
sources: []
---

**Clarify**  
You’re asked to design a “thumbs‑up / thumbs‑down” feedback button for an AI assistant’s responses.  
Key assumptions:  
1. Feedback is binary, per message, and tied to a user session.  
2. The system must preserve privacy; no raw text or personally identifying info should be stored.  
3. We need real‑time analytics (to adjust ranking/temperature) and long‑term model training signals.

**Approach**  
1. **Client side** – add a small icon set next to each assistant reply, capture click + timestamp.  
2. **API layer** – POST `/feedback` with `{session_id, message_id, rating:±1}`. Use TLS & OAuth for auth.  
3. **Data store** – write to a partitioned event log (Kafka/Cloud Pub/Sub).  
4. **Processing** – stream consumer aggregates per‑model‑version stats, updates a read‑optimized analytics table (BigQuery / Redshift).  
5. **Model retraining** – every 24 h batch job pulls the latest feedback into a labeled dataset for fine‑tuning.

**Depth**  
- *Latency*: API returns 200 in <20 ms; no blocking on UI.  
- *Scalability*: Kafka topics with compaction keep only the latest rating per message, reducing storage.  
- *Privacy*: Store only IDs and ratings; never persist raw assistant text or user content.  
- *Reliability*: Retry logic + dead‑letter queue for failed events.

**Edge Cases**  
- Duplicate clicks → idempotent key (`session_id+message_id`).  
- Offline users → buffer locally, flush on reconnect.  
- Mislabeling → flag via anomaly detection and manual review.

**Optimize & Communicate**  
Explain that the event log allows real‑time dashboards for ops while batch jobs feed back into the training loop. Highlight trade‑offs: higher ingestion rate vs. storage cost (compaction mitigates). Conclude with how this design keeps user privacy, scales horizontally, and ties directly to model improvement.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
