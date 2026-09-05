---
qid: ing_f6de3bed3b__star__local
question: 'Explain: Run code-based evals — Ai Evals Complete Guide Langwatch Langfuse'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 326
total_tokens: 569
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:42:10-05:00'
sources: []
---

**Situation**  
When I joined the product team at an AI startup, our flagship chatbot was hitting a 25 % drop in user satisfaction during peak hours. The internal logs suggested that the model’s code‑generation module was producing syntax errors more often than we could trace.

**Task**  
I needed to design a continuous evaluation pipeline that would automatically run unit tests against every new code snippet produced by the LLM, catch regressions early, and surface actionable metrics for the devs.

**Action**  
First I integrated **LangWatch**, configuring it to monitor the inference endpoint and capture raw outputs. For each generated code block I wrapped it in a sandboxed test harness using **Langfuse**’s experiment API, feeding the snippet through our existing unit‑test suite (pytest). Langfuse’s event tracking logged pass/fail status, execution time, and memory usage per run. I set up alerts on a Grafana dashboard that plotted failure rates over time, and added an automated pull request comment system so developers saw test results immediately in GitHub.

**Result**  
Within two weeks the failure rate dropped from 25 % to under 3 %, and we cut debugging time by 40 %. The metrics also revealed a hidden memory leak that was fixed before it impacted production. I learned how orchestrating LangWatch with Langfuse can turn raw model outputs into actionable, measurable quality gates for AI systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
