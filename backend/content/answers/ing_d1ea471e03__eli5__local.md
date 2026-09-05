---
qid: ing_d1ea471e03__eli5__local
question: 'Explain: Databases — TCP vs UDP | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 159
output_tokens: 255
total_tokens: 414
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:07:56-05:00'
sources: []
---

Think of a database as a library that can receive book‑return requests from many readers at once.  
**TCP (Transmission Control Protocol)** is like a polite librarian who keeps a paper trail: each request is written down, the librarian confirms it was received, and if something goes wrong they ask for the request again. This guarantees that every “book return” arrives safely and in order, but it takes time because of all the back‑and‑forth chatter.

**UDP (User Datagram Protocol)** is like a quick note left on the desk: the reader drops a note with their book ID, and the librarian simply picks it up if they see it. There’s no confirmation or retry, so the note might be lost or arrive out of order, but the process is lightning‑fast.

In database system design, choosing TCP means reliable transactions—every write reaches the server and is logged before the reader gets a reply. Choosing UDP (rare for databases) would let you send data faster, useful only when occasional loss is acceptable (e.g., caching or telemetry). The trade‑off is between speed and certainty of delivery.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
