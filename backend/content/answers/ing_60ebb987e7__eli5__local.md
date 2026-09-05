---
qid: ing_60ebb987e7__eli5__local
question: 'Explain: Judge-prompt drift detection — Eval Gated Cicd'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 160
output_tokens: 234
total_tokens: 394
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:10:06-05:00'
sources: []
---

**Judge‑prompt drift detection – Eval Gated CICD**

Imagine a courtroom where the judge (the AI model) must keep up with new evidence. “Prompt drift” is when the questions people ask change over time—just like new case law arrives, shifting how the judge should answer. **Detecting drift** means watching for these changes: if the judge starts giving answers that no longer fit the current legal standards, we flag it.

Once drift is spotted, an **Eval Gated CICD** (Continuous Integration/Continuous Delivery with Evaluation Gate) steps in like a court clerk who checks each new rule before the judge adopts it. The system runs a quick test set (“evaluation”) to see if the judge’s updated logic still produces correct verdicts. If the tests pass, the new logic is “gated” through and deployed; if not, we roll back or refine it.

So, drift detection keeps the judge from becoming outdated, and Eval Gated CICD ensures every change is safely vetted before public use.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
