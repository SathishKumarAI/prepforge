---
qid: ing_e583f3b4a2__star__local
question: What is over-refusal, and how do you manage the helpfulness-vs-safety tension?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 339
total_tokens: 584
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:06:51-05:00'
sources: []
---

**Situation:**  
At my previous company we launched a conversational AI assistant for our e‑commerce platform. Early user testing revealed that the bot was refusing to answer more than 70% of customer queries, especially those involving sensitive order details or payment issues.

**Task:**  
I had to reduce over‑refusal while still protecting user privacy and complying with data‑security regulations.

**Action:**  
First I mapped the refusal patterns by logging every interaction and categorizing the reasons—most were flagged as “potentially sensitive” by our content filter. I then introduced a tiered response system: (1) a lightweight, anonymized confirmation step that asked users to verify intent before revealing personal data; (2) a fallback to a human agent for complex requests; and (3) a dynamic safety score that adjusted the refusal threshold based on user context (e.g., authenticated vs. guest). I also retrained the language model on a curated dataset of safe, yet helpful responses, and implemented real‑time monitoring dashboards so we could catch spikes in refusals.

**Result:**  
Refusal rates dropped from 70% to 32% within two months, while the click‑through rate for help articles rose by 18%. The system maintained compliance with GDPR and internal security policies. I learned that balancing helpfulness and safety is an iterative process—continuous data collection, fine‑tuning thresholds, and transparent fallback paths are key to keeping users engaged without compromising privacy.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
