---
qid: ing_012730fd77__star__local
question: 'Explain: Run evaluators separately — Ai Evals Complete Guide Langwatch
  Langfuse'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 370
total_tokens: 612
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:30:50-05:00'
sources: []
---

**Situation** – At my previous company we were launching a new language‑model‑driven FAQ bot for our e‑commerce platform. The product team demanded that we prove the model’s intent classification accuracy before rollout, but our existing evaluation pipeline in Langfuse was tightly coupled with the inference run, making it impossible to swap out or upgrade individual metrics without redeploying the whole stack.

**Task** – I needed to redesign the evaluation flow so that each evaluator (e.g., BLEU, ROUGE, custom intent‑match score) could run independently, allowing us to iterate on metrics and integrate new tools like Langwatch for real‑time monitoring, all while keeping the inference pipeline stable.

**Action** – I extracted the evaluation logic into microservices: a “predictor” service that returns raw outputs, an “evaluator” service that accepts those outputs and a reference set, and a “reporter” that aggregates results. Using Langfuse’s event API we stream predictions to the evaluator, which runs in Docker containers orchestrated by Kubernetes. I then integrated Langwatch to surface latency and error metrics per evaluator, enabling us to spot bottlenecks quickly.

**Result** – The new pipeline cut evaluation turnaround from 4 hours to under 30 minutes for a full test suite of 10k queries. Accuracy dashboards in Langwatch improved stakeholder confidence, and the modular design allowed us to add a new semantic similarity evaluator with zero downtime. I learned that decoupling inference from metrics not only speeds iteration but also makes it easier to adopt emerging evaluation tools without risking production stability.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
