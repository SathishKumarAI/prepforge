---
qid: ing_35dcafbc73__eli5__local
question: 'Explain: A long-running agent drifts: after two hours it is confidently
  working on the wrong thing. Diagnose and fix.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 172
output_tokens: 333
total_tokens: 505
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:01:06-05:00'
sources: []
---

Imagine a robot vacuum that’s been cleaning your living room for months. At first, it follows a clear map of where to sweep. But after two hours, it starts brushing the same spot over and over while ignoring new crumbs that appear on the coffee table—its “goal” has drifted.

**Why this happens:**  
The robot relies on internal rules (a policy) learned from past experience. If those rules aren’t constantly checked against fresh data, they can become outdated or misaligned with the real world. The robot’s confidence grows because it keeps repeating the same pattern, even though it isn’t actually solving the current problem.

**Diagnose:**  
1. **Track its actions** – log what areas it cleans and compare to a recent map of crumbs.  
2. **Check reward signals** – ensure the system still receives feedback that “cleaning new spots” is valuable.  
3. **Look for over‑confidence** – if the robot’s certainty metrics are high while performance drops, drift is likely.

**Fix:**  
1. **Re‑train or update** the policy using fresh data from recent sessions (like teaching the vacuum a new map).  
2. **Add periodic sanity checks** that force it to re‑evaluate its plan against the current environment.  
3. **Introduce a small random exploration step** so it occasionally tries new areas instead of sticking to old patterns.

With these steps, the agent—just like our vacuum—will stay focused on what truly matters and avoid getting stuck in a stale routine.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
