---
qid: ing_361e4b0b7c__star__local
question: Why Would You Want to Encode Your Video?
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 320
total_tokens: 555
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:16:25-05:00'
sources: []
---

**Situation:**  
At my last startup we were building a real‑time sports analytics platform that ingested live football match footage from multiple stadiums. The raw streams were uncompressed H.264 at 1080p and arriving over unreliable mobile links, so latency spikes hit our downstream object‑tracking models.

**Task:**  
I had to reduce bandwidth and storage usage while keeping the frame rate high enough for accurate pose estimation (≥30 fps) and without introducing excessive compression artifacts that would degrade model accuracy.

**Action:**  
I evaluated two codecs: H.265 and AV1, benchmarking them at 720p with a target bitrate of 4 Mbps. I scripted an automated pipeline in Python using FFmpeg to transcode incoming streams on the fly, then fed the encoded frames into our TensorFlow pose‑estimator. I also added a lightweight motion‑based keyframe strategy so that only high‑motion segments were fully compressed, preserving detail where it mattered.

**Result:**  
The new pipeline cut network usage by 55 % and storage costs down by 40 %. Latency dropped from an average of 280 ms to 95 ms, and our model’s mean AP improved from 0.68 to 0.73 because the cleaner frames reduced false positives. I learned that codec choice is as much about downstream model sensitivity as it is about raw compression ratios.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
