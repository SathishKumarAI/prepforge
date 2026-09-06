---
qid: ing_7c26292c67__think__local
question: 'Explain: Types of Guardrails — GitHub - NVIDIA-NeMo/Guardrails: NeMo Guardrails
  is an open-source toolkit for easily adding programmable guardrails to LLM-based
  conversational systems. \u00b7 GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 224
output_tokens: 447
total_tokens: 671
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T09:14:02-05:00'
sources: []
---

**1. Clarify the request & set assumptions**  
   * The user wants an explanation of “Types of Guardrails” as presented in the NeMo Guardrails GitHub repo.  
   * Assume they’re familiar with LLMs but not with this specific toolkit.  
   * We’ll focus on the main guardrail categories (e.g., prompt‑level, response‑level, policy‑based) and mention how NVIDIA structures them.

**2. Choose a mental model**  
   * Treat each guardrail type as an “intervention layer” in the LLM pipeline: input filtering → generation monitoring → output sanitization.  
   * Map the repo’s documentation structure (README, examples, API docs) onto this three‑layer view to keep the explanation coherent.

**3. Step‑by‑step reasoning**  
   1. Identify the guardrail categories listed in the repo.  
   2. For each category, describe its purpose and typical implementation (e.g., regex filters for input, safety classifiers for output).  
   3. Illustrate how they interoperate: a prompt guardrail can block malicious queries before reaching the model; a response guardrail can correct or refuse unsafe replies.  
   4. Note any tooling specifics (Python APIs, YAML configs, pre‑built policy sets).

**4. Common traps to avoid**  
   * Don’t conflate “guardrails” with “security”; emphasize that they’re about safe conversational behavior, not hard‑encryption.  
   * Avoid overly technical jargon—keep it accessible yet accurate.  
   * Don’t misrepresent the open‑source nature; stress community contributions and extensibility.

**5. Sanity‑check & communicate**  
   * Re‑read the explanation to ensure each guardrail type is clearly defined and linked back to a code example or repo section.  
   * Use bullet points for readability, then summarize in one sentence per type.  
   * Finally, invite follow‑up questions if deeper detail on any category is needed.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
