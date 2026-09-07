---
qid: ing_b767542f81__faang__local
question: 'Explain: You have eight hours to build a coding agent from scratch. Describe
  what you build and, more importantly, what you cut.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 249
output_tokens: 412
total_tokens: 661
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:49:18-05:00'
sources: []
---

**Clarify**  
We’re asked to design an *AI coding agent* in 8 h. Assume:  
- The agent must generate syntactically correct code snippets for a given prompt.  
- It runs locally on commodity hardware (no cloud GPUs).  
- No external API calls are allowed; everything must be built from scratch.

**Approach**  
1. **Core loop:** Prompt → Tokenizer → Model inference → Post‑process → Output.  
2. **Model choice:** Tiny Transformer decoder (≈ 3 M params) trained on a small code corpus.  
3. **Tokenizer:** Byte‑pair encoding tailored to common programming tokens.  
4. **Inference engine:** Simple matrix multiplication with float32, no batching.

**Depth**  
- *Training:* Use 50 k lines of open‑source Python/C++ from GitHub, fine‑tuned for 1 M steps (~2 h).  
- *Architecture:* 6 layers, 4 heads, hidden dim 256.  
- *Complexity:* Inference O(L·H²) per token; with L≈50 tokens → < 10 ms on CPU.  
- *Trade‑offs:* Small model ⇒ limited context & style but fast.

**Edge Cases**  
- Long prompts exceeding the fixed context window → truncate or prompt user to split.  
- Ambiguous syntax → return “I’m not sure” instead of buggy code.  
- Unseen libraries → generate placeholder imports and comment.

**Optimize & Communicate**  
- Skipped: large‑scale pretraining, beam search, reinforcement learning fine‑tuning—all would exceed time budget.  
- Highlighted: lightweight architecture, efficient tokenizer, local inference.  
- Narrated: “I chose a 3 M param Transformer because it balances speed and expressiveness within an 8‑hour window; larger models would stall training and inference.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
