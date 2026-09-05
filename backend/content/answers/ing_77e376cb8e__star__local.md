---
qid: ing_77e376cb8e__star__local
question: 'Explain: Run custom evaluator — Ai Evals Complete Guide Langwatch Langfuse'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 352
total_tokens: 593
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:33:50-05:00'
sources: []
---

**Situation:** In a recent project for a fintech startup, our LLM‑powered recommendation engine was underperforming on user satisfaction scores—down to 68% from the target 85%. We needed a way to systematically evaluate and improve the model’s responses.

**Task:** Build a custom evaluator pipeline that could automatically run end‑to‑end tests against real user queries, score them with our own rubric, and feed results back into continuous training using Langwatch for monitoring and Langfuse for traceability.

**Action:** First, I defined a JSON schema for evaluation metrics (accuracy, relevance, tone). Then, in Langfuse I created a “Custom Evaluator” workflow that launched a batch of 1,000 user prompts, routed each through our LLM endpoint, and stored raw responses. Using Langwatch’s API, I scripted a post‑processing step: compare the response to an annotated gold standard, calculate scores per metric, and aggregate results. The evaluator was scheduled nightly via a simple cron job, and all logs were streamed to Langfuse for audit trails. I also set up alerts if any metric dropped below 80%.

**Result:** Within two weeks of deployment, the recommendation accuracy rose to 83% and user satisfaction climbed to 82%. The pipeline cut evaluation time from days to hours, and the team gained confidence in data‑driven model iterations. I learned how tightly integrating Langwatch’s monitoring with Langfuse’s traceability can turn raw LLM output into actionable insights.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
