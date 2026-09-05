---
qid: ing_8e8d0c5028__star__local
question: 'Explain: ​ Runs — Evaluation concepts - Docs by LangChain'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 318
total_tokens: 555
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:17:51-05:00'
sources: []
---

**Situation** – At my last role I was tasked with building a conversational AI for our customer support portal. The existing bot had high accuracy on intent classification but the end‑to‑end user satisfaction scores were only 68 %. We needed a systematic way to monitor and improve each step of the chain.

**Task** – Create an evaluation pipeline that could automatically run the LangChain workflow, capture intermediate outputs (runs), compare them against ground truth or reference responses, and surface actionable metrics for developers.

**Action** – I used LangChain’s `Run` object to log every node execution: embeddings, prompt generation, LLM output, and post‑processing. By attaching a custom `EvaluationMetric` class, I computed BLEU scores for text similarity and weighted confidence thresholds for classification nodes. The pipeline stored runs in an SQLite DB and exposed them via a lightweight Flask dashboard. I also set up a CI job that triggered the evaluator on every new model version, sending alerts if any metric fell below a 5 % improvement target.

**Result** – After two iterations, user satisfaction rose to 81 %, while average latency stayed under 200 ms. The run‑based evaluation gave us transparent, repeatable insights and taught me how to balance precision, recall, and response speed in a production AI system.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
