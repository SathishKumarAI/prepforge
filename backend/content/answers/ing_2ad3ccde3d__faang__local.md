---
qid: ing_2ad3ccde3d__faang__local
question: 'Explain: Walk me through your process for systematically improving a prompt
  that''s underperforming.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 439
total_tokens: 678
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:22:47-05:00'
sources: []
---

**1️⃣ Clarify**  
> *Restate:* “How do I iteratively refine an AI prompt that isn’t delivering the desired output?”  
> *Assumptions to confirm:*  
> • Target model (GPT‑4/LLM) and its token budget.  
> • Success metric (accuracy, relevance, coherence).  
> • Available feedback loop (human grading or automated score).

**2️⃣ Approach**  
1. **Baseline audit** – run the prompt, capture raw output and scores.  
2. **Identify failure modes** – is it factual drift, hallucination, verbosity, missing context?  
3. **Formulate hypotheses** – e.g., “Adding a concise instruction reduces hallucinations.”  
4. **Design controlled experiments** – tweak one variable per iteration (length, phrasing, examples).  
5. **Measure & iterate** – evaluate against the metric; stop when improvement plateaus.

**3️⃣ Depth**  
- *Token‑budget aware wording:* keep it under 256 tokens to avoid truncation.  
- *Structured prompts:* use bullet lists for instructions and expected answer format.  
- *Contextual grounding:* prepend recent facts or data snippets.  
- *Repetition avoidance:* explicitly ask the model not to repeat earlier content.  
- *Evaluation function:* if possible, embed a lightweight verifier (e.g., regex check) to automatically flag hallucinations.

**4️⃣ Edge Cases**  
- Model’s temperature set too high → random noise; test with 0‑1 range.  
- Over‑specification leading to forced answers that ignore nuance.  
- Prompt injection attacks in multi‑turn settings—sanitize inputs.

**5️⃣ Optimize & Communicate**  
Explain trade‑offs: tighter prompts reduce token cost but may cut creative depth. Show a decision tree of when to add examples vs. concise instructions. Conclude with “We’ll iterate until the metric improves by ≥10 % or reaches the target threshold, then lock the prompt for production.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
