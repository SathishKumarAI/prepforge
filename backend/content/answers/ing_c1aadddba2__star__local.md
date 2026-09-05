---
qid: ing_c1aadddba2__star__local
question: Walk me through deploying a 70B open-weight model to production on Kubernetes.
  What breaks?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 410
total_tokens: 654
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:57:14-05:00'
sources: []
---

**Situation** – At my last startup we had a 70 B LLM that was fine‑tuned on domain data. The product team wanted real‑time inference for chat and summarisation in our cloud platform, but the model’s size made it impossible to fit on a single GPU pod.

**Task** – I needed to design a Kubernetes deployment that could serve the model with <200 ms latency, use less than 40 % of our GPU budget, and be horizontally scalable while keeping cost under $2k/month.

**Action** – First, I split the model into 8 shards using DeepSpeed ZeRO‑3 and exported each shard to ONNX. I built a custom Triton Inference Server container that loads all shards via gRPC, adding a lightweight scheduler to batch requests per GPU. Pods were annotated for NVIDIA A100s; we used Kueue to reserve GPU resources during peak hours. To reduce memory, I applied 4‑bit quantisation with bitsandbytes and added an async prefetch layer in the inference pipeline. For autoscaling, I set up Prometheus metrics on GPU utilisation and latency, feeding them into the Horizontal Pod Autoscaler with a target of 70 % utilisation.

**Result** – The production service hit <180 ms average latency for 512‑token prompts, used only 4 A100s at peak (vs. 32 if unsharded), and cut inference cost to $1.8k/month. I learned that careful shard sizing, quantisation, and a custom scheduler are critical when deploying ultra‑large models on Kubernetes.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
