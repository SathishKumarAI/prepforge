---
qid: ing_aad3bf24d9__eli5__local
question: 'Explain: Summary — TCP vs UDP | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 158
output_tokens: 209
total_tokens: 367
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:08:49-05:00'
sources: []
---

Think of data as a **letter you’re sending to a friend**.

*TCP (Transmission Control Protocol)* is like mailing the letter by **registered post**. The post office guarantees it will arrive: if any part gets lost, it’s resent; the order of paragraphs is kept; and both sender and receiver keep track of how much was sent and received. You can’t finish until you’re sure every word reached its destination.

*UDP (User Datagram Protocol)* is like dropping a postcard in a mailbox. It goes straight out with no confirmation—if it falls into a puddle, you’ll never know. The postcard arrives quickly and uses less effort, but there’s no guarantee of order or completeness.

In system design, use TCP when **accuracy matters** (e.g., file transfer), and UDP when **speed is key** and occasional loss is acceptable (e.g., live video).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
