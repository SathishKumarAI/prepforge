---
qid: ing_f6de3bed3b__faang__local
question: 'Explain: Run code-based evals — Ai Evals Complete Guide Langwatch Langfuse'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 531
total_tokens: 771
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:13:47-05:00'
sources: []
---

**Clarify**  
You’re asking how to run *code‑based* evaluations for LLMs using the **Ai Evals** framework, and how the tooling stack of **Langwatch** (for monitoring) and **Langfuse** (for logging & replay) fits in. I’ll assume you want: 1) a reproducible evaluation pipeline; 2) real‑time metrics; 3) traceability back to prompt/response pairs.

**Approach**  
1. **Define evals** – create `AiEval` subclasses that generate prompts, run the model, and assert on code output (e.g., syntax, correctness).  
2. **Instrumentation** – wrap the LLM call with Langfuse’s `Span` to capture prompt, completion, metadata, and evaluation result.  
3. **Monitoring** – feed these spans into Langwatch via its ingestion API; set alerts for metric thresholds (e.g., pass‑rate < 90%).  
4. **Automation** – schedule the eval run in CI/CD or a cron job; publish results to a dashboard.

**Depth**  
- `AiEval` runs asynchronously, yielding a `Result` object with score and details.  
- Langfuse stores each span as an event graph; you can replay the exact prompt/response pair for debugging.  
- Langwatch aggregates metrics across spans in near‑real time, providing dashboards and alerting.  
Complexity: O(n × m) where *n* is evals, *m* calls per eval; cost scales with model usage.

**Edge Cases**  
- Non‑deterministic outputs → use seeds or deterministic models.  
- Long‑running code → set timeouts and capture partial runs.  
- API failures → retry logic and fallback metrics.

**Optimize & Communicate**  
1. **Batching**: group evals to reduce per‑call overhead.  
2. **Caching**: memoize prompt–response pairs that haven’t changed.  
3. **Explainability**: expose Langfuse traces in the dashboard so stakeholders can see why a test failed.  

Narrate your reasoning by first framing business impact (e.g., “this pipeline guarantees 95 % code correctness before deployment”), then walk through each component, ending with metrics you’ll monitor and how you’ll iterate on failures. This structured flow satisfies FAANG interviewers’ focus on clear communication, deep technical detail, and actionable optimization.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
