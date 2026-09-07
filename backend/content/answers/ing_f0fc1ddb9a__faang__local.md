---
qid: ing_f0fc1ddb9a__faang__local
question: Your model file is 800MB. How does it get onto users' devices?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 465
total_tokens: 704
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:59:52-05:00'
sources: []
---

**Clarify**  
The interviewer asks how a *trained* model that weighs 800 MB can be made available on end‑user devices (phones, wearables, IoT). I’ll assume: (1) the device has limited storage and memory; (2) network bandwidth is variable; (3) we want low latency inference.  

**Approach**  
1. **Model compression** – quantization & pruning to shrink size.  
2. **On‑device loading strategy** – lazy or incremental download of only needed subgraphs.  
3. **Deployment pipeline** – bundle compressed model with the app store release, or stream via a CDN.  

**Depth**  
- *Quantization*: 32‑bit → 8‑bit weights reduces size by ~4×; mixed‑precision keeps accuracy.  
- *Pruning*: remove redundant connections (e.g., structured pruning) to drop another 30–50 %.  
- *Knowledge distillation*: train a smaller “student” network that mimics the 800 MB teacher, often reducing size to <20 MB with minimal loss.  
- *On‑device loading*: use TensorFlow Lite or PyTorch Mobile’s `TfLiteInterpreter`/`torchscript`. The framework loads only tensors required for the current inference, keeping peak memory <200 MB.  
- *Incremental updates*: delta patches over a CDN let users download just new weights when the model evolves.  

**Edge cases**  
- Devices lacking hardware accelerators → fall back to CPU with higher latency.  
- Very low‑bandwidth scenarios → provide a “lite” version or pre‑cache on first launch.  
- Security: verify checksums to avoid tampering during download.  

**Optimize & communicate**  
I’d iterate on compression ratios, benchmark inference time vs. model size trade‑offs, and document the release notes (“Model v2.1 – 12 MB distilled version”). I’d explain that by combining quantization, pruning, distillation, and efficient loading, we can safely ship an originally 800 MB model to millions of devices without compromising user experience.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
