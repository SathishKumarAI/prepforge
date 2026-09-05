---
qid: ing_b96701968e__star__local
question: 'Explain: Tier 2: Run on traces that passed Tier 1 (cheap LLM, ~$0.50/1K)'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 252
output_tokens: 347
total_tokens: 599
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:42:12-05:00'
sources: []
---

**Situation** – In the last sprint I was tasked with improving our fraud‑detection pipeline for a fintech client. The existing system processed every transaction through a heavy, cloud‑based LLM at $5 per 1K tokens, which blew the budget and caused latency spikes during peak hours.

**Task** – My goal was to cut costs by 60 % while maintaining detection accuracy above 92 %. I decided to adopt a two‑tier approach: first filter with an inexpensive on‑prem LLM (Tier 1), then only send promising cases to the expensive cloud model (Tier 2).

**Action** – I implemented Tier 1 using a distilled GPT‑2 model deployed in Docker, costing roughly $0.50 per 1K tokens. The pipeline flagged 30 % of transactions as suspicious. Those traces were forwarded to Tier 2, where we used the full GPT‑4 API at $5/1K. I added a lightweight rule engine to further prune obvious false positives before Tier 2 call, reducing cloud usage by an additional 20 %. I monitored throughput with Prometheus and tweaked batch sizes to keep latency under 200 ms.

**Result** – The new two‑tier system cut LLM spend from $3.5M to $1.4M annually (≈60 % savings) while keeping fraud detection precision at 93.2 %. I learned that careful orchestration between cheap and expensive models can deliver both cost efficiency and high performance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
