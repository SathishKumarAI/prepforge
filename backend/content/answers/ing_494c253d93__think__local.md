---
qid: ing_494c253d93__think__local
question: 'Explain: How streaming actually works: — ChatGPT System Design - by Neo
  Kim and Hayk'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 198
output_tokens: 425
total_tokens: 623
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T06:08:22-05:00'
sources: []
---

**1️⃣ Clarify the scope & assumptions**  
- Assume “streaming” refers to real‑time data ingestion for ML (e.g., event streams → feature store).  
- State that we’re focusing on system design (data flow, fault tolerance, latency), not algorithmic training.

**2️⃣ Adopt a layered mental model**  
1. *Ingestion layer* – sources → message broker (Kafka/ Pulsar).  
2. *Processing layer* – stream processors (Flink/FastAPI) that enrich, aggregate, and maintain state.  
3. *Feature layer* – feature store (SageMaker Feature Store / Feast) exposing real‑time features to models.  
4. *Serving layer* – low‑latency inference endpoint (Lambda/Edge).

**3️⃣ Step‑by‑step reasoning**  
- Identify producers (IoT, logs) and their schemas.  
- Choose a broker that guarantees ordering + durability.  
- Design stream processors: stateless transforms for speed; stateful windows for aggregations.  
- Persist intermediate results to a feature store with TTLs so models can read them instantly.  
- Expose features via a cache‑backed API, ensuring end‑to‑end latency < target SLA.

**4️⃣ Common pitfalls to avoid**  
- Ignoring schema evolution → data corruption downstream.  
- Over‑loading the broker (too many partitions) → bottlenecks.  
- Forgetting checkpointing → loss of state after failure.  
- Mixing batch and stream code paths → inconsistent feature values.

**5️⃣ Sanity‑check & communicate**  
- Draw a simple diagram: source → broker → processor → store → serving endpoint.  
- Run through latency budgets: ingestion (ms), processing (tens of ms), cache hit (<1 ms).  
- Explain trade‑offs (throughput vs consistency) and how the design meets them.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
