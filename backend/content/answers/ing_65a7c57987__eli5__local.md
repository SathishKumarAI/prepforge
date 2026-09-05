---
qid: ing_65a7c57987__eli5__local
question: 'Explain: http long polling or something i think — System Design of Doordash:
  Geo-Hashing and WebSockets for Location Based Services'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 176
output_tokens: 231
total_tokens: 407
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:17:21-05:00'
sources: []
---

Think of a city as a giant pizza shop where each slice is a small square on the map.  
**Geo‑hashing** is like giving every slice a unique name (e.g., “U4R3” for downtown). When DoorDash wants to know which drivers are near a customer, it looks up all slices whose names start with that prefix—fast, because it’s just a string comparison instead of crunching latitude and longitude.

Once the nearest drivers are found, **WebSockets** keep the connection open like a two‑way walkie‑talk. The driver’s phone sends its current slice name whenever it moves; DoorDash receives this instantly and can update the customer’s map in real time. If the driver goes out of range, the server drops that driver from the list.

So, geo‑hashing is the “slice naming” that lets you find nearby drivers quickly, and WebSockets are the continuous chat that keeps everyone updated without repeatedly asking for new data.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
