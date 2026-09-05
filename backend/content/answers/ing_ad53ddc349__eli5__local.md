---
qid: ing_ad53ddc349__eli5__local
question: 'Explain: acks=1 - example — Kafka'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 158
output_tokens: 225
total_tokens: 383
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:12:08-05:00'
sources: []
---

Imagine you’re sending a message through a relay race. The runner (your producer) hands the baton to the first teammate (the broker that receives it). With **acks = 1**, you only wait for that first teammate to say “Got it!”—you don’t need to hear from any other teammates or the final finish line.  

In Kafka, acks tells the producer how many brokers must confirm receipt before it considers the write successful. *acks=0* means no confirmation (just drop it). *acks=1* means the leader broker of the partition acknowledges immediately; this is fast but if that broker fails right after, you might lose the message because followers haven’t yet stored it. *acks=all* waits for all replicas to confirm, giving maximum safety at the cost of speed.

So **acks=1** is like trusting a single reliable teammate’s thumbs‑up before moving on—quick, but with a small risk if that teammate drops out.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
