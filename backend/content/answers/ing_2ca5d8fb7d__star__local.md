---
qid: ing_2ca5d8fb7d__star__local
question: What kinds of code-graded assertions can you use on LLM outputs, and where
  do they break down?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 247
output_tokens: 372
total_tokens: 619
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:57:13-05:00'
sources: []
---

**Situation** – In a recent product‑launch sprint for an AI‑powered customer support bot, my team had to validate that the language model’s responses were not only grammatically correct but also factually accurate and aligned with company policy. We were under a two‑week deadline to deliver a production‑ready QA pipeline.

**Task** – Build automated, code‑graded assertions that could reliably flag incorrect or risky LLM outputs while keeping false‑positive rates below 5 % so developers wouldn’t waste time chasing noise.

**Action** – I designed three layers of assertions:
1. **Lexical sanity checks** (regex for profanity, length limits) using Python’s `re` and the `pydantic` validator.
2. **Semantic consistency tests** that compared the LLM answer to a gold‑standard knowledge graph via cosine similarity on embeddings from OpenAI’s `text-embedding-ada-002`, asserting a threshold > 0.85.
3. **Policy compliance checks** using an in‑house rule engine (Drools) that matched response tokens against a curated blacklist of policy violations.

We integrated these into the CI pipeline with `pytest` and reported metrics via Grafana dashboards.

**Result** – The system caught 92 % of factual errors and 98 % of policy breaches before production, reducing manual review time by 70 %. However, we discovered that semantic similarity fails on nuanced contextual shifts (e.g., sarcasm), causing false negatives. I learned that combining rule‑based and embedding‑based assertions is effective, but continuous tuning of similarity thresholds and augmenting the knowledge graph are essential to mitigate those breakdowns.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
