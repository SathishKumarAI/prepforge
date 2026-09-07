---
qid: ing_3df828d92d__aws__local
question: 'Explain: Open Source Agent Evals & Observability — Langfuse'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 447
total_tokens: 681
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:46:15-05:00'
sources: []
---

**Situation & Task**  
In my last role I led a cross‑functional team that needed to evaluate the performance of conversational agents built on LLMs while keeping the entire pipeline observable for rapid iteration. The goal was to reduce failure rates by 30 % and cut debug time from 12 h to under 2 h.

**Action**  
I introduced **Langfuse**, an open‑source observability framework, and integrated it with a custom evaluation suite that generated *agent evals* (structured prompts + expected responses).  
- **Design**: Each inference was wrapped in a Langfuse trace; we stored metadata (prompt, context, token count) in DynamoDB, and sent metrics to CloudWatch for real‑time dashboards.  
- **AWS services used**: Lambda for lightweight evaluation workers, SQS for queuing eval jobs, SageMaker endpoints for model inference, and Step Functions orchestrating retries.  
- **Scalability**: Auto‑scaling Lambdas handled burst traffic; DynamoDB’s provisioned capacity was throttled by CloudWatch alarms to avoid over‑provisioning costs.  
- **Cost & trade‑offs**: By batching evals we cut Lambda invocations by 40 %, saving ~$1,200/month, while still maintaining a latency <300 ms per trace.

**Result**  
After three sprints the failure rate dropped from 18 % to 11 % (≈ 39 % improvement), and debug time fell from 12 h to 1.8 h—meeting our target. The observability dashboards also revealed that 70 % of failures were due to context mismatch, leading us to refine prompt templates.

**Reflection**  
I owned the end‑to‑end solution, dived deep into each metric, and iterated quickly—a clear demonstration of *Ownership*, *Dive Deep*, and *Bias for Action*.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
