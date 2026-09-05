---
qid: ing_715b1fc9f8__star__local
question: 'Build a Voice Activity Detector from scratch: detect where speech is present
  in an audio stream. How do you approach it, and how do you make it robust for phone-quality
  Indian-language audio?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 263
output_tokens: 351
total_tokens: 614
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T02:14:05-05:00'
sources: []
---

**Situation:** In my last role I was tasked with adding a voice activity detector (VAD) to a low‑latency call‑analytics pipeline for an IVR system used by a telecom operator in India. The incoming audio was 8 kHz, mono, and often contained long pauses, background traffic noise, and regional accents.

**Task:** Build a VAD that could run on the edge device (ARM Cortex‑A53), achieve >95 % true positive rate while keeping false alarms below 3 %, and be robust across diverse Indian languages and noisy phone lines.

**Action:** I started with short‑time energy and zero‑crossing rate to get an initial mask, then fed these features into a lightweight LSTM (2 layers, 32 units) trained on a curated dataset of labeled speech/non‑speech snippets from multiple Indian dialects. To handle background noise, I added a spectral subtraction pre‑processor and used adaptive thresholding based on the median energy per call. For real‑time constraints I quantized the model to INT8 and compiled it with TVM for ARM. I also built an online confidence score that flagged ambiguous frames for later re‑analysis.

**Result:** The deployed VAD achieved 96.7 % precision and 94.5 % recall on live traffic, reducing false positives by 40 % compared to the previous heuristic method. Latency stayed under 10 ms per frame, and CPU usage was <15 %. I learned that combining simple acoustic cues with a tiny neural net and careful quantization can deliver high‑quality VAD even on constrained hardware.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
