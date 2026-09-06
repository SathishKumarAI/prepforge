---
qid: ing_9589736076__think__local
question: 'Explain: ── Synthesis prompt ──────────────────────────────────────────────────────────'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 194
output_tokens: 395
total_tokens: 589
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T10:58:58-05:00'
sources: []
---

**1. Clarify the request and set assumptions**  
   - Identify that “Synthesis prompt” refers to a prompt that asks for combining multiple ideas or data sources into one coherent output (often used in ML demos).  
   - Assume the audience has basic ML knowledge but may not know specific prompting terminology.

**2. Adopt a mental model: Prompt‑Engineering + Information‑Fusion**  
   - Treat the synthesis task as an *information‑fusion* problem: gather inputs → identify common structure → merge into a single representation.  
   - Map this onto prompt‑engineering steps: (a) specify intent, (b) provide examples, (c) define constraints.

**3. Step‑by‑step reasoning toward an answer**  
   1. Explain the purpose of synthesis prompts in ML demos (e.g., combining model outputs).  
   2. Break down the prompt into components: context, instruction, input format, desired output.  
   3. Show how to structure a template that forces the LLM to “think” about each source and then merge them.  
   4. Provide a concrete example (e.g., synthesizing two short summaries into one).  
   5. Discuss evaluation metrics (coherence, completeness).

**4. Common traps & wrong turns**  
   - Over‑loading the prompt with too many examples → confusion.  
   - Failing to specify output format → inconsistent results.  
   - Neglecting to enforce a logical flow → incoherent synthesis.

**5. Sanity‑check & communicate**  
   - Verify that each step logically follows and covers all parts of the question.  
   - Present the answer in clear, numbered sections so the reader can see the progression from definition to example to pitfalls.  

This structured thought process can be reused for explaining any prompt‑engineering concept.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
