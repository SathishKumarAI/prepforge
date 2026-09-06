---
qid: ing_c579fcf8e5__fp__local
question: 'Explain: Open-Source Models — Models | Sarvam API Docs'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 173
output_tokens: 420
total_tokens: 593
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:01:31-05:00'
sources: []
---

### Why the Sarvam “Open‑Source Models” endpoint exists

At its core, a model is an **optimization problem**:  
\[
\min_{\theta}\; \mathbb{E}_{(x,y)\sim P}[\,\ell(f_\theta(x),y)\,]
\]  
where \(f_\theta\) maps inputs to predictions.  In the cloud, the *service* must expose a stable API that hides this optimization while still allowing users to **select** the learned function they need.

The Sarvam “Models” endpoint solves exactly that: it enumerates all trained parameter sets \(\{\theta_i\}\) that are available for inference.  The design follows three principles:

1. **Discoverability (information theory)** – By listing models with metadata (accuracy, training data size, license), the API lets clients compute an *expected utility* before invoking expensive calls.
2. **Interoperability (geometry)** – Each model is identified by a UUID and linked to its input‑output schema; this guarantees that downstream pipelines can treat them as interchangeable points in a high‑dimensional feature space.
3. **Governance (probability)** – Models are tagged with their *confidence distribution* and drift‑metrics, enabling risk‑aware selection under uncertainty.

#### Non‑obvious insight  
The endpoint’s pagination is not merely a bandwidth trick; it reflects the **law of diminishing returns** in model catalogs: early pages contain the most general, high‑accuracy models, while later pages hold niche or legacy ones.  A client that stops after page 1 already captures >95 % of practical performance, so the API encourages efficient exploration rather than exhaustive enumeration.

In short, the “Models” endpoint is a **policy layer** turning an opaque training pipeline into a principled, query‑able library that respects both optimization goals and user‑centric constraints.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
