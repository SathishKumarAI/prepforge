---
qid: ing_61e8a82aec__star__local
question: 'Explain: Week 4: Advanced Topics & Production — Ai Evals Complete Guide
  Langwatch Langfuse'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 375
total_tokens: 621
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:43:58-05:00'
sources: []
---

**Situation** – In my last role I was tasked with launching a production‑grade evaluation pipeline for our LLM service that would run nightly against new model releases. The team needed to monitor not just accuracy but also latency, cost and safety signals in real time.

**Task** – Build an end‑to‑end “AI Eval” framework that could ingest prompts from Langfuse, run them through the model via Langwatch, capture all metrics (BLEU, ROUGE, token count, inference time), flag unsafe content, and push results back to a central dashboard for compliance.

**Action** – I first set up Langwatch as a lightweight proxy that logged every request/response pair along with timestamps. Then I integrated Langfuse’s experiment orchestration: each nightly job fetched the latest prompt set from its storage bucket, executed them through Langwatch, and streamed results into a Prometheus scrape target. I wrote custom exporters to compute BLEU/ROUGE on the fly and used OpenAI’s Moderation API for safety flags. Finally, I scripted an Airflow DAG that scheduled the jobs, collected metrics, and pushed alerts to Slack if latency exceeded 300 ms or cost per token rose above $0.0005.

**Result** – The pipeline reduced evaluation time from hours to under 30 minutes, caught a regression that would have increased token usage by 18 %, and cut the cost‑overrun alert rate by 75 %. I learned that coupling Langwatch’s low‑latency proxy with Langfuse’s experiment management creates a robust, observable AI eval workflow that scales across model iterations.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
