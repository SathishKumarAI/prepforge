---
qid: ing_0c4324681b__think__local
question: 'Explain: A model runs fine in FP32 but produces garbage after conversion
  to FP16. Debug it.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 199
output_tokens: 482
total_tokens: 681
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T03:31:25-05:00'
sources: []
---

**1️⃣ Clarify the problem & assumptions**  
   * Confirm that the same training data and architecture are used before/after casting.  
   * Assume the conversion is done via `torch.float16` or TensorRT/ONNX FP16 cast, not a mixed‑precision tweak.

**2️⃣ Mental model: numerical stability vs. representational capacity**  
   * FP32 has 24‑bit mantissa (~7 decimal digits), FP16 only 10 bits (~3–4 digits).  
   * Operations that are safe in FP32 (e.g., small gradients, large exponentials) may overflow/underflow or lose precision in FP16.

**3️⃣ Step‑by‑step debugging strategy**  
   1. **Unit test individual ops**: run a few forward/backward steps with FP16 and compare activations to FP32; flag where norms diverge.  
   2. **Check for NaNs/Infs**: insert `torch.isnan`/`torch.isinf` checks after each layer.  
   3. **Inspect tensor ranges**: log min/max before/after cast; high‑magnitude values are a red flag.  
   4. **Look at loss scaling**: if training, try dynamic/static loss scaling to keep gradients in range.  
   5. **Reduce batch size / learning rate**: sometimes the product of many small numbers pushes FP16 limits.

**4️⃣ Common traps to avoid**  
   * Assuming “just cast everything” is enough—some ops (e.g., softmax, log‑softmax) behave poorly in FP16 without scaling.  
   * Forgetting that intermediate buffers may be kept in FP32; check device memory layout.  
   * Ignoring that certain libraries (cuDNN, TensorRT) have FP16‑specific kernels with extra constraints.

**5️⃣ Sanity‑check & communicate**  
   * Re‑run a single forward pass with FP32 and compare key statistics; if they match until a specific layer, focus there.  
   * Explain findings to the team: “The issue is overflow in the batch‑norm gamma due to small mantissa; applying loss scaling or using mixed precision solves it.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
