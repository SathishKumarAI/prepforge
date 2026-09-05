---
qid: ing_05af47402a__star__local
question: 'Explain: How to use these — Role Guides'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 322
total_tokens: 556
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:40:06-05:00'
sources: []
---

**Situation** – In my last role at a fintech startup, we were launching an AI‑powered fraud detection system for credit card transactions. Early beta tests showed that the model was flagging legitimate purchases too often, hurting user experience and inflating false positives by 18%.

**Task** – I needed to redesign the alerting logic so that the system could differentiate between benign anomalies and genuine fraud while keeping latency under 200 ms per transaction.

**Action** – I introduced Role Guides from OpenAI’s policy framework. First, I defined three distinct user roles—“Cardholder,” “Merchant,” and “Compliance Officer”—each with its own privacy and risk tolerance profiles. Then I built a lightweight context‑embedding layer that tagged every incoming transaction with the relevant role before passing it to the language model. Using the Role Guide’s instruction set, the model generated customized explanations: for cardholders it produced concise, friendly messages; for merchants it included transaction detail logs; for compliance staff it outputted full audit trails and risk scores. I also integrated a real‑time feedback loop where flagged transactions could be manually overridden, feeding back into the role‑specific tuning.

**Result** – After deployment, false positives dropped to 7%—a 61 % improvement—and user satisfaction scores rose by 12 points on our NPS survey. The experience taught me that contextualizing AI decisions with Role Guides not only improves accuracy but also builds trust across stakeholders.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
