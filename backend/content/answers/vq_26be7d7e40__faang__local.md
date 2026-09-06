---
qid: vq_26be7d7e40__faang__local
question: '34 Question 34: What types of foundation models exist?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 524
total_tokens: 759
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:02:43-05:00'
sources: []
---

**Clarify**  
The interviewer asks, “What types of foundation models exist?” – i.e., the broad categories of large‑scale pre‑trained AI systems that serve as a base for downstream tasks. I’ll assume we’re focusing on *generative* and *discriminative* families used today (text, vision, multimodal, reinforcement).

**Approach**  
1. List main archetypes: language models, vision models, multimodal models, and RL‑based policies.  
2. Briefly explain each’s training objective and typical architecture.  
3. Note key examples to ground the discussion.

**Depth**  

| Category | Core Objective | Typical Architecture | Representative Models |
|----------|----------------|----------------------|-----------------------|
| **Language Models (LMs)** | Predict next token / fill‑in‑the‑blank | Transformer decoder or encoder‑decoder, often with large vocabularies | GPT‑4, LLaMA, Claude |
| **Vision Models** | Image classification, generation, segmentation | Vision Transformers (ViT), CNN backbones + transformer heads | CLIP, DALL·E 2, Stable Diffusion |
| **Multimodal Models** | Jointly encode text & image (or other modalities) | Cross‑modal transformers, contrastive learning | BLIP‑2, PaLM‑Vision, GPT‑4V |
| **RL/Policy Foundation Models** | Learn policies from large demonstrations or self‑play | Actor–critic with transformer policy networks | LLaMA‑RLHF, Diffusion Policy |

*Training signals*: supervised (supervised fine‑tuning), contrastive (CLIP), RL‑HF, diffusion denoising.  
*Complexity*: parameter counts from 70M to >10B; inference cost scales linearly with layers but can be mitigated by pruning or distillation.

**Edge Cases**  
- Overlap: e.g., GPT‑4V is both a language and multimodal model.  
- Emerging modalities (audio, time‑series) may blur boundaries.  
- Some models are hybrid (e.g., vision transformers used as backbones for LMs).

**Optimize & Communicate**  
I’d emphasize that the *type* is defined by its primary modality and objective; cross‑modal extensions are increasingly common. I would finish with a quick note on future directions—efficient adapters, sparse transformers—to show awareness of scaling trade‑offs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
