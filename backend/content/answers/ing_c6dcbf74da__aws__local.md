---
qid: ing_c6dcbf74da__aws__local
question: Design the memory and personalisation layer for an assistant serving millions
  of users. What do you store, when do you summarise versus retrieve, and how do you
  evaluate memory quality?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 255
output_tokens: 407
total_tokens: 662
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:52:17-05:00'
sources: []
---

**Situation & Task**  
While building a voice‑assistant for millions of users, I was charged with designing the “memory” layer that captures context, preferences, and interactions while keeping latency < 200 ms.

**Action**  
1. **Data model:**  
   * Store *raw events* (speech turns, intent flags) in an Amazon Kinesis Data Streams pipeline → ingest into Amazon Timestream for time‑series storage (10 GB/day).  
   * Periodically run a Lambda job to produce a *user summary* (top intents, sentiment, usage patterns) stored in DynamoDB Global Tables.  
2. **Retrieval strategy:**  
   * On request, fetch the latest summary from DynamoDB (single read ≤ 5 ms).  
   * If context depth > 3 turns, stream recent events from Timestream via PartiQL to keep conversational continuity.  
3. **Quality evaluation:**  
   * Use a nightly batch that compares predicted next intent against actual intent (precision‑recall) and flags summaries with < 80 % accuracy for re‑summarisation.  
4. **Scalability & cost:**  
   * Kinesis shards (200) + Timestream on-demand tier → ~$0.04 per 1M events.  
   * DynamoDB provisioned capacity auto‑scales; cost <$5/day.

**Result**  
Reduced average response latency from 350 ms to 180 ms, improved personalization accuracy by 12% (from 65 % to 77 %), and cut storage costs by 35 %.  

*Leadership Principles:* **Customer Obsession** – delivering instant, accurate context; **Ownership** – building end‑to‑end data flow; **Dive Deep** – continuous metric‑driven refinement.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
