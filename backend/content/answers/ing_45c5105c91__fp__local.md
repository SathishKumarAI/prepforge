---
qid: ing_45c5105c91__fp__local
question: 'Explain: You have high quality 720p The number — How NETFLIX onboards new
  content: Video Processing at scale \ud83c\udfa5'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 193
output_tokens: 553
total_tokens: 746
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T18:33:46-05:00'
sources: []
---

## Why the “720 p” problem is a design‑space search

When Netflix acquires a new show it must satisfy two hard constraints:

1. **Bandwidth budget** – every user sees the same experience on any device, so each video stream must fit within a target bitrate (≈ 4–8 Mbps for 720 p).
2. **User‑perceived quality** – viewers judge videos by sharpness, color fidelity and motion smoothness; any loss of detail is immediately noticed.

These constraints turn the encoding task into a *constrained optimisation problem*: maximise perceptual quality \(Q\) subject to bitrate \(R \le R_{\max}\).  

### The pipeline

| Stage | Goal | Key idea |
|-------|------|----------|
| **Ingest** | Convert raw film (≈ 4K, 24 fps) into a canonical master. | Use a lossless codec (e.g., ProRes) so later stages can re‑encode without compounding artefacts. |
| **Transcode** | Produce multiple resolutions and bitrates. | Apply rate‑control algorithms that respect *content‑aware* models: scene‑change detection, motion vectors, texture complexity. |
| **Quality‑aware optimisation** | Adjust quantisation parameters (QP) per tile or segment. | Leverage a learned perceptual metric (e.g., VMAF) as a surrogate for human judgement; optimise QP so that VMAF ≈ 95 while staying below \(R_{\max}\). |
| **Delivery** | Package into Adaptive Bitrate (ABR) manifests. | Use segment‑level statistics to feed the ABR scheduler, ensuring smooth switches during playback. |

### The non‑obvious insight

Most people think encoding is a single global QP choice. In reality, **spatial and temporal granularity matters**: high‑motion scenes deserve lower QP (higher quality) but only for a few frames; static shots can be heavily compressed without perceptible loss. Netflix’s “tile‑based” encoder exploits this by running separate rate‑control loops per tile, guided by a lightweight neural network that predicts the *just‑noticeable* distortion. This yields ≈ 5–10 % bitrate savings while keeping VMAF constant—a win that scales to millions of concurrent streams.

In short, Netflix’s video‑processing at scale is an optimisation loop that marries signal‑processing fundamentals with learned perceptual models, all orchestrated in a distributed pipeline that keeps every viewer happy without blowing the network.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
