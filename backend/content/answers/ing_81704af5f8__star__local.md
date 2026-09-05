---
qid: ing_81704af5f8__star__local
question: 'Explain: Instead of exposing 130 tools as function definitions, you expose
  them as a code API the agent writes scripts against. Walk me through the tradeoffs.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 257
output_tokens: 354
total_tokens: 611
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:52:10-05:00'
sources: []
---

**Situation** – At my previous company we had a generative‑AI assistant that needed to call over a hundred internal services (CRM syncs, data pipelines, reporting tools). The first version exposed each service as an individual function definition in the LLM’s prompt, but this ballooned the prompt size and made debugging impossible.  

**Task** – I was asked to redesign the interface so developers could write reusable code snippets that the agent would execute, while keeping the assistant responsive and maintainable.

**Action** – I created a lightweight Python SDK that wrapped all services into a single namespace (`ai_tools`). The agent receives the SDK as an importable module, writes short scripts (≤ 50 lines), and executes them in a sandbox. To keep latency low, I pre‑compiled the SDK into bytecode and cached it on the server; the agent only sends the script text, which is executed by a secure worker pool. I also added automatic type hints and unit‑test hooks so developers could validate scripts locally before deployment.

**Result** – Prompt size dropped from ~15 kB to < 2 kB, cutting inference time by 35 %. Script execution errors fell by 70 % because developers could test locally. The SDK allowed us to roll out a new analytics tool in just two days instead of the weeks it took with function definitions. I learned that exposing a thin code API gives engineers flexibility and reduces prompt bloat, but requires careful sandboxing and version control to avoid runaway costs or security holes.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
