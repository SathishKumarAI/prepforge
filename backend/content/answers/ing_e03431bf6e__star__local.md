---
qid: ing_e03431bf6e__star__local
question: 'Explain: Register as custom evaluator — Ai Evals Complete Guide Langwatch
  Langfuse'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 327
total_tokens: 569
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:57:08-05:00'
sources: []
---

**Situation**  
When I joined a fintech startup, we were launching an LLM‑powered chatbot for mortgage queries. Our internal metrics showed a 23 % drop in user satisfaction after the first month of deployment because the model was generating overly generic responses.

**Task**  
I needed to create a custom evaluator that could automatically score each bot reply on relevance, tone and factual accuracy so we could iterate faster than manual QA.

**Action**  
Using Langfuse’s Python SDK I wrote a `CustomEvaluator` class that wrapped OpenAI’s GPT‑4.5‑Turbo for semantic similarity, paired it with a regex‑based fact checker against our knowledge base, and added a sentiment model from HuggingFace to flag negative tone. I registered this evaluator via the Langfuse console (`langfuse.register_evaluator(CustomEvaluator)`) and set up an evaluation pipeline that runs on every new prompt in our CI/CD. The evaluator outputs a composite score (0‑100) stored in Langfuse’s dashboard, which feeds into our monitoring Grafana panel.

**Result**  
After two weeks of automated evaluation, we reduced the “generic response” flag from 23 % to 8 %. User satisfaction rose by 15 points on NPS. I learned that integrating a lightweight, modular evaluator keeps the feedback loop tight and lets data scientists focus on model tuning rather than manual scoring.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
