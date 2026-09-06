---
qid: ing_086be104cb__think__local
question: 'Explain: Backing indices — Data streams | Elastic Docs'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 190
output_tokens: 465
total_tokens: 655
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T03:16:53-05:00'
sources: []
---

**1️⃣ Clarify the scope & assumptions**  
- The user wants an explanation of *“Backing indices – Data streams”* in Elasticsearch, so we assume they’re familiar with basic index concepts but not the newer data‑stream abstraction.  
- Assume no prior knowledge of how data streams differ from regular indices or the role of backing indices.

**2️⃣ Mental model / framework**  
- Think of a *data stream* as an **immutable append‑only log** that is internally composed of multiple **backing indices** (regular indices).  
- Use the “layered” analogy: user → data stream API → logical view → set of backing indices.  
- Remember the lifecycle rules: rollover, delete, and how aliases point to the stream.

**3️⃣ Step‑by‑step reasoning**  
1. Define a data stream and its purpose (time‑series, immutable).  
2. Explain that each data stream is backed by several indices; the first is *write*‑index, others are read‑only.  
3. Detail how the rollover policy creates new backing indices when size/age limits hit.  
4. Show how the `read_alias` and `write_alias` automatically map to the correct backing indices.  
5. Mention that operations on the stream (e.g., index a document) are routed to the write‑index, while search queries span all backing indices.

**4️⃣ Common traps to avoid**  
- Don’t conflate a data stream with a single index; emphasize the *set* of indices.  
- Avoid implying that users must manage each backing index manually—Elasticsearch does it.  
- Don’t overspecify technical details (e.g., exact API endpoints) unless asked.

**5️⃣ Sanity‑check & verbalize**  
- Re‑state in plain terms: “Think of a data stream as a rolling log where only the newest chunk accepts writes, while older chunks are read‑only.”  
- Verify that the explanation covers: definition, composition (backing indices), lifecycle, and alias routing.  
- Ensure it answers why backing indices exist (immutability, efficient rollovers) and how they’re hidden behind the stream abstraction.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
