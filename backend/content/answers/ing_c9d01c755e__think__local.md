---
qid: ing_c9d01c755e__think__local
question: 'Explain: The Instruction Hierarchy — Prompt Engineering Fundamentals'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 188
output_tokens: 413
total_tokens: 601
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T14:15:23-05:00'
sources: []
---

**1. Clarify the goal & context**  
   *Ask what “Instruction Hierarchy” refers to:* is it a specific paper, a design pattern, or a general principle in prompt engineering?  
   *Assume it’s a framework that ranks instructions from most to least explicit within a prompt.*

**2. Adopt a mental model**  
   Treat prompts like programming functions: the hierarchy is a call stack where higher‑level directives (outermost) set intent and lower‑level ones provide concrete steps or constraints.

**3. Step‑by‑step reasoning**  
   1. **Top level – Purpose**: state what the AI should ultimately deliver (e.g., “Write a marketing email”).  
   2. **Mid level – Context & Style**: give background, tone, audience.  
   3. **Low level – Constraints & Format**: specify length, structure, keywords, or formatting rules.  
   4. **Optional micro‑instructions**: add examples or counterexamples to fine‑tune behavior.  
   At each layer, ensure the instruction is *clear, concise, and unambiguous*.

**4. Common pitfalls to avoid**  
   - Overloading a single line with too many directives (causes ambiguity).  
   - Mixing style and content instructions in the same sentence.  
   - Neglecting to order from general to specific; this can lead the model to ignore high‑level intent.  

**5. Sanity‑check & communicate**  
   • Read the prompt aloud: does it read like a step‑by‑step recipe?  
   • Verify that each instruction logically follows the previous one and that no two layers conflict.  
   • Test with a simple model call; if outputs drift, tighten the hierarchy or reorder levels.

This structured approach turns vague “ask me anything” prompts into precise, controllable instructions that guide an LLM toward the desired outcome.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
