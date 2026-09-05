---
qid: ing_94541b66d7__star__local
question: 'Explain: :thumbsdown: Disadvantages of fail over policies'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 330
total_tokens: 568
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:29:33-05:00'
sources: []
---

**Situation** – While leading a production deployment for an online recommendation engine, we noticed our primary inference cluster was experiencing sporadic latency spikes during peak traffic. The team had built a simple fail‑over policy that would automatically redirect traffic to a standby cluster when the main node’s latency exceeded 200 ms.

**Task** – My job was to evaluate whether this fail‑over strategy could be safely used in production, and if not, design an alternative that maintained high availability without compromising performance or cost.

**Action** – I ran controlled chaos tests by simulating traffic surges and network partitions. The results showed the standby cluster had a 30 % higher inference latency because it was not warmed up to the same cache state as the primary. Switching over caused a noticeable drop in recommendation relevance (NDCG fell from 0.42 to 0.35) and increased GPU usage by 40 %, pushing us into a higher pricing tier. I redesigned the policy to use “soft fail‑over” with a warm‑up queue and latency smoothing, coupled with real‑time health metrics for each node.

**Result** – The new approach reduced cold‑start latency on fail‑over by 70 % and kept NDCG within 2 % of baseline. Operational costs dropped 15 %, and we gained a deeper understanding that blanket fail‑over policies can unintentionally degrade user experience and inflate infrastructure expenses.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
