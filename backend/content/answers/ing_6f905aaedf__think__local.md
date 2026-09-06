---
qid: ing_6f905aaedf__think__local
question: 'Explain: Tier 2 - LLM judge with policy-as-prompt'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 192
output_tokens: 457
total_tokens: 649
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T08:21:22-05:00'
sources: []
---

**1️⃣ Clarify the question & set assumptions**

- *What is “Tier 2” referring to?* Assume a multi‑tiered AI system where Tier 1 handles basic tasks, Tier 2 adds higher‑level reasoning.
- *“LLM judge”*: an LLM acting as a decision maker or evaluator.
- *“policy‑as‑prompt”*: embedding policy rules directly into the prompt rather than hard‑coding them.

**2️⃣ Adopt a mental model**

Use a **decision‑making pipeline**:
1. Input → pre‑processing  
2. Policy extraction (from prompt) → rule set  
3. LLM inference with policy constraints  
4. Output & audit

Treat the policy as a *contextual instruction* that biases the LLM’s generation.

**3️⃣ Step‑by‑step reasoning**

- Identify the task the judge must perform (e.g., content moderation, legal analysis).
- Translate policy requirements into natural‑language clauses that can be inserted at the top of the prompt.
- Structure the prompt: system message + policy section + user query + expected format.
- Run inference; the LLM will internally “follow” the policy because it’s part of its input context.
- Post‑process to verify compliance (e.g., regex check for prohibited tokens).

**4️⃣ Common pitfalls**

- *Overloading the prompt*: too many rules cause confusion or hallucinations.  
- *Assuming perfect adherence*: LLMs can still violate constraints; add a verification layer.  
- *Ignoring context length limits*: policy clauses eat token budget, reducing capacity to answer.

**5️⃣ Sanity‑check & explain aloud**

- **Check**: Does the policy clause logically cover all edge cases?  
- **Explain**: “We embed the policy directly into the prompt so that the LLM’s internal representation is already conditioned on it. The judge layer then runs inference with this bias, and we verify the output against the same policy to catch any drift.”  

By iterating this loop—policy → prompt → inference → audit—you create a robust Tier 2 LLM judge that respects policy-as‑prompt.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
