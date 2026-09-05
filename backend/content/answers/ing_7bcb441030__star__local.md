---
qid: ing_7bcb441030__star__local
question: 'Explain: Run AI models on-device with Google AI Edge'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 376
total_tokens: 612
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:41:34-05:00'
sources: []
---

**Situation** – In a summer internship at a wearable‑tech startup, we were tasked with adding real‑time gesture recognition to our smartwatch prototype. The product was shipping to beta users in two months, and the existing cloud‑based model would introduce unacceptable latency and privacy concerns.

**Task** – I had to port our TensorFlow Lite image classification pipeline to run entirely on-device using Google AI Edge’s TPU accelerator, while keeping battery life under 5 % per hour of use and maintaining at least 85 % accuracy compared to the cloud baseline.

**Action** – First, I pruned the model with quantization‑aware training, reducing its size from 12 MB to 3.2 MB without dropping accuracy. Then I compiled it with EdgeTPU compiler, generating a `.tflite` binary that leveraged the on‑chip accelerator. I integrated the runtime into our watchOS app using the `TensorFlowLiteSwift` library and added an adaptive batching strategy that processed frames only when motion sensors detected activity. Finally, I set up CI tests to benchmark inference latency (target < 30 ms) and power consumption on a custom test rig.

**Result** – The on-device model achieved 87 % top‑1 accuracy, ran at ~25 ms per frame, and reduced battery drain by 12 % compared to the cloud fallback. User feedback in beta indicated smoother interactions, and we shipped the feature ahead of schedule. I learned how to balance precision, size, and power when deploying ML on edge hardware, a skill that continues to inform my work today.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
