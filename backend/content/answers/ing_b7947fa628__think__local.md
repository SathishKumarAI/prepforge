---
qid: ing_b7947fa628__think__local
question: Your model refuses requests that are perfectly legitimate. How do you diagnose
  and fix over-refusal?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 197
output_tokens: 467
total_tokens: 664
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T13:03:48-05:00'
sources: []
---

**1️⃣ Clarify the problem & assumptions**  
   - *What is “over‑refusal” exactly?* Is it refusing harmless content, or legitimate requests that trigger safety filters?  
   - Assume we’re dealing with a deployed LLM (e.g., GPT‑4) behind a moderation layer.  
   - Note constraints: policy rules, user intent ambiguity, and the model’s internal safety modules.

**2️⃣ Adopt a diagnostic framework**  
   - **Input‑Output audit trail**: log raw request → pre‑processing → policy check → refusal decision.  
   - **Layered analysis**: (a) tokenization & prompt length, (b) content classifier scores, (c) final refusal flag.  
   - Use a *confusion matrix* of expected vs. actual refusals.

**3️⃣ Step‑by‑step reasoning**  
   1. **Reproduce the refusal** in a controlled sandbox with identical context.  
   2. **Inspect each layer’s score** (e.g., toxicity, policy match).  
   3. **Identify threshold boundaries** that cause the flag to flip.  
   4. **Cross‑check against policy docs**—is the content actually disallowed?  
   5. **Iterate with counter‑examples**: tweak wording to see if a minimal change removes refusal.

**4️⃣ Common traps to avoid**  
   - Assuming the refusal is due to user language; it may be a mis‑aligned safety trigger.  
   - Ignoring that policy updates or fine‑tuning changes can shift thresholds over time.  
   - Over‑fixing by lowering thresholds, which risks real disallowed content slipping through.

**5️⃣ Sanity‑check & communicate**  
   - Validate fixes on a held‑out set of legitimate requests.  
   - Present findings as: “We found the refusal was triggered by a policy score > 0.8 for X; after adjusting the threshold to 0.75, legitimate queries pass without compromising safety.”  
   - Document the change and monitor post‑deployment metrics (refusal rate vs. content quality).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
