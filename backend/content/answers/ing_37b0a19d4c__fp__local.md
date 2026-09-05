---
qid: ing_37b0a19d4c__fp__local
question: 'Explain: Types of Client-Server Architectures — Client-Server Architecture
  | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 177
output_tokens: 537
total_tokens: 714
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T18:02:46-05:00'
sources: []
---

### Why the “client‑server” split matters for ML systems

At its core, an ML service is a **function \(f\)** that maps inputs (e.g., images, text) to outputs (labels, embeddings).  
In practice, clients generate requests and servers execute \(f\). The design of this interaction governs latency, scalability, and privacy.  

| Architecture | How it works | When it emerges from first‑principles |
|--------------|--------------|----------------------------------------|
| **Thin client / heavy server** | Clients forward raw data; the server owns all compute and model state. | Optimal when *data* is large or models are too expensive for edge devices, satisfying the principle of **centralized computation** to keep inference latency low while preserving a single source of truth. |
| **Edge (client‑heavy) / light server** | Clients hold a compressed model; only feature vectors or predictions travel back. | Arises from the trade‑off between *bandwidth* and *model size*. When network cost dominates, moving computation to the client reduces load per round‑trip—an application of the **information bottleneck**: keep only what matters for the next stage. |
| **Hybrid (split inference)** | Model is partitioned; early layers run on the edge, later layers on the server. | Derives from *layerwise sparsity* in DNNs: earlier layers learn generic features that can be cached locally, while task‑specific layers benefit from cloud scale. This satisfies both **computation locality** and **model sharing** constraints. |
| **Federated / decentralized** | Clients compute gradients locally; a central aggregator updates the global model without seeing raw data. | Stems from *privacy‑preserving optimization*: by exchanging only parameter deltas, the system respects differential privacy while still performing distributed stochastic gradient descent. |

#### Non‑obvious insight  
Most designers focus on **latency** or **throughput**, but the *shape* of the data flow directly limits **model evolution**. In a thin client setup, every model update forces all clients to download new weights, creating a *bootstrapping bottleneck*. A hybrid split inference alleviates this: only the lightweight head needs frequent updates, while the heavy base can stay cached for months. Thus, architecture choice is not just about current load—it dictates how quickly the system can iterate on its own models.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
