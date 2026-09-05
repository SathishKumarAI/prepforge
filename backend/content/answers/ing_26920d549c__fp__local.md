---
qid: ing_26920d549c__fp__local
question: 'Explain: AI-native and infrastructure — Company Interview Questions'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 169
output_tokens: 366
total_tokens: 535
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T17:27:08-05:00'
sources: []
---

**AI‑Native vs. Infrastructure: A First‑Principles View**

At the heart of any AI system lies *optimization*: turning raw data into predictions with minimal loss.  
- **AI‑native** means that the software stack is designed around this optimization loop. Models are first‑class citizens; training, inference, and versioning pipelines are baked into the platform (e.g., TensorFlow Serving or PyTorch Lightning). The architecture exposes hyperparameter tuning, auto‑scaling of GPU resources, and fine‑grained monitoring of loss curves as core primitives.  
- **Infrastructure** is the substrate that supports those loops: networking, storage, compute scheduling, and fault tolerance. It treats AI workloads like any other job—batch or streaming—without embedding domain knowledge about gradients or data augmentation.

The deeper principle is *abstraction hierarchy*. AI‑native systems lower the abstraction barrier for ML engineers by exposing **model‑centric APIs**; infrastructure exposes **resource‑centric APIs**. In interviews, candidates should recognize that a good architecture balances both: an AI‑native layer that can be rapidly iterated on, sitting atop resilient, scalable infra.

**Non‑obvious insight:**  
Most people forget that *data lineage* is the missing link. True AI‑native platforms must treat data as first‑class objects with immutable provenance, enabling reproducible training and serving. Infrastructure alone cannot guarantee this; it only provides storage. Integrating lineage into the AI layer turns a static pipeline into an adaptive research engine—essential for high‑stakes product teams.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
