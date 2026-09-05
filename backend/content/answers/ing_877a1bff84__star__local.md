---
qid: ing_877a1bff84__star__local
question: 'Explain: Request Body — Design Spotify | System Design Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 346
total_tokens: 587
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:03:33-05:00'
sources: []
---

**Situation** – In my last internship I was tasked with building a lightweight API that lets users upload custom playlists to a streaming service similar to Spotify. The client wanted the endpoint to accept up to 1000 tracks per request, each track needing metadata (title, artist, duration) and an optional album cover image.

**Task** – My goal was to design a robust, scalable request body format that minimized payload size while allowing fast validation and storage in our NoSQL database. I also had to ensure backward‑compatibility with existing clients and keep the API secure against malformed data.

**Action** – I chose JSON as the transport layer because of its native support in most SDKs, but wrapped it in a gzipped binary buffer to cut bandwidth by ~35 %. Each track was represented as a compact object: `{ "t":"Bohemian Rhapsody", "a":"Queen", "d":354, "c":<base64> }`. I implemented schema validation with Ajv at the API gateway and added a rate‑limit of 10 requests/min per user. For storage, each playlist was stored as a single document in MongoDB; the array field used capped sub‑documents to avoid large update operations.

**Result** – The new endpoint handled 2,500 concurrent uploads with an average latency of 120 ms, a 40 % reduction from the prototype. Client feedback highlighted the ease of use and fast response time. I learned how compression trade‑offs can dramatically improve throughput while keeping payloads readable for developers.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
