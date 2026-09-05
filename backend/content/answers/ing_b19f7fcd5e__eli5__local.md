---
qid: ing_b19f7fcd5e__eli5__local
question: 'Explain: ‘acks=1’ — Kafka Acks Explained'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 159
output_tokens: 201
total_tokens: 360
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:18:33-05:00'
sources: []
---

**Kafka “acks = 1” – what it means**

Imagine you’re sending a postcard (a message) through the mail to a friend.  
The sender wants to know if the post office has safely received the postcard before they move on to the next one.

In Kafka, the **producer** is the sender and the **broker** that stores messages is the post office.  
When you set **`acks = 1`**, you’re telling Kafka: *“Tell me when the broker that holds the data has written it to its local disk (the first copy). I don’t need confirmation from any backup copies.”*  

So the producer gets a quick “yes, we got it” after the leader node acknowledges receipt.  
If the leader fails before replicating the message elsewhere, the message could be lost, but you’re trading safety for speed and lower latency.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
