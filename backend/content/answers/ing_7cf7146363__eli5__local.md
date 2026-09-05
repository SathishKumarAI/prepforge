---
qid: ing_7cf7146363__eli5__local
question: 'Explain: point looking at the distance in the — System Design of Doordash:
  Geo-Hashing and WebSockets for Location Based Services'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 176
output_tokens: 244
total_tokens: 420
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:54:54-05:00'
sources: []
---

Imagine you’re at a busy farmers’ market. Every stall has a small label that says its “location code” (the stall’s address in the crowd). When someone asks for a fresh tomato, you only need to look at stalls with labels close to yours—no need to wander all over.  

In DoorDash, **Geo‑Hashing** is that labeling system: it turns each delivery location into a short string of letters and numbers that keeps nearby places together in the same “bucket.” This lets the app quickly find drivers or restaurants that are geographically close without scanning every record.  

Once a driver’s phone knows which bucket it belongs to, **WebSockets** keep a constant two‑way conversation open between the driver’s device and DoorDash’s servers—like a live walkie‑talk channel. As the driver moves, the app instantly pushes updates (new distance, traffic) back to the user and to other nearby drivers.  

So, Geo‑Hashing is the quick “find my neighbor” tool, and WebSockets is the real‑time chat that keeps everyone’s positions fresh.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
