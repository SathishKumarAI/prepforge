---
qid: ing_9aae2d2d5d__star__local
question: 'Explain: Latency is killing your AI feature. Walk me through your options.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 383
total_tokens: 624
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:41:47-05:00'
sources: []
---

**Situation** – In the last sprint we rolled out a real‑time image‑recognition widget for our e‑commerce app. The model ran on a GPU cluster, but end‑to‑end latency spiked to 1.2 s during peak traffic, exceeding the 800 ms SLA and causing user churn.

**Task** – I had to bring latency below 700 ms without sacrificing accuracy or breaking the existing deployment pipeline.

**Action** – First, I profiled the inference stack with NVIDIA Nsight; the bottleneck was the model’s dense layers. I explored three options:  
1) Quantize the model to INT8 using TensorRT, reducing compute time by ~30 %.  
2) Replace the heavy backbone (ResNet‑50) with MobileNetV3, trading a 4 % drop in top‑1 accuracy for a 70 % speedup.  
3) Shift inference to a dedicated edge TPU on the CDN nodes, cutting network hops to <200 ms but adding a 5 % latency overhead from serialization.

I ran A/B tests: quantization alone lowered latency to 850 ms; MobileNet pushed it to 620 ms with only a 2 % accuracy loss. I merged that version into production and added a fallback path to the GPU cluster for edge cases.

**Result** – Latency dropped from 1.2 s to 620 ms, restoring the SLA and increasing conversion by 3.5 %. I learned that profiling early, quantifying trade‑offs, and validating with real traffic are key when tuning AI at scale.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
