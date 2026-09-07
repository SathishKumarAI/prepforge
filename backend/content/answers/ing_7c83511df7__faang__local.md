---
qid: ing_7c83511df7__faang__local
question: How do reasoning models change prompting practice? What transfers and what
  becomes obsolete?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 503
total_tokens: 740
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:33:30-05:00'
sources: []
---

**Clarify**

The question asks how the rise of *reasoning* (chain‑of‑thought, tree‑of‑thought, self‑consistent) language models shifts the way we craft prompts.  
Assumptions:  
- “Reasoning” refers to structured internal inference rather than surface‑level pattern matching.  
- Prompt designers still control token budget and can embed examples or constraints.

**Approach**

1. Identify which prompt elements remain useful (few‑shot, context length).  
2. Map new reasoning capabilities to those elements.  
3. Highlight obsolete practices (purely “fill‑in‑the‑blank” prompts).  

**Depth**

| Prompt Element | Current Role | With Reasoning Models | Notes |
|----------------|--------------|----------------------|-------|
| **Few‑shot examples** | Provide style & schema | Still needed, but can be *reasoning seeds*; fewer examples suffice because the model internally chains. | Example: “Show steps for solving X.” |
| **Explicit instructions** | Guide behavior | Become higher‑level (“output reasoning before answer”) rather than low‑level formatting. | Saves on verbosity. |
| **Keyword triggers** | Force certain outputs | Less reliable; models generate their own chain, so keyword cues can be noisy. | Use as sanity checks only. |
| **Token budget constraints** | Limit depth of answers | With reasoning, deeper chains may be needed; prompt must allow extra tokens or use *streaming* prompts. | Balance cost vs fidelity. |
| **“Answer‑only” style** | Quick retrieval | Obsolete for complex tasks; reasoning models prefer a structured answer → explanation → final answer format. | Improves trust and debuggability. |

**Edge Cases**

- Very short prompts may still trigger default “lookup” behavior.  
- Tasks with ambiguous goals can confuse the chain, leading to hallucinated steps.  
- Excessive token limits may cause memory overrun in the model.

**Optimize & Communicate**

*Optimization*: Use *prompt templates* that inject a minimal reasoning skeleton (e.g., “First think, then answer”).  
*Narrative*: Explain to interviewers that while few‑shot remains valuable, the emphasis shifts from surface cues to guiding internal inference. This shows you understand both model capabilities and practical prompt engineering trade‑offs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
