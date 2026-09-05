---
qid: ing_9f4ebd079c__star__local
question: Budget the compute and latency for the onboard stack. What breaks when a
  model gets bigger?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 404
total_tokens: 647
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:50:42-05:00'
sources: []
---

**Situation:**  
While leading the autonomous delivery drone project at AeroNav, we were tasked with integrating an on‑board vision model that could run in real time while still fitting within our 200 W power budget and <30 ms latency window.

**Task:**  
I had to budget compute cycles and memory for the entire inference stack—preprocessing, model execution, post‑processing—and identify what would fail if we scaled the model from a lightweight 4 M‑parameter CNN to a larger 32 M‑parameter transformer‑based detector.

**Action:**  
First, I profiled each pipeline stage on our Jetson Xavier using Nsight Systems. Pre‑processing (image resize, normalization) was negligible at 1 ms, but the model inference dominated: 4 M params took ~15 ms/forward pass; scaling to 32 M pushed it to ~60 ms, exceeding our deadline. I then benchmarked memory usage—4 M used 30 MB of VRAM, while 32 M required 240 MB, leaving no headroom for batch buffers and runtime ops. To stay within budget, I applied TensorRT INT8 quantization, reducing inference time to ~35 ms and memory to 110 MB, but still above target. I introduced a two‑stage pipeline: a lightweight feature extractor running every frame, and the heavy transformer invoked only on frames flagged by a simple threshold detector. This reduced average latency to 22 ms while keeping peak usage under 200 W.

**Result:**  
The final stack met our <30 ms deadline and stayed within the 200 W power envelope. We achieved a 45% increase in detection accuracy over the baseline, and learned that model size breaks latency by inflating both compute cycles and memory pressure—so careful quantization and staged inference are essential when scaling onboard AI.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
