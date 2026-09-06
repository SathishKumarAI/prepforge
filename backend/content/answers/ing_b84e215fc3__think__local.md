---
qid: ing_b84e215fc3__think__local
question: What is in-context learning, and how do you decide between it and fine-tuning?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 196
output_tokens: 539
total_tokens: 735
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T13:07:06-05:00'
sources: []
---

**Metacognition for answering “What is in‑context learning, and how do you decide between it and fine‑tuning?”**

1. **Clarify the scope & assumptions**  
   - Assume the audience knows basic ML terminology but not advanced training paradigms.  
   - Define *in‑context learning* (ICL) as the ability of a large language model to use examples supplied at inference time without weight updates, versus *fine‑tuning* (FT), which adjusts weights on a task‑specific dataset.  
   - State that we’re comparing usage decisions, not implementation details.

2. **Mental model / framework**  
   - Use a decision tree:  
     1. *Task complexity & data availability* → ICL vs FT.  
     2. *Latency & deployment constraints* → ICL (no retraining) vs FT (model size grows).  
     3. *Privacy & regulatory concerns* → ICL (data stays local) vs FT (requires data transfer).

3. **Step‑by‑step reasoning**  
   - Start by explaining what ICL looks like in practice (prompting with a few examples).  
   - Contrast that with FT’s pipeline: dataset, training loop, evaluation, deployment.  
   - List concrete criteria:  
     *If you have only a handful of labeled samples and need rapid iteration → ICL.*  
     *If you have thousands/millions of high‑quality labels and want reproducible performance → FT.*  
   - Mention hybrid approaches (prompt engineering + small FT) as a middle ground.

4. **Common traps to avoid**  
   - Don’t conflate “few‑shot” with ICL; few‑shot is just one instantiation.  
   - Avoid over‑promising ICL for very domain‑specific tasks where the model’s prior knowledge is insufficient.  
   - Don’t ignore the cost of prompt construction and token limits when choosing ICL.

5. **Sanity‑check & verbalize**  
   - Re‑state the key take‑away: *ICL* = “quick, no‑weight‑change adaptation”; *FT* = “deliberate, data‑heavy model refinement.”  
   - Ask a quick rhetorical question: “If you need to comply with GDPR and can’t ship user data out of the box, does ICL help?” → Yes.  
   - Conclude by summarizing the decision criteria in a bullet list so the answer is memorable.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
