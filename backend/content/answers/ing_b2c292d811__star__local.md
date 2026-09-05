---
qid: ing_b2c292d811__star__local
question: Your new prompt scores 78% vs the old prompt's 74% on a 100-example eval.
  Do you ship it?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 252
output_tokens: 345
total_tokens: 597
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:29:16-05:00'
sources: []
---

**Situation:** At my previous company we were iterating on a customer‑facing chatbot that answered product queries. The original prompt yielded an accuracy of 74% on our latest 100‑example test set, but it often produced vague or repetitive responses, which impacted user satisfaction scores.

**Task:** I had to decide whether to ship the new prompt—an engineered version with contextual embeddings and a stricter response template—that scored 78% on the same evaluation. Shipping would mean allocating engineering time for rollout and monitoring, so I needed confidence that the improvement was real and sustainable.

**Action:** First, I ran an A/B test over two weeks with live traffic split evenly between the old and new prompts, collecting 10,000 user interactions. I measured not only accuracy but also click‑through rate, average response time, and a “clarity” score from post‑interaction surveys. The new prompt maintained its 78% accuracy, increased clarity scores by 12%, and reduced mean response time by 0.3 s. I also checked for edge cases: the new model had no spike in hallucinations or policy violations. After reviewing the data with product and compliance teams, we agreed on a phased rollout.

**Result:** The ship decision led to a 15% lift in user satisfaction and a 5% increase in conversion rate within one month. I learned that even modest accuracy gains can translate into business value when paired with comprehensive A/B testing and cross‑functional validation.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
