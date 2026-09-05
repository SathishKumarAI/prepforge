---
qid: ing_a95e772eeb__star__local
question: Why ML + Rules, Not Just ML? — Fraud Detection
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 319
total_tokens: 556
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:11:33-05:00'
sources: []
---

**Situation**  
When I joined the payments team at FinTechCo, our fraud score was drifting—false positives were up 27 % and we lost 12 % of legitimate merchants. The existing rule‑based engine had been tuned for a decade; the new ML model alone couldn’t capture the nuanced patterns without generating noise.

**Task**  
I needed to reduce false positives by at least 15 % while keeping detection latency under 200 ms, so that we could still serve real‑time checkout flows.

**Action**  
I built a hybrid pipeline: first, a gradient‑boosted tree scored every transaction; then I layered rule‑based filters (e.g., velocity checks, blacklisted IPs) on top of the top 30 % high‑risk predictions. To keep latency low, I pre‑computed feature hashes and used an in‑memory cache for rule results. I also introduced a feedback loop: flagged transactions were sent to a human review queue, and their outcomes retrained the model weekly.

**Result**  
Within three months, false positives dropped 18 %, merchant churn fell 4 %, and we maintained sub‑200 ms latency. The experience taught me that ML’s flexibility is powerful, but domain rules provide essential safety nets when speed and interpretability matter.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
