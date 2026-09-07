---
qid: ing_8c0f373857__faang__local
question: What's the difference between zero-shot and few-shot prompting, and when
  would you use each?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 497
total_tokens: 737
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:09:46-05:00'
sources: []
---

**Clarify**  
We’re comparing *zero‑shot* vs. *few‑shot* prompting for large language models (LLMs). Zero‑shot means the prompt supplies only a task description; few‑shot adds a handful of example pairs to guide the model. Clarifying assumptions: 1) The LLM has been pretrained on broad text, 2) We’re not fine‑tuning but using in‑context examples, and 3) The target domain may or may not align with pretraining data.

**Approach**  
1. Define each paradigm formally.  
2. Enumerate benefits: generalization vs. specificity.  
3. Map use‑cases to constraints: computational budget, example availability, task complexity.  

**Depth**  
- **Zero‑shot**: Prompt = “Translate the following sentence from English to French.” The model relies solely on its internal knowledge of language rules and statistical patterns. It scales well—no extra tokens for examples, lower inference cost, and works when examples are scarce or proprietary.  
- **Few‑shot**: Prompt = “Translate… Example 1: …; Example 2: …; Now translate…” The few in‑context demonstrations act as a lightweight “mini‑fine‑tune,” nudging the model toward a specific style, domain, or nuance (e.g., legal jargon). It improves accuracy on niche tasks but consumes more tokens and may overfit to the provided pattern.  

**Edge Cases**  
- Zero‑shot can falter on highly specialized vocab (e.g., medical terminology).  
- Few‑shot may misinterpret contradictory examples or suffer from *prompt leakage* if too many examples exceed token limits.  
- Extremely long prompts hit model context windows, truncating useful content.

**Optimize & Communicate**  
Use zero‑shot when:  
- Rapid prototyping, minimal latency, or regulatory constraints forbid sharing data.  

Use few‑shot when:  
- Domain specificity is critical, or the LLM’s general knowledge is insufficient.  
- You can afford extra tokens and want a measurable boost in precision.

In practice, start with zero‑shot; if performance plateaus, add 2–3 high‑quality examples and re‑benchmark. This iterative strategy balances cost, speed, and accuracy—exactly what FAANG interviewers expect.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
