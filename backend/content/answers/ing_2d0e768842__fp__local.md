---
qid: ing_2d0e768842__fp__local
question: 'Explain: Model Inputs and Outputs — GitHub - zai-org/CogAgent: An open-sourced
  end-to-end VLM-based GUI Agent \u00b7 GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 194
output_tokens: 467
total_tokens: 661
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T17:40:14-05:00'
sources: []
---

### Why the input–output design matters

At its core a **visual‑language‑model (VLM) agent** is an *information bottleneck*: it must compress a raw visual scene and a natural‑language instruction into a latent representation that can be decoded back into executable actions.  
If the encoder receives only pixels, it cannot ground linguistic concepts; if it receives only text, it loses spatial context. The CogAgent architecture resolves this by **jointly conditioning on both modalities** at every stage.

### Input pipeline

1. **Image tensor (HxWx3)** – resized and mean‑subtracted, then fed to a Vision Transformer (ViT).  
2. **Instruction string** – tokenized, embedded, and projected into the same dimensional space as ViT’s patch tokens.  
3. **Prompting vector** – optional “goal” embedding that biases the model toward task completion.

These are concatenated into a single sequence `[CLS] + image_patches + [SEP] + instruction_tokens`, preserving order so positional encodings can learn cross‑modal interactions.

### Output pipeline

The decoder is a lightweight **action head**:

- **Action type logits** (e.g., click, type, scroll).  
- **Bounding‑box coordinates** predicted as relative offsets to the input image.  
- **Optional text generation** for typing or dialogue.

During training, the model optimizes a joint loss: cross‑entropy over action types, smooth L1 over boxes, and a policy‑gradient term that rewards correct task completion.

### Non‑obvious insight

Because the decoder shares weights with the encoder’s last layer, gradients flow back through both modalities simultaneously. This *self‑supervised alignment* forces the visual tokens to align naturally with linguistic concepts (e.g., “search bar” ↔ a specific patch cluster), yielding far better generalization than treating vision and language separately.

In short, CogAgent’s input–output design is an engineered instantiation of the **information bottleneck principle**: compress multimodal data into a shared latent space that can be decoded into discrete actions while preserving task‑relevant structure.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
