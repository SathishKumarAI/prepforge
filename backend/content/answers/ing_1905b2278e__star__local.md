---
qid: ing_1905b2278e__star__local
question: 'Explain: 1 Introduction — What Makes Low-Bit Quantization-Aware Training
  Work for Reasoning LLMs? A Systematic Study'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 253
output_tokens: 354
total_tokens: 607
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:19:12-05:00'
sources: []
---

**Situation:**  
During my senior research project at the university AI lab, we were tasked with deploying a large language model (LLM) on edge devices for medical diagnostics. The model’s 16‑bit floating point weights consumed too much memory and exceeded power budgets.

**Task:**  
I needed to reduce the model size to under 200 MB while preserving its reasoning accuracy—specifically, maintaining at least a 4% F1 score drop on clinical question answering benchmarks.

**Action:**  
I implemented low‑bit quantization‑aware training (QAT) by first profiling activation distributions with TensorFlow Lite’s Quantization Aware Training API. I then replaced the 16‑bit weights with 4‑bit integer representations, inserting fake‑quantization nodes during forward passes to mimic inference noise. To counteract the loss of precision in logical reasoning layers, I introduced layer‑wise scaling factors and a custom gradient clipping scheme that preserved back‑propagation fidelity. Finally, I performed fine‑tuning on a curated set of 10k reasoning examples, monitoring perplexity and accuracy after each epoch.

**Result:**  
The quantized model dropped from 1.2 GB to 190 MB and achieved a 3.8% F1 reduction—well within the target—while inference latency fell by 35%. I learned that careful calibration of fake‑quantization nodes and selective scaling is key to preserving reasoning capabilities in ultra‑low‑bit models.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
