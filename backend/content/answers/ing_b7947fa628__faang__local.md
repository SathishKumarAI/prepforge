---
qid: ing_b7947fa628__faang__local
question: Your model refuses requests that are perfectly legitimate. How do you diagnose
  and fix over-refusal?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 481
total_tokens: 722
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:49:54-05:00'
sources: []
---

**Clarify**  
We’re asked how to handle a language‑model that *over‑refuses* legitimate user requests (e.g., “Explain how to tie a knot”). The goal is to diagnose the root cause and patch it so refusals are only for truly disallowed content. I’ll assume we have access to logs, the refusal logic (RLHF or policy), and a dev/test environment.

**Approach**  
1. Collect data: log every refusal with request text, context, and the internal “reason” flag.  
2. Sample the logs to identify patterns (keywords, user intents).  
3. Map flagged reasons back to policy rules and RLHF reward signals.  
4. Re‑train or fine‑tune on a curated dataset that includes many legitimate examples of the over‑refused class.  
5. Deploy with A/B testing, monitoring refusal rates vs. success.

**Depth**  
- **Diagnostics**: Use an “explainability” hook to capture the model’s internal attention and token‑level logits for refusal decisions.  
- **Root cause**: Often a *policy over‑generalization* (e.g., “medical advice” flag catching benign queries).  
- **Fix**: Augment the policy dataset with counterexamples, adjust the reward signal to penalize unnecessary refusals, and add a secondary confidence score that gates refusal only when the model is > 90 % confident in disallowed content. Complexity stays O(n) per inference; training adds ~10 % overhead.

**Edge Cases**  
- Ambiguous requests (e.g., “Help me with my exam”): ensure they’re classified correctly.  
- Adversarial phrasing that tries to bypass the policy: test with fuzzing and adversarial examples.  
- New domains where legitimate content is rare: monitor for false positives.

**Optimize & Communicate**  
After A/B, report metrics: refusal‑rate drop, user satisfaction lift, and any increase in policy violations (should stay ≤ 0.1 %). Explain that we’re tightening the decision boundary without hurting safety, and outline a monitoring plan to catch regressions early. This balances safety with usability—a key FAANG trade‑off.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
