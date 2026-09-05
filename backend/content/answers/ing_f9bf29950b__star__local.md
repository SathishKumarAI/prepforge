---
qid: ing_f9bf29950b__star__local
question: 'Q73: How would you design a semantic routing system that dynamically selects
  the cheapest model that can handle a query with acceptable quality?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 251
output_tokens: 352
total_tokens: 603
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:48:00-05:00'
sources: []
---

**Situation:** In my last role at a cloud‑AI startup, we were launching a multi‑tenant recommendation API. Our users ran into latency spikes and high inference costs because every query hit the same large transformer model.

**Task:** I was tasked with building a semantic routing layer that would pick the cheapest viable model per request while keeping accuracy above a 92 % threshold on our internal BLEU metric.

**Action:** First, I added a lightweight intent classifier (FastText) to tag queries into high‑complexity vs. low‑complexity buckets. For each bucket I maintained a pool of fine‑tuned models: a distilled BERT (cost $0.0003/req), a mid‑size GPT‑2 (cost $0.001), and the flagship large transformer (cost $0.003). The router consulted a real‑time cost‑quality lookup table built from A/B test results. If a query fell into the low‑complexity bucket, the system automatically forwarded it to the distilled BERT; otherwise, it rolled up to GPT‑2 or the full model only when the intent classifier flagged high uncertainty. I also implemented an online learning loop that updated the lookup table every 12 hours based on recent error rates.

**Result:** The routing layer cut inference costs by 48 % while maintaining overall BLEU above 92 %. Latency dropped from 350 ms to 180 ms on average, and we reduced server utilization by 30 %. I learned that coupling a simple intent filter with dynamic cost‑quality tables can deliver substantial savings without sacrificing user experience.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
