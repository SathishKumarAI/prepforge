---
qid: ing_c93be74d3c__star__local
question: How do you present an agent's tool calls and multi-step progress in the
  UI?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 316
total_tokens: 558
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:11:39-05:00'
sources: []
---

**Situation:**  
At my last startup we built a virtual assistant that could browse the web, run code snippets, and pull data from internal APIs. The product manager asked me to expose every tool call and the multi‑step reasoning behind each response so our UX team could debug failures in real time.

**Task:**  
I had to design an interface that logged each agent action (tool invocation, API request, inference step) with timestamps, inputs/outputs, and a concise “why” explanation, all while keeping latency under 2 s for the user.

**Action:**  
I chose React + D3 for the front end and a lightweight Node proxy to capture events. Each tool call emitted a JSON payload that included: `tool_name`, `parameters`, `result_summary`, and an optional `confidence_score`. I built a collapsible tree view where steps were color‑coded by type (e.g., red for HTTP, blue for code execution). For multi‑step chains, the UI displayed a breadcrumb trail linking parent actions to child calls. To avoid blocking, I streamed updates via Server‑Sent Events and throttled re‑renders to 60 fps.

**Result:**  
Within two weeks of launch, our QA team reduced debugging time from ~45 min per incident to <10 min, and user satisfaction scores on the help desk rose by 27 %. I learned that exposing internal reasoning in a lightweight, interactive way dramatically improves trust and developer productivity.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
