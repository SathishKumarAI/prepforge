---
qid: ing_fecf06f6a2__eli5__local
question: 'Explain: Types of Service Discovery — System Design: What is Service Discovery?'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 163
output_tokens: 202
total_tokens: 365
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:18:36-05:00'
sources: []
---

Imagine you’re at a big, bustling school where every class (service) has its own room and door. If a student (client) wants to talk to the “Math” teacher, they need to know which hallway leads to that room, especially because classes can move rooms or new teachers can appear overnight.

**Service discovery** is the system that keeps track of all these “rooms.” It’s like a dynamic class schedule board: whenever a teacher starts a session (service registers) or leaves (service deregisters), the board updates. When a student needs help, they ask the board for the current address of the Math room, and the board gives them the correct hallway and door number.

In software, services register themselves with a discovery server; clients query that server to find where to send requests. This keeps everything flexible—services can move or scale without breaking client connections.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
