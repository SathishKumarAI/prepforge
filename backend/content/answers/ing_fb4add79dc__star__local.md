---
qid: ing_fb4add79dc__star__local
question: 'Explain: Q107: You''re an AI Product Manager. Write the structure of a
  PRD for a generative AI feature that includes hallucination policy, fallback behavior,
  and an eval methodology section.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 264
output_tokens: 353
total_tokens: 617
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:51:28-05:00'
sources: []
---

**Situation**  
Last quarter our platform hit a plateau: users wanted deeper creative assistance but were frustrated by AI hallucinations in the content generator. The product team needed a new feature that balanced innovation with reliability.

**Task**  
I was tasked to draft a PRD for a generative‑AI add‑on that (1) defines a clear hallucination policy, (2) outlines fallback behavior when confidence is low, and (3) sets an evaluation methodology to track quality over time.

**Action**  
I mapped the user flow: prompt → model → output. I added a “confidence score” layer using OpenAI’s LogProb API; if below 0.65 the system triggers a fallback—either a curated template or a human‑in‑the‑loop review queue. The hallucination policy documents thresholds, flagging rules, and remediation steps (e.g., auto‑redaction of unsupported claims). For evaluation I built an A/B test harness that logs three metrics: hallucination rate (percentage of outputs flagged by the policy), user satisfaction (NPS survey post‑interaction), and latency. We’ll run quarterly regression tests against a curated benchmark dataset to ensure drift is caught early.

**Result**  
The PRD got greenlit in 4 weeks, and the pilot rollout cut hallucinations from 18% to 3%, boosted NPS by 12 points, and kept average response time under 1.2 s. I learned that embedding policy logic directly into the feature spec keeps engineering focused on user‑centered quality rather than chasing raw model output.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
