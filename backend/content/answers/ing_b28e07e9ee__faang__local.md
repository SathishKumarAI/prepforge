---
qid: ing_b28e07e9ee__faang__local
question: How do models understand video, and what are the current limits?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 500
total_tokens: 735
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:38:52-05:00'
sources: []
---

**Clarify**  
We’re asked how contemporary AI systems *understand* video (i.e., extract semantics, predict future frames, or answer questions) and what practical limitations remain. Clarifying assumptions: we assume “video understanding” means high‑level tasks such as action recognition, captioning, or VQA, not raw compression.

**Approach**  
1. Review the core pipeline: visual feature extraction → temporal modeling → multimodal fusion.  
2. Identify state‑of‑the‑art architectures (e.g., VideoBERT, ViViT, CLIP‑Video).  
3. Enumerate bottlenecks: data volume, annotation cost, spatiotemporal resolution, and reasoning depth.

**Depth**  
- **Feature extraction** uses 2D CNNs or vision transformers per frame; some models stack frames (e.g., I3D) or process video patches directly (ViViT).  
- **Temporal modeling** is handled by 1‑D convolutions, temporal self‑attention, or recurrent modules. Recent work replaces RNNs with pure transformer blocks, enabling parallelism and longer horizons.  
- **Multimodal fusion** aligns visual tokens with text embeddings via cross‑modal attention (VideoBERT) or contrastive learning (CLIP‑Video).  
- **Training data**: large-scale datasets (Kinetics‑700, HowTo100M) provide millions of clips but are noisy and biased.  
- **Inference cost**: transformer‑based models require high GPU memory; latency is a concern for real‑time applications.

**Edge Cases**  
- Low‑lighting or occluded scenes break feature quality.  
- Rare actions lack sufficient training examples, leading to catastrophic forgetting.  
- Models may hallucinate events not present in the video due to over‑reliance on language priors.

**Optimize & Communicate**  
Future work can reduce compute via efficient transformers (Linformer, Performer) and self‑supervised pretraining that leverages unlabeled footage. For interview narrative: start with the pipeline diagram, then discuss each component’s trade‑offs, finish by quantifying how a 10× speedup would impact deployment in mobile AR or surveillance. This shows structured reasoning, depth, and awareness of practical constraints—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
