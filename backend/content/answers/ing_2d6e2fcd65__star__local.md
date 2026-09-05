---
qid: ing_2d6e2fcd65__star__local
question: 'Explain: Run LLM-based evals separately — Ai Evals Complete Guide Langwatch
  Langfuse'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 362
total_tokens: 607
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:58:59-05:00'
sources: []
---

**Situation**  
At my previous company we were launching a new recommendation engine that relied on a large language model (LLM) for generating product descriptions. The marketing team demanded that every model version be rigorously evaluated before production release, but our existing pipeline mixed inference and evaluation, causing long turnaround times and flaky results.

**Task**  
I needed to build an isolated evaluation workflow so each LLM run could be benchmarked against a fixed test set, recorded in a traceable way, and reported back to the data science team without impacting inference latency.

**Action**  
I split the pipeline into two stages: (1) a *generation* job that pushed raw prompts to the model via Langfuse’s API and stored the raw outputs; (2) an *evaluation* job that pulled those outputs, ran them through Langwatch’s scoring scripts (BLEU, ROUGE, factuality checks), and logged the metrics in our internal dashboard. I used Docker Compose to orchestrate the jobs, added a Kafka queue for decoupling, and implemented CI/CD hooks so every commit triggered the evaluation automatically. I also introduced a “golden set” of 200 prompts that stayed constant across runs.

**Result**  
The new workflow cut evaluation latency from 30 minutes to under 5 minutes per model version, reduced false‑positive alerts by 40%, and gave the product team confidence to roll out updates twice as fast. I learned how decoupling inference from evaluation can dramatically improve reliability in LLM ops.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
