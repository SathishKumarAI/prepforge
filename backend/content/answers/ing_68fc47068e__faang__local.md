---
qid: ing_68fc47068e__faang__local
question: 'Explain: Library APIs — What is an API? | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 423
total_tokens: 659
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:47:50-05:00'
sources: []
---

**Clarify**  
*Question:* “What is a library API in the context of machine‑learning systems?”  
Assumptions: you’re interested in how ML libraries expose functionality (e.g., TensorFlow, PyTorch) to developers and how that fits into system design.

---

### Approach
1. Define *API* as an interface exposing operations while hiding implementation details.  
2. Explain the two main API levels in ML libs: **high‑level** (Keras, sklearn pipelines) vs. **low‑level** (TensorFlow ops, CUDA kernels).  
3. Discuss how these APIs shape system components: data ingestion → preprocessing → model training → inference.

---

### Depth
- **API contract** – function signatures, expected input shapes, dtype constraints, and return types.  
- **Abstraction layers** – wrappers around GPU kernels, automatic differentiation engines, and distributed execution (e.g., `tf.distribute`).  
- **Versioning & compatibility** – semantic‑versioning of API endpoints to avoid breaking downstream pipelines.  
- **Performance knobs** – exposing options like batch size, mixed‑precision flags, or custom ops for latency‑critical inference.

---

### Edge Cases
- Passing incompatible tensor shapes → runtime errors vs compile‑time checks.  
- Mixing eager and graph modes (TensorFlow) leading to subtle bugs.  
- Deprecated API calls that silently fall back to slower CPU paths.  

Testing: unit tests on signature enforcement, integration tests with mock GPU backends, CI pipelines that run against multiple library versions.

---

### Optimize & Communicate
Highlight trade‑offs: a highly abstracted high‑level API boosts developer productivity but may hide latency bottlenecks; low‑level APIs give fine control but increase cognitive load.  
Convey your reasoning by mapping API design to system goals (throughput, maintainability) and illustrating with concrete examples (e.g., `torch.nn.Module` vs. raw CUDA kernels).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
