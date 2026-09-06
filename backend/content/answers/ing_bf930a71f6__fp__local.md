---
qid: ing_bf930a71f6__fp__local
question: 'Explain: Video: frames are expensive — Multimodal'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 170
output_tokens: 439
total_tokens: 609
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:50:37-05:00'
sources: []
---

**Why every frame is a “big deal” for multimodal AI**

At its core, a video stream is a *sequence of high‑dimensional signals* that must be mapped to an output space (captioning, action recognition, etc.). Each pixel carries roughly 24 bits per color channel; a single 1080p frame already contains ~2 M pixels → ~60 Mb of raw data. Unlike static images, the *temporal dimension* multiplies this cost: for a 30 fps clip, you process 30× more data per second.

From an **optimization** perspective, models must learn both spatial and temporal invariances. A convolutional encoder alone would ignore motion; adding recurrent or transformer layers forces the network to “explain” how pixel values evolve over time. The cost is not merely storage but *gradient computation*: backpropagating through dozens of time steps multiplies memory usage by the sequence length (the “recurrent vanishing gradient” problem).  

Information‑theoretically, video contains **redundancy** across frames—most pixels change little between consecutive images. Yet a generic neural net treats each frame independently unless explicitly regularized, squandering capacity. Efficient architectures therefore impose *temporal attention* or *optical‑flow guided warping*, exploiting the fact that only a small subset of pixels carries new information.

A non‑obvious insight: **the bottleneck is not just raw data size but the need for *joint multimodal alignment***. When video is paired with language (e.g., captions), the model must align sparse linguistic tokens to continuous visual dynamics. This cross‑modal alignment forces the network to learn a high‑dimensional joint embedding that preserves both modalities’ structure—an inherently expensive operation that scales poorly with frame count.

In short, every extra frame multiplies storage, computation, and the complexity of learning a coherent spatio‑temporal representation, making video an “expensive” modality by design.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
