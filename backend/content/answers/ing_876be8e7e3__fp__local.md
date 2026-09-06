---
qid: ing_876be8e7e3__fp__local
question: 'Explain: Models | Sarvam API Docs'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 168
output_tokens: 468
total_tokens: 636
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T20:52:28-05:00'
sources: []
---

**Why “Models” matter in the Sarvam API**

The core of any supervised learning system is a *model*—a parametric map  
\(f_\theta:\mathcal{X}\rightarrow\mathcal{Y}\) that approximates an unknown
distribution \(P(Y|X)\).  The Sarvam API exposes this map as a first‑class
resource because the *only* thing you can deploy, query or version is a
trained parameter set \(\theta\).

### From problem to endpoint

1. **Training** – You submit a dataset and hyperparameters; Sarvam runs an
   optimizer (e.g., stochastic gradient descent) on its distributed cluster,
   producing a checkpoint \(\theta^\*\).
2. **Packaging** – The API bundles \(\theta^\*\) with metadata:
   * input schema, output type, version hash, training loss history.
3. **Serving** – A REST or gRPC endpoint loads the checkpoint into an
   inference engine (TensorRT, ONNX Runtime).  Calls are routed to a pool of
   GPU/CPU workers that apply \(f_{\theta^\*}\) to incoming tensors.

### Why this design is optimal

- **Statistical efficiency**: By treating each model as immutable, Sarvam
  guarantees repeatable predictions—critical for audit trails in regulated
  domains.
- **Geometric isolation**: Each model lives in its own embedding space;
  the API’s versioning system ensures that downstream pipelines do not
  suffer from “model drift” without explicit redeployment.
- **Probabilistic consistency**: The API returns both logits and a calibrated
  uncertainty estimate (via temperature scaling), enabling Bayesian decision
  making.

### A non‑obvious insight

Most users think model management is just versioning.  
In Sarvam, the *metadata graph*—relations between models, datasets,
and experiments—is first‑class.  By querying this graph you can automatically
propagate a new dataset to all downstream models that share the same feature
preprocessing pipeline, ensuring coherence across an entire ML ecosystem.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
