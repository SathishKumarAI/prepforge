---
qid: ing_82efb6db1f__think__local
question: 'Explain: Few-Shot and In-Context Learning (ICL) — Few Shot And Icl'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 198
output_tokens: 436
total_tokens: 634
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T09:38:21-05:00'
sources: []
---

**1️⃣ Clarify the ask & set assumptions**  
   * Understand that “few‑shot” refers to providing a handful of examples in the prompt, while ICL (in‑context learning) is the mechanism by which a model uses those examples to infer the task at hand.  
   * Assume we’re talking about large language models (LLMs) like GPT‑4, not fine‑tuning or external memory systems.

**2️⃣ Mental model / framework**  
   * Treat the prompt as a small training set: each example is an input–output pair.  
   * View the LLM’s internal state as a “contextual embedding” that gets updated by reading these pairs before generating the final answer.

**3️⃣ Step‑by‑step reasoning**  
   1. **Construct the prompt**: list N (often 1–5) labeled examples.  
   2. **Feed prompt to LLM**: it processes the text sequentially, updating its hidden representation after each token.  
   3. **Pattern extraction**: the model implicitly learns the mapping from inputs to outputs by detecting statistical regularities in the examples.  
   4. **Generate response**: for a new input (the “test” example), the LLM predicts tokens that best continue the context, effectively performing the learned task.

**4️⃣ Common pitfalls**  
   * Over‑loading the prompt with too many examples → token budget exhaustion.  
   * Mixing unrelated tasks in one prompt → confusion and degraded performance.  
   * Assuming the model truly “understands” – it’s pattern matching, not reasoning.

**5️⃣ Sanity check & verbalize**  
   * Verify that the output follows the same format as the examples.  
   * If results are off, reduce example count or adjust wording for clarity.  
   * Communicate the process: “I’m giving the model a few labeled pairs so it can infer the rule and then apply it to the new input.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
