---
qid: ing_12f8d0f753__eli5__local
question: 'Explain: Draw Data Flow — How to Prepare for System Design Interview'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 161
output_tokens: 280
total_tokens: 441
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:05:49-05:00'
sources: []
---

**Drawing a data‑flow diagram before a system‑design interview is like sketching a city map before building a new neighborhood.**

1. **Identify the main “roads” (data sources).**  
   Think of each source as a street bringing traffic into town—user clicks, sensor feeds, third‑party APIs.

2. **Map the “traffic lights” (processing steps).**  
   These are the places where data changes hands: validation, aggregation, enrichment. Each light must be clearly labeled with what it does.

3. **Mark the “parking lots” (storage).**  
   Decide where cars (data) will wait—real‑time buffers, short‑term caches, or long‑term databases.

4. **Show the “exit routes” (outputs).**  
   The final destinations are dashboards, downstream services, or alerts that consume the processed data.

5. **Add “speed limits” (performance constraints).**  
   Note latency targets and throughput goals beside each road segment.

By drawing this map first, you give yourself a clear blueprint to discuss scalability, fault tolerance, and cost—just as a city planner shows how streets, traffic signals, and parking will handle future growth.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
