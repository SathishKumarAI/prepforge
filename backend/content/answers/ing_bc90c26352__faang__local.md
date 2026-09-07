---
qid: ing_bc90c26352__faang__local
question: 'Explain: Build with Vercel and trace with Logfire'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 461
total_tokens: 695
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:01:15-05:00'
sources: []
---

**Clarify**  
You’re asked to build an AI‑powered web app on Vercel and instrument it with Logfire for distributed tracing. Assume the stack: Next.js (React), serverless API routes, Vercel Edge Functions, and a language model backend (OpenAI/Anthropic). We need end‑to‑end observability from UI to LLM call.

**Approach**  
1. Scaffold a Next.js app on Vercel.  
2. Add an `/api/chat` Edge Function that forwards user prompts to the LLM and streams back responses.  
3. Install Logfire SDK, configure it with the project key, and enable automatic instrumentation for HTTP requests, timers, and OpenAI calls.  
4. Wrap the LLM call in a trace span (`logfire.startSpan('llm.call')`).  
5. In the client, propagate the trace context via headers so that the request chain is linked.

**Depth**  
- **Instrumentation**: `import { logfire } from '@logfire/sdk'`; use `logfire.withTrace` to wrap async logic.  
- **Tracing**: Edge Functions automatically attach a trace ID; pass it through to the LLM SDK via `headers`.  
- **Performance**: Use streaming responses (`Response.body`) to avoid buffering large completions.  
- **Complexity**: O(1) per request, constant memory for spans, minimal latency overhead (~2‑5 ms).

**Edge Cases**  
- Missing trace headers → Logfire generates a new root span.  
- LLM errors or timeouts → capture exception in the span and surface to UI.  
- Cold starts on Edge Functions may delay first response; monitor via Logfire metrics.

**Optimize & Communicate**  
Explain that Logfire’s automatic instrumentation keeps code minimal while providing full trace visibility. Highlight how distributed tracing helps pinpoint bottlenecks (e.g., LLM latency vs. network overhead). Conclude with a brief demo plan: deploy to Vercel, generate traffic, view traces in Logfire dashboard, and iterate on performance tuning.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
