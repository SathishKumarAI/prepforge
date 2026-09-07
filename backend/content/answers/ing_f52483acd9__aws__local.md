---
qid: ing_f52483acd9__aws__local
question: How do you design good tool/function definitions for an LLM? What makes
  tool calling fail?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 390
total_tokens: 628
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:31:12-05:00'
sources: []
---

**Situation / Task**  
At a fintech startup I led the rollout of an LLM‑powered chatbot that could execute internal APIs (balance lookup, transfer, compliance checks). The first pilot had a 45 % failure rate on tool calls—customers saw “unknown error” messages and churn rose by 8 %.  

**Action**  
I applied **Ownership** and **Dive Deep**. First, I mapped the *tool contract* to a strict JSON schema:  
1. **Name** – human‑readable identifier.  
2. **Parameters** – typed, required/optional flags with JSR‑380 annotations.  
3. **Return type** – explicit success/failure envelope.  

I wrapped each tool in an AWS Lambda behind API Gateway, added a *retry policy* (exponential backoff + circuit breaker), and instrumented CloudWatch metrics (`tool_success_rate`, `latency_ms`). I also built a “dry‑run” validator that the LLM calls before execution to catch schema mismatches.  

**Result**  
After 2 sprints, tool call success rose from **55 % → 97 %**, latency dropped from 650 ms to 210 ms, and churn fell by **12 %**. The cost of Lambda executions stayed under $0.05 per 1k calls thanks to the short runtime and on‑demand scaling.

**Learnings**  
- A *well‑defined contract* eliminates ambiguity; the LLM can self‑validate before calling.  
- Instrumentation turns silent failures into actionable metrics.  
- The bar‑raiser looks for clear ownership, deep diagnostics, quantifiable impact, and a culture that learns from failure—exactly what we achieved.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
