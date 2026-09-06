---
qid: ing_f0fc1ddb9a__fp__local
question: Your model file is 800MB. How does it get onto users' devices?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 176
output_tokens: 348
total_tokens: 524
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T00:31:34-05:00'
sources: []
---

When a user downloads an app that claims to run *in‑the‑cloud*, the 800 MB model never actually “lands” on the phone.  
Instead, the heavy lifting is done by **edge servers** that stream only the *necessary weights* or *partial activations* as the device requests them. The device hosts a tiny **runtime engine** (e.g., TensorFlow Lite, ONNX Runtime) and receives:

1. **Quantized shards** – each weight tensor is compressed to 8‑bit integers, cutting size by ~4× without loss of inference quality.
2. **Dynamic loading** – only the layers that contribute to the current user query are fetched; the rest stay on the server.
3. **Model distillation** – a smaller “student” network is trained to mimic the full 800 MB teacher, so the device runs a ~10 MB version locally while the teacher refines predictions in parallel.

The deeper principle at work is *information bottleneck*: we keep only the bits that change the output most.  
A non‑obvious insight: **latent feature sharing**. When multiple users invoke similar queries, their devices can cache overlapping latent representations; the server sends a single “feature bundle” to all, reducing bandwidth by orders of magnitude and preserving privacy because raw data never leaves the device.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
