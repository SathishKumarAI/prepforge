---
qid: ing_9af107b466__eli5__local
question: 'Explain: Active-Active policy — Availabilitypatterns'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 156
output_tokens: 207
total_tokens: 363
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:43:11-05:00'
sources: []
---

Imagine two kitchen stations in a busy restaurant, each with its own stove, fridge, and staff. Whenever the chef needs to prepare a dish, they can use either station—no waiting for a single “master” station to finish. If one station’s oven breaks, the other keeps cooking, so diners never see a delay. That’s an **active‑active policy** in computing: two (or more) servers run the same application at the same time and share traffic.

The **availability pattern** is how you decide which server handles each request. In a “round‑robin” pattern, requests bounce evenly between stations. In a “least‑connections” pattern, new orders go to the station with fewer dishes on the stove. Both keep all servers busy and prevent any single point of failure—just like having two fully equipped kitchens keeps your restaurant open even if one breaks down.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
