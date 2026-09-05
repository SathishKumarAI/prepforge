---
qid: ing_2f768cabcd__star__local
question: What is KV-cache quantization, and when is it the right lever?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 395
total_tokens: 635
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:03:44-05:00'
sources: []
---

**Situation** – At my previous role I was tasked with deploying a GPT‑3 fine‑tuned model for an on‑device chatbot that had to run under 100 ms latency on a mid‑range mobile GPU. The baseline inference cost was 1.2 GB of KV cache memory, pushing the device into swapping and exceeding the battery budget.

**Task** – Reduce the KV‑cache memory footprint by at least 40% without hurting conversational quality (BLEU ≥ 0.75) or increasing latency beyond 120 ms.

**Action** – I implemented KV‑cache quantization using int8 weights for the value tensors while keeping keys in float32 to preserve positional encoding fidelity. The process involved:
1. Profiling cache usage per layer with PyTorch’s `torch.cuda.memory_summary`.
2. Applying a custom `quantize_kv_cache` module that fused the 16‑bit value projection into an 8‑bit representation, leveraging TensorRT’s INT8 engine.
3. Fine‑tuning the model for two epochs on a mixed‑precision dataset to recover any loss in perplexity.
4. Running A/B tests on a sample of 5k user interactions to verify that latency stayed within target and BLEU scores were unchanged.

**Result** – The KV‑cache size dropped from 1.2 GB to 720 MB, giving a 40% reduction. Latency improved from 112 ms to 95 ms on the target GPU, and BLEU remained at 0.76. I learned that quantizing only the value tensors preserves key semantic structure while still delivering significant memory savings—making it the right lever when device memory is the bottleneck but accuracy cannot be compromised.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
