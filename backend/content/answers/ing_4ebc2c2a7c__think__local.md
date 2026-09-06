---
qid: ing_4ebc2c2a7c__think__local
question: 'Explain: What does it take, memory-wise, to fine-tune a 7B model? Compare
  full fine-tuning, LoRA, and QLoRA.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 212
output_tokens: 868
total_tokens: 1080
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T06:14:16-05:00'
sources: []
---

**1️⃣ Clarify the ask & set assumptions**

- *What is “memory‑wise”*: peak GPU VRAM during training (forward+backward) + any off‑load/CPU buffers.
- *Model size*: 7 B weights (~28 GB FP32, ~14 GB FP16).  
- *Training setup*: single‑GPU vs multi‑GPU, typical batch sizes, and that we’re comparing *full* fine‑tuning (train all weights) vs **LoRA** (low‑rank adapters) vs **QLoRA** (quantized + LoRA).

---

**2️⃣ Mental model: compute the memory components**

1. **Model parameters** – FP32/FP16 tensors, plus any optimizer state (Adam has 2× for each param).  
2. **Activations** – per‑layer activations needed for backprop; size ≈ batch × seq_len × hidden_dim.  
3. **Gradients & optimizer buffers** – usually same shape as parameters.  
4. **Auxiliary buffers** – e.g., loss, scheduler state, RNG.

For each method we compute how many of these components are *trainable* and thus stored in GPU memory.

---

**3️⃣ Step‑by‑step reasoning**

| Method | Trainable params | Optimizer state | Activations | Approx. VRAM (FP16) |
|--------|------------------|-----------------|-------------|---------------------|
| **Full fine‑tune** | 7 B (~14 GB) | 2× → ~28 GB | Batch‑dependent (e.g., 4 k tokens × 512 hidden ≈ 8 MB) | **≈ 42 GB** (plus a few GB for buffers) |
| **LoRA** | Only LoRA ranks: r≈16 per layer, total ≈ 0.5 M (~1 MB) | same as above but *only* for trainable params → ~2 MB | Same activations as full fine‑tune (because the backbone stays frozen) | **≈ 30–32 GB** (backbone weights stay in VRAM, but optimizer is tiny; can offload backbone to CPU or keep FP16) |
| **QLoRA** | Quantized 7 B weights stored at INT4 (~3.5 GB). LoRA ranks same as above. Optimizer state only for LoRA → ~2 MB. Activations still need FP16 (≈ 8 MB). | **≈ 6–8 GB** total, plus a small FP32 buffer for the original weights during quantization if needed.

*Key insight*: In QLoRA we keep the *backbone* in INT4 (or even off‑load to CPU) and only train the tiny LoRA tensors. That’s why VRAM drops from ~30 GB to <10 GB.

---

**4️⃣ Common traps**

- **Counting optimizer state for frozen params**: In LoRA you should not keep Adam buffers for all 7B weights—only for LoRA ranks.
- **Ignoring activations**: Even with tiny trainable weights, activations dominate memory; batching must be adjusted accordingly.
- **Assuming INT4 fits in VRAM**: Quantized weights can be stored on CPU and streamed to GPU, but the FP16 activation tensors still live on GPU.

---

**5️⃣ Sanity‑check & verbalizing**

- *Check totals*: Sum of parameter + optimizer + activations ≈ reported VRAM.  
- *Cross‑reference* with known benchmarks (e.g., 30 GB for full fine‑tune, <10 GB for QLoRA on a 24 GB GPU).  
- When explaining: start from the size of the 7B model, then show how each method changes the number of trainable parameters and optimizer buffers, finally add activations to get the final VRAM figure.  

This structured approach lets you quickly estimate memory needs for any fine‑tuning strategy on a large language model.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
