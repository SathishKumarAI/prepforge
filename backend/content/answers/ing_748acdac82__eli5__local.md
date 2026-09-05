---
qid: ing_748acdac82__eli5__local
question: 'Q128: EU AI Act Article 50 became enforceable on August 2 with fines up
  to 3% of global turnover, and California''s transparency law took effect the same
  day. You ship a product that generates text and images in both markets. What do
  you build?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 203
output_tokens: 263
total_tokens: 466
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:41:26-05:00'
sources: []
---

Imagine your AI product is a smart kitchen robot that can cook any recipe (text or images).  
To serve customers in the EU and California you must give them two things:

1. **A clear menu** – a plain‑language explanation of what data the robot uses, how it learns from it, and why it makes each choice. That’s the *transparency* requirement: every user sees the “ingredients” (data sources) and the “recipe steps” (model logic).

2. **A safety certificate** – documentation that you checked the robot for hazards (bias, privacy leaks, security flaws). In EU terms this is a *risk assessment* and in California it’s a compliance report. If the robot could misbehave or misuse data, the certificate shows you mitigated those risks.

So build an **audit trail**: every input fed to the model, every output produced, and the checks that confirm it stays within legal limits. Log these events, publish the policy on your site, and keep a record that can be handed over if regulators ask—just like handing a safety certificate to a food inspector.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
