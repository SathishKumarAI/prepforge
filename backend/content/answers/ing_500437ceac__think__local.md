---
qid: ing_500437ceac__think__local
question: Your prompt change gained 3 points on the eval. How confident are you that
  it is real?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 198
output_tokens: 425
total_tokens: 623
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T06:18:33-05:00'
sources: []
---

**1️⃣ Clarify & State Assumptions**  
- Identify what “prompt change” refers to (e.g., a new instruction or wording).  
- Assume the evaluation system is objective and that 3‑point gain is measurable.  
- Treat confidence as a probability estimate, not a binary yes/no.

**2️⃣ Mental Model: Bayesian Updating**  
Use Bayes’ rule: \(P(\text{real}|\text{gain}) = \frac{P(\text{gain}|\text{real})P(\text{real})}{P(\text{gain})}\).  
- \(P(\text{real})\): prior belief that any gain is genuine (maybe 0.5 if unknown).  
- \(P(\text{gain}|\text{real})\): likelihood of a real change producing a 3‑point lift (high, say 0.9).  
- \(P(\text{gain})\): overall chance of seeing any gain across all prompts (could be low).

**3️⃣ Step‑by‑Step Reasoning**  
1. Gather evidence: was the prompt truly altered?  
2. Check reproducibility: can another run replicate the 3‑point increase?  
3. Rule out confounders: random variation, scoring error, or system drift.  
4. Compute posterior using assumed probabilities; adjust priors if new data appear.

**4️⃣ Common Traps to Avoid**  
- *Confirmation bias*: only look for evidence that supports “real.”  
- *Over‑confidence*: treat a single run as definitive proof.  
- *Ignoring variance*: 3 points might be within the noise margin of the evaluator.

**5️⃣ Sanity‑Check & Communicate**  
- Compare with historical data: how often do similar changes yield comparable gains?  
- Express confidence as a percentage and explain assumptions behind it.  
- Suggest next steps (e.g., repeat evaluation, document prompt version) to solidify evidence.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
