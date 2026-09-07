---
qid: ing_2ce92c9ac6__faang__local
question: 'Explain: DeepSeek Family — Model Taxonomy'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 515
total_tokens: 746
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:27:26-05:00'
sources: []
---

**Clarify**  
The interviewer asks you to describe the *DeepSeek Family* and its *Model Taxonomy*. I’d restate: “We’re looking for an overview of DeepSeek’s model hierarchy—what classes of models exist, how they differ in architecture or purpose, and why that taxonomy matters.” I’d ask: *Do we need to cover only LLMs, or also vision & multimodal variants?*  

**Approach**  
1. Outline the high‑level categories (e.g., Foundation Models → Language, Vision, Multimodal).  
2. For each category list key sub‑families (size, training data, pretraining objective).  
3. Highlight distinguishing design choices (tokenization, attention heads, scaling laws).  

**Depth**  
- **Foundation Layer**: GPT‑style autoregressive models (DeepSeek‑LLM‑1B → 16B) trained on billions of tokens with causal LM loss.  
- **Vision Layer**: ViT‑like encoders (DeepSeek‑ViT‑Base/XL) using patch embeddings and multi‑head self‑attention, pretrained on ImageNet‑22K + LAION.  
- **Multimodal Layer**: Cross‑modal transformers (DeepSeek‑M2L) that fuse text & image embeddings via cross‑attention; trained with contrastive loss + next‑token prediction.  
- **Specialized Heads**: Retrieval‑augmented LLMs, code generation models, and domain‑tuned fine‑tunes (e.g., medical, finance).  

Explain why the taxonomy helps: modular training pipelines, easier scaling decisions, and clearer API contracts for downstream teams.  

**Edge Cases**  
- *Overlap*: Some multimodal models also function as LLMs; clarify dual labeling.  
- *Emergent capabilities*: Larger sizes may cross thresholds—test for hallucination rates.  
- *Deployment*: Distinguish between inference‑optimized variants vs research prototypes.  

**Optimize & Communicate**  
Conclude by noting trade‑offs: larger models → higher compute, but better zero‑shot; smaller ones → faster latency, lower cost. Emphasize that a clear taxonomy enables efficient resource allocation and clearer SLAs for product teams. This narrative showcases structured reasoning, technical depth, and practical awareness—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
