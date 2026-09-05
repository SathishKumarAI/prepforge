---
qid: ing_ed49f2c525__star__local
question: 'Explain: What matters more for an agentic coding tool like Claude Code:
  the model or the harness? Design the loop.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 250
output_tokens: 365
total_tokens: 615
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:23:15-05:00'
sources: []
---

**Situation:**  
At my previous company we were piloting an “agentic” coding assistant—Claude Code—to help junior developers auto‑generate boilerplate for a new microservice stack. Early feedback said the suggestions were technically correct but often irrelevant to the project’s architecture.

**Task:**  
I was tasked with improving the tool’s relevance so that the time saved by the developer exceeded any latency cost of additional model calls, while keeping costs under $0.02 per request.

**Action:**  
First I instrumented a harness that wrapped Claude’s API in a two‑stage loop: (1) a lightweight pre‑filter using a rule‑based prompt that extracted the target language, framework, and required dependencies from the repo metadata; (2) a context‑aware second pass where the model received the filtered prompt plus a concise snapshot of the current codebase. I added a caching layer to reuse identical prompts across developers and introduced a “confidence score” threshold—if Claude’s internal token likelihood fell below 0.85, we fell back to a deterministic template engine. Metrics from the harness were logged in Prometheus; I set alerts for latency >300 ms.

**Result:**  
Within two sprints the average developer time to scaffold a new endpoint dropped from 12 minutes to 4 minutes—a 66 % reduction—while the model usage cost fell by 30 %. The key insight was that a well‑engineered harness, especially one that reduces noisy context and short‑circuits low‑confidence outputs, can outweigh raw model size in delivering value for an agentic coding tool.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
