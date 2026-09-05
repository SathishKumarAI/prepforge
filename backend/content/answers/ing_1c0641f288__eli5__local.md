---
qid: ing_1c0641f288__eli5__local
question: 'Explain: Reference — Kafka Acks Explained'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 155
output_tokens: 255
total_tokens: 410
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:20:31-05:00'
sources: []
---

**Reference‑acknowledgements (acks) in Kafka**

Imagine you’re sending a postcard through the mail and you want to know it reached the recipient.  
You can choose one of three “ack” levels:

| Ack value | What happens |
|-----------|--------------|
| **0** | You hand the postcard to the post office, then move on—no confirmation is ever sent back. |
| **1** | The post office stamps the postcard and says *“I’ve handed it off.”* It never checks if the recipient actually got it. |
| **-1 (or all)** | The post office waits until every delivery truck that carries copies of the postcard confirms they delivered them to the recipient before telling you “All done!” |

In Kafka terms, a producer writes data to a broker and can ask for different levels of acknowledgement: no wait, wait only for the local broker, or wait for all replicas. Choosing **0** is fastest but risky; choosing **-1** guarantees durability but adds delay. This is exactly what “acks” control in Kafka’s messaging system.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
