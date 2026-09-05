---
qid: ing_e3f267c36c__star__local
question: 'Explain: DSPy: Programming —not prompting—Foundation Models'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 371
total_tokens: 609
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:04:22-05:00'
sources: []
---

**Situation**  
I was leading a research sprint at my startup to build an automated legal‑document summarizer. Our KPI was a 30 % reduction in human review time by end‑of‑quarter, but the baseline transformer model we had been using required constant prompt engineering and produced inconsistent outputs.

**Task**  
Re‑architect the pipeline so that we could programmatically control the foundation model’s behavior—defining inputs, outputs, and post‑processing steps—without relying on ad‑hoc prompts. The goal was to make the system reproducible, testable, and easily adjustable for new document types.

**Action**  
I introduced DSPy (a lightweight Python DSL) to wrap the LLM calls. I wrote modular “tasks” that defined tokenization, prompt templates, and output parsers as code objects. By chaining these tasks, I created a declarative workflow: ingest → chunk → summarizer → QA checker. I also added unit tests for each task and leveraged DSPy’s built‑in caching to avoid redundant API calls during development. The result was a single source of truth that could be versioned in Git and run locally or on the cloud with minimal friction.

**Result**  
The new pipeline cut human review time from 8 hrs per case to 5 hrs, exceeding our KPI by 40 %. Moreover, because the workflow is coded, we reduced prompt‑engineering errors by 70 % and enabled rapid iteration for new legal domains. I learned that treating LLM interactions as first‑class code objects—rather than text prompts—dramatically improves maintainability and scalability in production ML systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
