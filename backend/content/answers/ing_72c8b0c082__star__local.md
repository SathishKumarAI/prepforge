---
qid: ing_72c8b0c082__star__local
question: 'Explain: Amazon Sliding Window and Two Pointers — Faang Recent Questions'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 370
total_tokens: 610
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T02:17:09-05:00'
sources: []
---

**Situation**  
In my last role, we built a real‑time fraud detection pipeline for credit card transactions. The model needed the sum of transaction amounts over the last 30 minutes to compute risk scores, but our data stream was high volume (≈10k events/s) and the database query cost would explode if we recalculated each time.

**Task**  
I had to devise a low‑latency, memory‑efficient way to maintain that rolling sum for every card without hitting the DB or using heavy windowed aggregations.

**Action**  
I implemented an Amazon “sliding window” using two pointers in a ring buffer per account. Each pointer marked the start and end of the 30‑minute window. On arrival of a new event, I added its amount to a running total and advanced the end pointer; then I subtracted amounts from expired events by moving the start pointer forward until all timestamps were within 30 minutes. This O(1) update per event kept memory bounded (max 30 minutes × average 5 events/min ≈ 1500 entries). I used DynamoDB Streams to trigger the Lambda that performed the pointer logic, storing only the current sum and buffer pointers back to DynamoDB.

**Result**  
The rolling‑sum computation latency dropped from ~200 ms per transaction (DB query) to <2 ms. Overall throughput increased by 40%, and we avoided a 35% cost increase on read capacity units. I learned how classic two‑pointer sliding windows can be adapted to stream processing in production, balancing time‑space trade‑offs with real‑world constraints.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
