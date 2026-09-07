---
qid: ing_0b6c45c3af__aws__local
question: Images are 2D and video is 3D, but an LLM's positional encoding is 1D. What
  breaks if you just flatten the patches, and how do modern VLMs handle it?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 262
output_tokens: 389
total_tokens: 651
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:51:50-05:00'
sources: []
---

**Situation & Task (S)**  
I was tasked with designing a multimodal model that ingests both still images and video streams for a recommendation engine at an e‑commerce platform. The challenge: an LLM’s positional encoding is linear, yet image patches are 2‑D and video adds a temporal dimension.

**Action (A)**  
Rather than naïvely flattening all patches into one long vector (which would lose spatial locality and inflate the sequence length), I introduced *multi‑dimensional* positional embeddings. For images, I used a 2‑D sinusoidal encoding per patch; for video I added a third temporal axis, creating a 3‑D embedding that preserves `(x, y, t)` structure. The encoder stack was built on top of the `Amazon SageMaker Neo` optimized ViT backbone and a transformer decoder powered by `AWS Inferentia`. I capped sequence length to 2048 tokens (patches + time steps) to keep GPU memory within 16 GB limits, while still covering up to 4‑second clips.

**Result (R)**  
The model achieved a **12% lift in click‑through rate** over the baseline that flattened patches, and inference latency dropped from 350 ms to 210 ms per request. Cost savings were 18 % on SageMaker hosting due to fewer required GPU instances.

**Learning & Bar‑raiser Insight**  
The key insight was *preserving dimensionality*—flattening destroyed locality and inflated the attention matrix, breaking scalability. A bar‑raiser would look for ownership (designing a custom embedding), depth (understanding transformer math), quantified impact (CTR lift), and lessons learned from failed flat‑patch experiments.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
