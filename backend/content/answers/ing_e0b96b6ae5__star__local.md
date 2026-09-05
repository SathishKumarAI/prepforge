---
qid: ing_e0b96b6ae5__star__local
question: 'Q: How does Contextual Retrieval compare to HyDE for improving retrieval
  quality?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 377
total_tokens: 618
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:58:08-05:00'
sources: []
---

**Situation** – In early 2024 I led a feature‑enhancement sprint for our enterprise search product used by over 15,000 users in the financial sector. The baseline recall was dropping to 68 % on complex query types like “regulatory changes in EU data protection,” and customer support tickets were rising.

**Task** – My goal was to boost retrieval quality (recall + precision) without adding latency or increasing index size. I needed to evaluate two emerging techniques: Contextual Retrieval (CR), which enriches queries with user‑session context, and HyDE (Hybrid Dynamic Embedding), a neural paraphrasing approach that generates multiple query variants.

**Action** – First, I built a lightweight CR pipeline that appended the last three search terms and top 5 clicked documents’ metadata to each query. For HyDE, I integrated an on‑the‑fly paraphrase generator (BERT‑based) that produced five alternative embeddings per query. I ran A/B tests across 3,000 live users, measuring recall, precision, and response time. CR added only ~10 ms latency, while HyDE increased it by ~30 ms but improved recall by 5 % over the baseline.

**Result** – Deploying CR alone lifted overall recall to 73 %, precision to 84 %, and reduced support tickets by 22 %. Adding HyDE on top of CR pushed recall to 78 % and precision to 87 %, with an acceptable latency hit. I learned that contextual signals are a low‑cost, high‑impact baseline, while neural paraphrasing delivers incremental gains when the budget allows.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
