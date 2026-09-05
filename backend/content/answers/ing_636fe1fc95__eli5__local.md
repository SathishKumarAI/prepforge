---
qid: ing_636fe1fc95__eli5__local
question: 'Explain: Replication — Kafka Acks Explained'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 156
output_tokens: 271
total_tokens: 427
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:13:42-05:00'
sources: []
---

Imagine you’re sending an important postcard (a message) across town, and you want to make sure it arrives safely before you move on to the next one. In Kafka, each postcard is written to a *leader* copy of a storage “box” (the broker). To protect against a box breaking, that same postcard is copied into other boxes called *followers*.  

When the leader writes the postcard, it can ask its followers to confirm they’ve received it. This confirmation is the **acknowledgment (Ack)**.  
- **acks=0**: The sender doesn’t wait for any reply—like tossing a postcard and hoping it sticks.  
- **acks=1**: It waits only for the leader’s own box, like checking that your own mailbox got the card before you keep going.  
- **acks=all (or -1)**: It waits until every follower says “I’ve got it” – like making sure every neighbor’s mailbox also has a copy, giving the highest safety.

So, replication is the backup copies, and acks are the “Did‑you‑get‑it?” checks that let you decide how safe versus fast you want to be.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
