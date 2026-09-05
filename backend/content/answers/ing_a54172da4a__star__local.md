---
qid: ing_a54172da4a__star__local
question: 'Explain: ── Per-frame prompt ──────────────────────────────────────────────────────────'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 339
total_tokens: 580
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:03:40-05:00'
sources: []
---

**Situation**  
At my last company we were building an automated video captioning system for a streaming platform. The model was generating accurate captions for still images but lagged behind when it came to dynamic scenes—every frame was treated the same, so the text drifted and missed subtle actions.

**Task**  
I had to redesign the pipeline so that each frame could be queried with its own contextual prompt, improving temporal coherence while keeping inference latency under 200 ms per frame.

**Action**  
First I introduced a lightweight transformer encoder (12‑layer ViT) that processed each frame and produced a visual embedding. Instead of feeding a fixed prompt to the decoder, I built an adaptive prompt generator: it concatenated the previous two decoded tokens with a learnable “frame‑style” vector derived from the visual embedding. This per‑frame prompt was then fed into a GPT‑2 style decoder. To keep latency low, I pruned the decoder’s attention mask and used mixed‑precision (FP16) inference on an NVIDIA A10 GPU. I also added a confidence gating module that skipped decoding for frames with high similarity to their neighbors.

**Result**  
The new system reduced caption drift by 47 % as measured by BLEU‑4 against human annotations, and overall latency dropped from 350 ms to 180 ms per frame. I learned that dynamic prompts can be efficiently generated on the fly if you tie them directly to visual features, and that careful pruning of attention can keep real‑time performance intact.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
