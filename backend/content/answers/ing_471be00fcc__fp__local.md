---
qid: ing_471be00fcc__fp__local
question: 'Explain: Native Multimodality — Llm Internals'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 171
output_tokens: 474
total_tokens: 645
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T18:36:47-05:00'
sources: []
---

### Native multimodality in LLM internals  

At its core a large language model (LLM) solves **sequence‑to‑sequence prediction** under a unified representation space.  
When we give it only text, the input is tokenised, embedded, and fed through a stack of self‑attention layers that learn a contextual embedding for each token.  
To handle *multiple* modalities—image, audio, video—the same machinery must be coaxed into interpreting **heterogeneous tokens** as if they were words in the same latent space.

1. **Unified tokenisation** – Every modality is first mapped to a *token* (e.g., image patches → “visual‑tokens”, audio frames → “audio‑tokens”).  
2. **Shared embedding matrix** – All tokens, regardless of origin, are projected into one shared embedding space by a learned matrix \(E\). This guarantees that the self‑attention heads can compare a visual token to a textual token directly.  
3. **Positional encoding per modality** – A *single* positional encoding scheme (sinusoidal or learnable) is applied across modalities, allowing the model to reason about relative order (e.g., “first frame” vs. “first word”) without separate heads.  
4. **Cross‑modal attention** – The transformer’s self‑attention naturally performs cross‑modal interactions: a visual token attends to textual tokens and vice versa, learning joint semantics.  

**Non‑obvious insight:** Because the embedding matrix is shared, *modality gates* emerge implicitly. Tokens that are semantically incompatible (e.g., a sound of rain vs. the word “rain”) receive low dot‑product similarity, effectively teaching the model to “ignore” irrelevant modalities without explicit masking. This emergent gating is what makes native multimodality efficient: no separate encoders or fusion layers are required—just one transformer trained end‑to‑end on mixed data.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
