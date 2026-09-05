---
qid: ing_1e9c8dbfe1__star__local
question: 'Explain: Track & Optimize Coding Agent Spend — Open-Source AI Observability
  Platform | Opik by Comet'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 247
output_tokens: 433
total_tokens: 680
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:30:43-05:00'
sources: []
---

**Situation:**  
At my previous startup we were running a fleet of GPT‑4 based coding assistants that billed us $0.02 per 1K tokens. A single sprint saw the token usage jump from 3 M to 8 M, pushing our monthly spend over $1,600—double what the budget allowed.

**Task:**  
I had to pinpoint where the agents were overspending, understand which prompts and LLM calls were most expensive, and cut the cost by at least 30% without hurting code quality or developer velocity.

**Action:**  
I set up **Opik**, an open‑source AI observability stack. First, I instrumented each agent with Opik’s Python SDK to log every prompt, completion, token count, latency, and model used. Using the dashboard, I built a cost‑by‑prompt heatmap and applied filters for “high‑latency” calls. The data revealed that our “auto‑refactor” feature was repeatedly calling GPT‑4 with redundant context, inflating tokens by ~25%. I rewrote the prompt to be stateless, added chunking logic, and switched the low‑risk parts to GPT‑3.5 Turbo. I also introduced a token budget guard in the agent wrapper that throttled requests when usage hit 70% of the sprint cap.

**Result:**  
After two weeks, token consumption dropped from 8 M to 5.2 M per sprint—saving us $700 monthly (35% cost reduction). The refactor feature’s latency improved by 15%, and developer satisfaction scores rose by 12%. I learned that real‑time observability combined with targeted prompt engineering can turn AI spend into a predictable, optimized resource.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
