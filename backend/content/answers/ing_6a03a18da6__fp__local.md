---
qid: ing_6a03a18da6__fp__local
question: 'Explain: GPU Serving example — TensorFlow Serving with Docker \u00a0|\u00a0
  TFX'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 183
output_tokens: 458
total_tokens: 641
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T19:50:12-05:00'
sources: []
---

### Why a GPU‑backed TensorFlow model must be served the way it is

A trained model is a *function* \(f_{\theta}\) that maps an input tensor to an output tensor.  
During inference we repeatedly evaluate this function on many independent inputs, so the
computational graph becomes a **streaming pipeline**: data → pre‑processor → GPU kernel →
post‑processor.  

TensorFlow Serving is built around the **Predict API**; it exposes a stateless RPC that
takes an input tensor and returns the output tensor.  To keep latency low we must:

1. **Pre‑allocate GPU memory once** – repeated `tf.Session` creation would trigger costly
   device initialisation.
2. **Reuse the same graph object** – each inference requires only a forward pass; rebuilding
   the graph would add linear overhead.

Docker containers isolate these resources, letting us pin the container to a specific GPU with
`--gpus all`.  The container also bundles CUDA libraries and the exact TF Serving binary,
ensuring deterministic runtime across environments.

### TFX integration

TFX’s **Serving** component wraps this logic into an Airflow‑driven pipeline.  
During the *train* stage, TFX writes a SavedModel to GCS.  
The *serve* stage pulls that model, mounts it in the Docker image, and starts
`tensorflow_model_server`.  TFX automatically generates a **prediction service** that
exposes the same Predict API.

### Non‑obvious insight

Most people think GPU inference is simply “run TF Serving on GPU”.  
The subtle point is that **batching across requests is essential**: GPUs thrive on large,
coalesced workloads.  By configuring TensorFlow Serving’s `max_batch_size` and
`batch_timeout_ms`, the server aggregates many small RPCs into a single CUDA kernel launch,
yielding *sub‑linear* latency growth even under high request rates.  
Without this batching, per‑request GPU utilisation collapses, negating the hardware benefit.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
