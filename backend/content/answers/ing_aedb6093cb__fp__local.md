---
qid: ing_aedb6093cb__fp__local
question: 'Explain: Step 3: High-Level Architecture — How to Prepare for System Design
  Interview'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 177
output_tokens: 477
total_tokens: 654
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:16:28-05:00'
sources: []
---

### Step 3: High‑Level Architecture – Why It Matters

When you’re asked to sketch an ML system in a design interview, the **goal is not to hand‑paint every layer** but to show that you can *balance* three orthogonal constraints:

| Constraint | What it forces you to think about |
|------------|-----------------------------------|
| **Data flow** | Where does data come from? How do we ingest, store, and serve it? |
| **Model lifecycle** | When is training triggered? How do we version models and roll them out safely? |
| **Scalability & latency** | What throughput must each component handle? Which parts can be batched versus real‑time? |

The high‑level architecture is the *bridge* between these constraints. It maps an abstract problem—“predict user churn in 100 ms”—to concrete services: a streaming ingestion pipeline, a feature store, a model server, and a monitoring stack.

#### Deeper principle: **Modularity as a form of information bottleneck**

By isolating data ingestion, feature extraction, inference, and monitoring into separate modules, you create *information bottlenecks* that each can be optimized independently. This mirrors the *Information Bottleneck Method*: compress inputs to retain only predictive signal. Each module becomes a compression stage; if one fails, the rest still function.

#### Non‑obvious insight

**Treat the model server as a *stateless queue consumer*, not a monolithic service.**  
Stateless consumers can be auto‑scaled by the queue length (e.g., Kafka partitions), guaranteeing that latency spikes are absorbed without redesigning the inference engine. Many candidates overlook this, leading to over‑engineered “model‑as‑a‑service” monoliths.

> **Bottom line:** In a design interview, sketch an architecture that *explicitly* maps constraints → modules → bottlenecks, and highlight how each module’s statelessness or batching strategy solves a concrete scaling or latency problem. This demonstrates both system‑thinking depth and an understanding of ML‑specific trade‑offs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
