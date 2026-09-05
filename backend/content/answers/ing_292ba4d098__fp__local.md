---
qid: ing_292ba4d098__fp__local
question: What are the Different Video Encoding Formats?
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 168
output_tokens: 499
total_tokens: 667
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T17:32:53-05:00'
sources: []
---

### The “Why” of Video Codecs

At its core, a video codec is an **information‑theoretic compressor**: it maps a stream of pixels and motion vectors into a bitstream whose size is limited by the channel (e.g., a 4 Mbps mobile link). The fundamental trade‑off is *rate–distortion*: how many bits can we save while keeping perceptual quality above a threshold? Each codec embodies a different solution to this optimization.

| Format | Design goal | Key idea |
|--------|-------------|----------|
| **H.264/AVC** | Early 2000s: high compression with modest hardware cost | Block‑based motion compensation + transform coding; limited inter‑frame prediction (I/P/B). |
| **H.265/HEVC** | Same quality as AVC at ~50 % fewer bits | Larger, variable‑size blocks; better entropy coding (CABAC); more efficient intra modes. |
| **AV1** | Open‑source, royalty‑free, targeting web streaming | Adaptive block partitioning, multi‑reference frames, improved prediction, and a new “range coder” for entropy. |
| **VP9** | Google’s competitor to HEVC | Similar to AV1 but with less aggressive rate control; still open. |
| **MPEG‑4 Part 2 (DivX/Xvid)** | 1990s: consumer video on CD/DVD | Simple macroblock motion estimation, no B‑frames; cheap decoding. |
| **JPEG‑2000** | Still‑image, but also used in high‑end video | Wavelet transform + arithmetic coding; excellent for low‑resolution or archival. |

### Non‑obvious insight

Most people think codecs differ only in “bitrate” or “visual quality.” In reality, *the choice of block size and motion model fundamentally changes the statistical structure of residuals*. AV1’s adaptive quadtree partitioning, for example, turns a highly non‑stationary signal into many small, nearly independent sub‑signals, which entropy coders can compress far more efficiently. Thus, codec design is less about “making fewer bits” and more about **reshaping the data so that simpler coding models become powerful**.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
