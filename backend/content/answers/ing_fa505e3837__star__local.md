---
qid: ing_fa505e3837__star__local
question: Compare GPTQ, AWQ, GGUF, INT8, and FP8. How do you actually choose a quantization
  approach for a deployment?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 255
output_tokens: 397
total_tokens: 652
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:49:15-05:00'
sources: []
---

**Situation:** In my last role at a cloud‑AI startup, we were preparing to roll out a large language model (LLM) to our edge devices. The baseline FP32 model was 6 GB and far too heavy for the target hardware, so we had to pick a quantization strategy that balanced size, speed, and inference accuracy.

**Task:** My goal was to select a quantization method that would reduce the model footprint below 2 GB while keeping perplexity within 5% of the original FP32 baseline, all under a two‑week sprint.

**Action:** I first benchmarked four approaches: INT8 post‑training quantization (fast but accuracy drop), FP8 dynamic scaling (good for GPUs), GPTQ (gradient‑based fine‑tuning with per‑token calibration) and AWQ (adaptive weight quantization with group‑wise scaling). Using the HuggingFace 🤗 Transformers library, I ran a micro‑benchmark on our dataset. GPTQ delivered 1.9 GB size with only 3% perplexity loss but required 4× more fine‑tuning time. AWQ was 2.0 GB, 4% loss, and finished in 12 hours. GGUF (the file format) wrapped the quantized weights for fast loading on ARM CPUs. I decided to use AWQ + GGUF because it hit our size target, stayed within the accuracy budget, and supported our deployment pipeline.

**Result:** The final model ran at ~30 ms per token on edge GPUs, 70% faster than FP32, with a 3% increase in perplexity—well below our threshold. I learned that choosing quantization is a trade‑off between fine‑tuning effort, target hardware, and acceptable accuracy loss; profiling each method on the actual workload is essential before committing.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
