---
qid: ing_7a9605dcdf__eli5__local
question: 'Explain: Zoom System Design | WhatsApp / FB Video Calling System Design
  | System Design Interview Question'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 167
output_tokens: 261
total_tokens: 428
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:51:07-05:00'
sources: []
---

**Think of a video call as a live “virtual classroom.”**

When you start a call, the teacher (your phone) first announces its presence to the school’s **registrar** (a signaling server). The registrar tells every student in the class where they can find each other and which “room” (video channel) to join. Once everyone knows the address, the students open direct lines to one another—just like students walking straight to each other’s desks instead of going through the hallway.

Each line carries two streams: **audio** and **video**, compressed into small packets so they fit in the hallway without clogging it. If a student can’t reach a particular classmate (network drop), that student simply drops out of the stream, and the others keep talking—just as students would skip a missing classmate’s slide.

The registrar also keeps an eye on the room: if someone leaves, it tells the rest; if the hallway gets crowded, it suggests a quieter path. That’s how WhatsApp or Facebook video calls stay fast, reliable, and scalable without needing every phone to talk to every other one directly.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
