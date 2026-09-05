---
qid: ing_7e193ddd2d__star__local
question: 'Explain: Conclusion — Ai Evals Complete Guide Langwatch Langfuse'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 340
total_tokens: 579
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:45:49-05:00'
sources: []
---

**Situation** – At my last role, the data‑science team was building a conversational AI for customer support. We had a handful of proof‑of‑concept models but no systematic way to compare them on real user interactions, and our internal metrics were all ad‑hoc.

**Task** – I was tasked with creating an end‑to‑end evaluation framework that would let us run thousands of simulated conversations, capture every turn, score responses, and surface actionable insights so we could iterate quickly without over‑engineering the pipeline.

**Action** – First, I set up Langwatch to log all language model calls in a central store; it captured raw prompts, tokens, latency, and the generated text. Then I built a lightweight scoring engine on top of Langfuse that automatically applied our custom rubric (relevance, politeness, accuracy) using OpenAI’s embeddings for semantic similarity. The pipeline produced per‑conversation metrics and aggregated them into dashboards. To keep costs down, I introduced token‑budget throttling and cached the most common prompts.

**Result** – Within two weeks we had a reproducible eval pipeline that cut model comparison time from days to hours. We identified a new architecture that improved user satisfaction scores by 18 % (measured on a 5‑point Likert scale) while keeping latency under 350 ms. The framework also became the basis for our quarterly model review, and I documented it in a “Complete Guide” that is now used across three product teams.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
