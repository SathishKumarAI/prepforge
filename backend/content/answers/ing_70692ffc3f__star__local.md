---
qid: ing_70692ffc3f__star__local
question: 'Explain: 1.6. Code on Demand ( Optional ) — What is REST?: REST API Tutorial'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 247
output_tokens: 314
total_tokens: 561
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T02:11:54-05:00'
sources: []
---

**Situation**  
During my last internship I was asked to build a lightweight data‑collection service for an IoT dashboard that could run on low‑power edge devices. The team wanted the API to be simple and stateless so it would work over intermittent Wi‑Fi.

**Task**  
I had to design a RESTful interface that exposed sensor readings, allowed configuration changes, and could optionally serve small HTML snippets (code on demand) when developers needed an embedded UI for quick debugging.

**Action**  
I chose Flask with the Flask‑RESTX extension. Each endpoint followed the standard CRUD verbs: `GET /sensors` returned JSON lists; `POST /config` accepted JSON patches; `PUT /sensor/<id>` updated a reading. For code on demand, I added an optional `?embed=true` query param that triggered the server to return a minimal HTML page containing a live chart of the sensor data. The server kept state only in memory (Redis) and used JWT tokens for authentication, ensuring each request was independent.

**Result**  
The API handled 10k requests per minute with <100 ms latency on an ESP32 gateway. Developers reported that the optional UI cut their debugging time by 40 %. I learned how to balance REST’s statelessness with the convenience of code on demand, and how to expose a flexible interface without compromising performance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
