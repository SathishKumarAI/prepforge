---
qid: ing_d4fb2ad32f__aws__local
question: 'Q36: What is DSPy and when would you use it?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 494
total_tokens: 727
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:21:17-05:00'
sources: []
---

**Answer**

> **Situation & Task**  
> In a recent data‑science sprint I was asked to prototype an end‑to‑end LLM pipeline that could ingest customer support logs, generate concise summaries, and flag sentiment anomalies for compliance review. The team needed a rapid, reusable framework that would let us iterate on prompt design without writing boilerplate code.

> **Action**  
> I introduced **DSPy** (OpenAI’s *Data Science Prompting* library). DSPy treats prompts as composable Python objects—`PromptTemplate`, `ChainOfThought`, `FunctionCall`. I built a modular pipeline:  
> 1. **Pre‑process** logs in S3 → Lambda (CPU cost <$0.01 per run).  
> 2. **DSPy chain** that calls OpenAI’s GPT‑4o via the `openai` Python SDK; each step is a separate function call so we can cache intermediate results in DynamoDB.  
> 3. **Post‑process** outputs back to S3 and push alerts to SNS for the compliance team.  

> The design scales horizontally—Lambda concurrency controls cost, and GPT calls are billed per token (≈$0.03/1k tokens). We achieved a 30 % reduction in manual review time and a 25 % drop in SLA violations within two weeks.

> **Result**  
> The prototype was merged into production; it now handles ~10K tickets/day with <2 s latency, and the cost per ticket is <$0.05. The compliance team reported 99.7 % accuracy on flagged sentiment anomalies.

> **Learning & Bar‑raiser cues**  
> *Ownership*: I owned the end‑to‑end pipeline, from data ingestion to alerting.  
> *Dive Deep*: Leveraged DSPy’s composability to isolate prompt logic and quantify token usage per step.  
> *Quantified Impact*: 30 % faster reviews, $5k/month savings on manual labor.  
> *Learning from Failure*: Initial attempts with raw OpenAI prompts caused hallucinations; refactoring into DSPy chains reduced false positives by 40 %.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
