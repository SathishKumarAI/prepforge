---
qid: ing_b767542f81__aws__local
question: 'Explain: You have eight hours to build a coding agent from scratch. Describe
  what you build and, more importantly, what you cut.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 451
total_tokens: 697
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:18:26-05:00'
sources: []
---

**Situation / Task**  
I was given eight hours to prototype a *coding agent* that could generate, test, and debug Python snippets for simple CRUD tasks. The goal was rapid proof‑of‑concept with measurable accuracy.

**Action**  
1. **Core stack** – AWS Lambda (Python 3.10) + API Gateway as the entry point; DynamoDB stores prompt → code mappings.  
2. **LLM integration** – Invoke OpenAI’s GPT‑4 via the official SDK; cache responses in ElastiCache Redis to hit a 95% cold‑start reduction.  
3. **Test harness** – Use Pytest inside Lambda, wrapped by Step Functions for sequential execution and automatic rollback on failure.  
4. **Metrics** – Instrumented CloudWatch Logs with `duration_ms` and `success_rate`. Achieved 92 % correct code in the first 30 tests.

**What I Cut**  
- *Full CI/CD pipeline*: No CodePipeline, no separate dev/stage environments; we used Terraform modules for quick infra spin‑up.  
- *Advanced error handling (Sentry)*: kept only basic try/except to stay within time limits.  
- *Extensive logging* beyond essential metrics to avoid Lambda cold‑start penalties.

**Result**  
Delivered a deployable agent in 7 h with **92 % accuracy**, latency < 350 ms, and <$0.02 per request. The trade‑offs (minimal CI/CD, lean error handling) were justified by the tight deadline and the need to demonstrate rapid iteration.

> **Leadership Principles**  
> *Ownership* – I scoped what was essential versus nice-to-have.  
> *Dive Deep* – I profiled Lambda cold starts, Redis hit rates, and LLM token usage to keep costs < $0.02/exec.  

**Bar‑raiser takeaway**: Focus on measurable impact; cut non‑critical layers that slow iteration, but document why they’re omitted for future scaling.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
