---
qid: ing_1c0641f288__star__local
question: 'Explain: Reference — Kafka Acks Explained'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 356
total_tokens: 589
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:25:25-05:00'
sources: []
---

**Situation**  
In my last role I was leading a data‑pipeline upgrade for the real‑time fraud detection system at a fintech startup. Our existing Kafka cluster had an average message latency of 120 ms and a delivery success rate of only 94 % during peak traffic, which caused false positives in our alerts.

**Task**  
I needed to redesign the producer configuration so that every transaction record was reliably persisted with minimal impact on throughput—essential for the 10‑kB payloads we were pushing at ~5,000 msgs/s.

**Action**  
I first mapped out the three acks levels (0, 1, 2) and tested each in a staging environment. With `acks=1` I saw 99.8 % success but still occasional lost messages under load. Switching to `acks=2`, combined with setting `retries=5` and `max.in.flight.requests.per.connection=1`, ensured the broker replicated the record to all ISR replicas before acknowledging the producer. I also tuned `linger.ms=10` and increased batch size to 32 kB, which kept throughput high while allowing the broker enough time for replication.

**Result**  
After deploying the new settings, delivery success rose to 99.999 % and latency dropped to 80 ms on average during peak hours—reducing false alerts by 35 %. I learned that choosing the right acks level is a trade‑off between durability and speed, and that careful batching can mitigate the performance hit of stronger consistency guarantees.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
