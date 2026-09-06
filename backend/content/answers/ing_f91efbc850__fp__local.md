---
qid: ing_f91efbc850__fp__local
question: How do modern multimodal models get image and video understanding into an
  LLM, and what changes for video specifically?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 182
output_tokens: 568
total_tokens: 750
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T00:49:11-05:00'
sources: []
---

**From first principles**

The core problem is *grounding language in the world*: an LLM must answer questions about a picture or a clip, so it has to know what each visual token means and how those meanings evolve over time.  
A solution is to map every modality into a **shared embedding space** where the same transformer can operate on any token.

1. **Vision encoder → language tokens** – A convolutional or ViT backbone extracts *image patches* (or frame crops). Each patch is projected to an embedding and added with positional encoding, just like words.  
2. **Contrastive pre‑training** – Using large image–text corpora the model learns a joint distribution \(p(v|t)\) by maximizing mutual information between visual and textual embeddings (InfoNCE/CLIP). This guarantees that semantically similar concepts lie close in space.  
3. **Cross‑modal attention** – The frozen vision tokens are fed to an LLM as additional keys, values, and queries. The transformer learns *which* visual token attends to which word, effectively learning a mapping from language to perception.

**What changes for video**

- **Temporal dimension**: frames become a sequence of image embeddings. We add a *time‑positional encoding* (or use 3D convolutions) so the model knows when each patch appears.  
- **Causal masking** – To respect causality, the transformer masks future frame tokens during decoding, ensuring predictions depend only on past and present visual context.  
- **Temporal attention pooling** – A lightweight temporal‑pooling head aggregates per‑frame embeddings into a clip token that can be treated like a “super‑word.”  

**Non‑obvious insight**

Because the vision encoder is frozen after contrastive pre‑training, the LLM can *reuse* its language weights to interpret visual tokens. The cross‑modal attention learns *visual grounding* without ever seeing paired video‑text data; it simply aligns to the same embedding manifold. This means a single multimodal transformer can handle images, videos, and even audio by swapping in an appropriate frozen encoder—making the architecture both modular and deeply grounded in shared information geometry.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
