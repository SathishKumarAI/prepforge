---
qid: ing_3044f10bb9__eli5__local
question: 'Explain: Object Storage — Design Spotify | System Design Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 163
output_tokens: 240
total_tokens: 403
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:52:14-05:00'
sources: []
---

Think of **object storage** like a giant, super‑organized library where every song is an *item* (the “object”).  
Instead of shelves (directories), each song lives in its own shelfless box that contains the file itself plus two tiny labels:  
1. **Metadata** – simple notes such as title, artist, genre, and the time it was added.  
2. **Unique ID** – a one‑time code that guarantees we can find that exact song no matter how many copies exist.

When Spotify wants to stream “Shape of You,” it asks the library for the object with that ID. The system looks up the metadata first (to confirm artist and rights) and then pulls the file from the storage cluster that holds it.  
Because every song has its own box, adding or removing tracks doesn’t disturb the rest—just like putting a new book into an empty slot. This keeps uploads fast, searches quick, and scaling simple: add more shelves (storage nodes) as the catalog grows, without reorganizing everything else.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
