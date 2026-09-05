---
qid: ing_5194fddf6b__star__local
question: 'Explain: Create custom evaluator — Ai Evals Complete Guide Langwatch Langfuse'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 368
total_tokens: 609
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:11:33-05:00'
sources: []
---

**Situation** – At my previous startup we launched a conversational AI that scored poorly on user satisfaction after a recent update. The internal metrics showed a 15 % drop in NPS, but the logs didn’t explain why.  

**Task** – I was tasked with building a custom evaluator to automatically grade each turn for relevance, tone, and factual accuracy, feeding the results into our monitoring stack so we could pinpoint failure modes before customers noticed.

**Action** – First, I used **Langwatch** to ingest raw conversation logs from our Kafka stream. I scripted a preprocessing pipeline in Python that extracted intent labels via Langfuse’s annotation API and generated prompt‑response pairs. Next, I created a Langfuse evaluator template: a JSON schema defining three scoring dimensions (relevance, tone, accuracy). For each dimension, I wrote a small function using OpenAI’s GPT‑4 to compare the assistant reply against the expected answer and produce a numeric score 0–1. The evaluator was registered in Langfuse, scheduled to run every hour, and its results were pushed back to our Grafana dashboard via an HTTP webhook.

**Result** – Within two weeks we saw the NPS rebound by 12 %, with the evaluator flagging low‑tone responses as the primary culprit. The real‑time feedback loop also cut manual review time from days to minutes, and I documented the pipeline so the data science team could extend it to new agents. This experience taught me how to marry language‑model evaluation tools (Langwatch & Langfuse) with production observability for rapid, actionable insights.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
