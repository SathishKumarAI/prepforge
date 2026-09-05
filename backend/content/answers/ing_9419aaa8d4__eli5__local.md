---
qid: ing_9419aaa8d4__eli5__local
question: 'Explain: this point are close by right so — System Design of Doordash:
  Geo-Hashing and WebSockets for Location Based Services'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 176
output_tokens: 239
total_tokens: 415
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:32:34-05:00'
sources: []
---

Think of DoorDash’s delivery network as a giant, moving library that keeps track of every book (order) and every reader (customer or driver) in real time.  

**Geo‑Hashing** is like giving each shelf a short, unique code based on its location. Instead of writing “123 Main St” every time, the system uses a compact string—say “dr5ru” — that tells you roughly where the shelf sits on a map. This lets DoorDash quickly group nearby orders and drivers without checking full addresses.  

**WebSockets** are the library’s instant‑messaging system. Once a driver is near a customer, the server opens a two‑way channel (a WebSocket) so both can send updates instantly—“I’m 200 m away” or “Order ready.” The connection stays open, so no new request is needed each time; it’s like having a live chat between the reader and librarian.  

Together, geo‑hashing locates items fast, and WebSockets keeps everyone in sync as they move.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
