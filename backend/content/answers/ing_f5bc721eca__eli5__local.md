---
qid: ing_f5bc721eca__eli5__local
question: 'Explain: ‘acks=0’ — Kafka Acks Explained'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 159
output_tokens: 324
total_tokens: 483
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:03:43-05:00'
sources: []
---

Imagine you’re sending a postcard through a postal service that offers three delivery guarantees:

1. **“I’ll hand it over to the post office and let you know when it leaves.”**  
2. **“I’ll hand it over and wait until the post office has put it on the truck, then I’ll tell you.”**  
3. **“I’ll keep handing it out until the entire post office chain confirms it’s safely in a truck, then I’ll let you know.”**

In Kafka, the *acks* setting is that same choice for how much the broker must confirm before the producer (you) considers a message “sent.”  

- **acks=0** is like tossing the postcard into the mail slot and walking away—no confirmation is sent back.  
  You’re fast, but if the post office crashes or the network hiccups, you’ll never know the postcard was lost.

- **acks=1** (the default) is “hand it to the broker; I’ll get a receipt that it’s on its way.”  
  The message sits in one replica. If that broker dies before forwarding, the data can be recovered from other replicas.

- **acks=all** means you wait for *every* broker holding a copy to say, “Got it!”—the safest but slowest option.

So, `acks=0` trades safety for speed: the producer never waits and never learns if something goes wrong.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
