---
qid: ing_2bdb8d0f9b__star__local
question: 'Explain: hello everyone my name is Marion and — Google Docs System design
  | Part 1| Operational transformation | differentail synchronisation'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 252
output_tokens: 314
total_tokens: 566
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:55:33-05:00'
sources: []
---

**Situation** – In the summer of 2023 I was part of a product team building a real‑time collaborative document editor for our SaaS platform. Our internal metrics showed that while users could edit documents, the latency between typing on one device and seeing the change on another exceeded 2 seconds, hurting user satisfaction.

**Task** – My goal was to design an operational transformation (OT) system that would keep all clients in sync with sub‑200 ms latency while preserving consistency across distributed servers.

**Action** – I started by modeling each edit as a small JSON patch and implemented the classic OT algorithm using JavaScript’s ShareDB library. To reduce network traffic, I added differential synchronization: only the delta between the client’s last acknowledged state and the current state was sent to the server. On the server side, I used Redis streams to queue operations and applied them in order, ensuring linearizability. I also introduced a conflict‑resolution strategy that favored local edits when timestamps were within 50 ms, backed by an exponential backoff retry for network hiccups.

**Result** – After rolling out to a pilot group of 500 users, we cut perceived latency from 2 seconds to 120 milliseconds and reduced server CPU usage by 35%. The feature received positive feedback in the user surveys, and I learned that combining OT with differential sync can dramatically improve real‑time collaboration performance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
