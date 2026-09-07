---
qid: ing_ac0b464a59__faang__local
question: 'Explain: Title: Language Models are Few-Shot Learners'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 551
total_tokens: 786
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:24:07-05:00'
sources: []
---

**Clarify**  
We’re asked to explain why modern language models (LMs) can perform new tasks with only a handful of examples—i.e., they are *few‑shot learners*.  I’ll assume the audience knows basic transformer architecture and that “few‑shot” means zero, one or a few prompt examples.  

**Approach**  
1. Summarize the key property: in-context learning via attention over a long prompt.  
2. Highlight pre‑training objective (next‑token prediction) that equips the model to treat arbitrary text as instructions.  
3. Explain how the model implicitly stores task signals and adapts weights on the fly.  

**Depth**  
- **Transformer self‑attention**: every token attends to all others, so a prompt containing examples + query is processed jointly. The model can “look back” at demonstration pairs and infer the mapping from input → output.  
- **Pre‑training objective**: GPT‑style models are trained to predict the next word given preceding context. This forces them to learn *conditional probability distributions* over text, essentially learning a generic function approximator for any mapping that can be expressed in language.  
- **Implicit task encoding**: The prompt acts as a *task description*. Because the model has seen millions of such patterns during pre‑training (e.g., “Question: … Answer: …”), it learns to recognize the structure and reuse it without gradient updates.  
- **Weight freezing + dynamic adaptation**: No weight changes occur; instead, the activation pattern shifts as new tokens are added. This is akin to *meta‑learning* where the model has already learned how to learn.  

**Edge cases**  
- Very long prompts exceed token limits → truncation may drop critical examples.  
- Ambiguous or contradictory demonstrations can confuse the attention mechanism.  
- Tasks requiring structured output (tables, code) may need additional prompting tricks.  

**Optimize & Communicate**  
I’d emphasize that few‑shot learning is not magic; it’s a byproduct of large-scale self‑supervised training and transformer flexibility. To improve performance one could:  
1. Use *prompt engineering* to standardize format.  
2. Apply *prefix tuning* or *adapter modules* for domain‑specific tasks while keeping the base LM frozen.  

Narratively, I’d frame it as “the model has learned a universal language‑to‑language mapping; few examples just nudge it toward the desired sub‑mapping.” This aligns with FAANG interview expectations: clear structure, technical depth, awareness of limitations, and suggestions for practical enhancement.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
