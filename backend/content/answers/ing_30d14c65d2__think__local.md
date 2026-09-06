---
qid: ing_30d14c65d2__think__local
question: 'Explain: Terminologies — Latency'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 186
output_tokens: 378
total_tokens: 564
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T05:49:52-05:00'
sources: []
---

**1️⃣ Clarify the scope & assumptions**  
- *What* is “latency” in ML? (e.g., inference latency, training latency)  
- *Why* does it matter? (real‑time inference, user experience)  
- Assume a basic understanding of ML pipelines but not deep networking terms.

**2️⃣ Mental model / framework**  
Use the **“Time‑to‑Output” ladder**:  
1. Data arrives → 2. Pre‑processing → 3. Model computation → 4. Post‑processing → 5. Result delivered.  
Latency is the sum of delays at each rung.

**3️⃣ Step‑by‑step reasoning**  
- Define *latency* as the elapsed time from input request to output.  
- Distinguish **end‑to‑end latency** vs. **inference latency** (just model compute).  
- Explain how factors contribute: hardware speed, batch size, network round‑trip, serialization overhead.  
- Relate to metrics: milliseconds for real‑time systems, seconds for batch jobs.

**4️⃣ Common traps & wrong turns**  
- Mixing *throughput* with *latency*.  
- Ignoring the effect of **batching** (larger batches lower per‑sample latency but increase overall).  
- Forgetting that latency can be reduced by model compression or quantization, not just faster hardware.

**5️⃣ Sanity‑check & verbalize**  
- Ask: “If I double the batch size, what happens to per‑sample latency?” (usually increases)  
- Summarize: *Latency is the time cost of getting a prediction; it’s critical for interactive ML and is influenced by every stage from data arrival to result delivery.*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
