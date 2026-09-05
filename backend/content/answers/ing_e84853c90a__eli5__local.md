---
qid: ing_e84853c90a__eli5__local
question: 'Explain: or less with the lat long that — System Design of Doordash: Geo-Hashing
  and WebSockets for Location Based Services'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 176
output_tokens: 190
total_tokens: 366
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:43:07-05:00'
sources: []
---

Think of a huge city where every street corner has a tiny digital “post‑it” that tells you its exact latitude/longitude. Those post‑its are **Geo‑Hashes**: they take the GPS coordinates and turn them into a short string (like “u4pruydqqvj”) so the system can group nearby places quickly, just as a librarian groups books by Dewey number.  

When a DoorDash rider or driver moves, their phone sends updates through **WebSockets**—imagine a live radio channel that never stops broadcasting. The server listens on this channel and instantly pushes new location data to all interested apps (restaurants, customers, delivery partners).  

Together, Geo‑Hashing gives the system a fast map lookup, while WebSockets keeps everyone’s view of the city up‑to‑date in real time.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
