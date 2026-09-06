---
qid: ing_7255e7187d__think__local
question: 'Explain: Back of the Envelope Calculation in System Design Interview'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 190
output_tokens: 428
total_tokens: 618
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T08:34:49-05:00'
sources: []
---

**1️⃣ Clarify & set assumptions**  
   - Ask what problem domain we’re estimating (e.g., request latency, throughput).  
   - Decide unit of measurement (ms per op, ops/s) and time horizon (peak hour).  
   - Assume typical workloads (request size, CPU cycles per inference).

**2️⃣ Adopt a mental‑model framework**  
   - *Pipeline view*: data → preprocessing → model → post‑processing.  
   - Break down each stage into *resource cost* + *frequency*.  
   - Use *scaling rules* (CPU ≈ 0.5 ms per inference, GPU ≈ 1–2 ms, memory ~50 MB).

**3️⃣ Step‑by‑step reasoning**  
   1. Estimate ops per request: e.g., 10 k FLOPs.  
   2. Convert to cycles: FLOPs × 4 (AVX) → cycles ≈ 40 k.  
   3. CPU latency = cycles / clock speed; for 3 GHz, ~13 µs.  
   4. Add overhead (serialization, network): +5 ms.  
   5. Multiply by peak QPS: 1000 req/s → 5 kB/s traffic.  
   6. Round up to nearest power‑of‑two for safety.

**4️⃣ Avoid common traps**  
   - Don’t forget serialization/deserialization overhead.  
   - Ignore caching effects (first‑time vs warm).  
   - Don’t mix FLOPs with memory bandwidth; they’re orthogonal.

**5️⃣ Sanity‑check & verbalize**  
   - Compare to known benchmarks (e.g., 1 ms per inference on GPU).  
   - Verify units: ms/request × QPS → CPU load < 100%.  
   - Explain each assumption aloud, showing how you arrived at the final estimate.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
