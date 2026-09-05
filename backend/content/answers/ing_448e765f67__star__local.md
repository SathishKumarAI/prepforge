---
qid: ing_448e765f67__star__local
question: 'Explain: Recommendations — Conversational Agent'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 344
total_tokens: 576
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:46:06-05:00'
sources: []
---

**Situation** – At my last company we had an e‑commerce platform with a 12 % cart abandonment rate. The marketing team wanted to reduce this by nudging users at the moment they were stuck on product pages, so we decided to build a conversational recommendation bot that could run inside the site chat widget.

**Task** – My job was to design and deploy a lightweight recommendation engine that could suggest alternative products in real time, while keeping latency under 200 ms and respecting user privacy (no PII stored). The system had to learn from clickstream data and adapt to seasonal trends without heavy retraining.

**Action** – I built the bot on top of Hugging Face’s transformer library for intent detection, paired it with a vector‑search index in Milvus for semantic similarity. For recommendations I used a hybrid model: a matrix‑factorization baseline (implicit ALS) for popularity and a fine‑tuned BERT encoder that scored user–item relevance from recent interactions. The bot was containerized with Docker and served via FastAPI behind an NGINX reverse proxy, autoscaling on Kubernetes. We logged every recommendation click to a Kafka stream for continuous evaluation.

**Result** – After three weeks of A/B testing, the conversational agent cut cart abandonment by 18 % (from 12 % to 9.8 %) and increased average order value by 4 %. I learned how to balance model complexity with latency constraints and that a hybrid recommendation approach often outperforms pure collaborative filtering in real‑world e‑commerce scenarios.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
