---
qid: ing_bf930a71f6__think__local
question: 'Explain: Video: frames are expensive — Multimodal'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 189
output_tokens: 458
total_tokens: 647
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T13:37:19-05:00'
sources: []
---

**1️⃣ Clarify the prompt & set assumptions**  
* Understand that “Video: frames are expensive” refers to the high computational cost of processing every frame in a video when building multimodal AI models (e.g., vision‑language tasks).  
* Assume we’re explaining this to an audience familiar with basic ML but not deep‑learning internals.  

**2️⃣ Adopt a mental model**  
Use the *data‑processing pipeline* framework:  
- **Input acquisition → Feature extraction → Fusion → Decision**.  
Map “frames are expensive” onto the *feature extraction* stage, where each pixel becomes high‑dimensional tensors that must be fed through heavy CNNs or transformers.

**3️⃣ Step‑by‑step reasoning**  
1. A typical video runs at 30–60 fps; a one‑minute clip yields ~1800–3600 frames.  
2. Each frame is processed by a backbone (e.g., ResNet, ViT) that may have millions of parameters → billions of FLOPs per frame.  
3. Multiply FLOPs by the frame count → orders of magnitude more compute than still images.  
4. Memory bandwidth and GPU VRAM also grow linearly with frames, causing bottlenecks.  
5. Explain common mitigations: key‑frame selection, temporal downsampling, 3‑D convolutions, efficient transformers (e.g., TimeSformer), or optical‑flow‑based shortcuts.

**4️⃣ Avoid pitfalls**  
* Don’t conflate “expensive” with “slow”; focus on *compute and memory*, not just inference latency.  
* Resist oversimplifying: mention that some models trade accuracy for speed by reducing resolution or channel width.  

**5️⃣ Sanity‑check & verbalize**  
Quick mental math: 3 GB/s of raw pixel data × 30 fps ≈ 90 GB/s → illustrates bandwidth strain.  
When explaining, start with a relatable example (watching 1 min of HD video) and build up to the numbers, ending with practical solutions.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
