---
qid: ing_40028c181a__eli5__local
question: 'Explain: When the message is sent — Design WhatsApp | System Design Interview
  | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 167
output_tokens: 272
total_tokens: 439
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:17:24-05:00'
sources: []
---

Imagine a post‑it that you drop into a glass bottle (the sender’s phone). The bottle is sealed, then tossed into a river that flows through the city. As it travels, the bottle can hop from one dock to another—each dock represents a server that checks if the water (network) is clear and forwards the bottle downstream.

When you hit “send” on WhatsApp, your phone first writes the text into a local file (a tiny database). It then hands that file off to a nearby “dispatch station” (the nearest WhatsApp server). The dispatch station encrypts the post‑it, places it in a queue, and passes it to the next station closer to the recipient. Each station repeats this: check the queue, pick up the bottle, re‑encrypt if needed, and send it onward.

Finally, when the bottle reaches the recipient’s dock (their phone’s WhatsApp server), it is delivered straight into their inbox. If any station fails—say a server crashes—the message sits in that station’s queue until the next one picks it up, ensuring it eventually arrives. This chain of servers and queues is what keeps every chat moving reliably from sender to receiver.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
