---
qid: ing_c93be74d3c__fp__local
question: How do you present an agent's tool calls and multi-step progress in the
  UI?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 176
output_tokens: 467
total_tokens: 643
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:08:40-05:00'
sources: []
---

### Why UI design for AI‑tool calls matters

An agent’s “tool calls” are *intermediate decisions* that map an abstract intent (e.g., “find the best route”) to concrete API invocations (geocoding, routing, weather). If a user cannot see these steps, they treat the system as a black box and lose trust. The UI must therefore expose *progressive disclosure*: reveal only what the user needs now, but allow drill‑in for deeper inspection.

### Core principles

| Principle | Why it works |
|-----------|--------------|
| **Information hierarchy** | Humans process sequential information better than parallel streams. Show the current tool call and its status first; hide earlier calls until requested. |
| **Feedback latency** | The user’s mental model depends on perceived speed. Use a “progress bar” that reflects *expected* vs *actual* completion time for each tool, not just overall progress. |
| **Causal traceability** | Each call should be linked to the original intent and the resulting output. A clickable breadcrumb trail lets users back‑track and see how one API result influenced another. |
| **Error provenance** | When a tool fails, display the exact payload and response code next to the failed step, not just “error”. This empowers debugging without leaving the UI. |

### Non‑obvious insight

*The most valuable visual cue is *probabilistic confidence*, not completion status.*  
When an agent calls a weather API that returns a 70 % chance of rain, showing that probability beside the tool call lets users anticipate downstream decisions (e.g., whether to reroute). Even if the API call succeeds instantly, the confidence level can alter user expectations about the *utility* of the result. Thus, a UI should display **confidence heat‑maps** alongside each step, turning opaque probabilities into actionable information.

By combining hierarchical disclosure, latency feedback, causal breadcrumbs, and confidence visualization, designers give users a transparent, low‑cognitive‑load view of an agent’s multi‑step reasoning—turning complex AI behavior into an intuitive narrative.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
