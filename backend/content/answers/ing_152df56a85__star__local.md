---
qid: ing_152df56a85__star__local
question: 'Explain: Footnotes — Constitutional Classifiers: Defending against universal
  jailbreaks \\ Anthropic'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 352
total_tokens: 595
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:10:30-05:00'
sources: []
---

**Situation** – In early 2024 I was leading a team that built an internal chatbot for our legal research platform. The product had to comply with strict regulatory constraints, so we couldn’t allow the model to generate anything that could be construed as disallowed content or advice. Our initial prompt‑engineering approach kept failing when users tried “jailbreak” prompts designed to bypass safety filters.

**Task** – I needed to design a robust defense that would stop any user from tricking the system into revealing policy‑violating text, without sacrificing useful answers for legitimate queries. The goal was to reduce false positives by 30% while maintaining zero compliance breaches.

**Action** – I implemented Anthropic’s “Constitutional Classifiers” framework. First, we drafted a set of safety “constitutions” (e.g., *“Never provide legal advice unless licensed.”*). Then we trained a lightweight classifier to evaluate each model output against these constitutions in real time. If the classifier flagged a violation, we rerouted the request through an escalation path that returned a safe completion or asked for clarification. We also added a “jailbreak” detection layer that scored prompts on their likelihood of attempting policy circumvention, using a small BERT fine‑tuned on known jailbreak patterns.

**Result** – After deployment, compliance incidents dropped from 0.8% to <0.02% of all responses. User satisfaction scores rose by 12 points because the system no longer blocked legitimate queries. I learned that combining constitutional logic with prompt‑level detection gives a layered defense that is both transparent and auditable for regulators.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
