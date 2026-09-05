---
qid: ing_d94ddeb822__eli5__local
question: 'Explain: Canary rollout and shadow traffic — Customer Distillation Pipeline'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 159
output_tokens: 219
total_tokens: 378
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:18:57-05:00'
sources: []
---

Think of a new recipe you’re adding to a restaurant menu.  
**Canary rollout** is like serving the dish first to a small table of regular customers (the “canary” group). If they enjoy it, you gradually give more tables the same dish until everyone can try it.  

**Shadow traffic** is when you let all guests taste the new dish but secretly record their reactions without actually changing what’s on the menu. The kitchen uses this feedback to tweak flavors before the dish goes live for all diners.  

In a Customer‑Distillation Pipeline, the system first exposes the new AI model to a limited set of real users (canary). Simultaneously it runs the same inputs through both the old and new models in parallel, comparing outputs without affecting user experience (shadow traffic). This lets engineers see how the new model behaves on live data, then safely roll it out once it’s proven reliable.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
