---
qid: ing_90a465f332__fp__local
question: 'Explain: What is TPS, what is QPS, and what is the difference? _ Internet'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 179
output_tokens: 340
total_tokens: 519
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:12:44-05:00'
sources: []
---

**TPS (Transactions Per Second) vs. QPS (Queries Per Second)**  

In a learning‑based system the *transaction* is an end‑to‑end request that may involve multiple operations: feature extraction, model inference, post‑processing, and persistence.  The rate at which such complete pipelines finish defines **TPS** – it measures *effective throughput*, i.e., how many full predictions can be served in a second.

A *query*, by contrast, is the minimal unit of interaction with the model: typically a single forward pass that consumes pre‑computed features and returns logits or embeddings.  **QPS** counts these raw inference calls, ignoring any surrounding I/O or business logic.

The difference stems from where you slice the process:

| Aspect | TPS | QPS |
|--------|-----|-----|
| Definition | Full request completed (I/O + inference) | Pure inference call |
| Unit of measurement | Business‑centric throughput | System‑centric latency |
| Sensitivity to I/O bottlenecks | High | Low |

**Non‑obvious insight:**  
When scaling a model, QPS can grow linearly with GPU cores, but TPS often saturates early because the *serialization* and *network* layers become the bottleneck.  Thus, optimizing for higher QPS alone may give a false sense of capacity; you must also engineer the surrounding pipeline (caching, batching, async I/O) to lift TPS.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
