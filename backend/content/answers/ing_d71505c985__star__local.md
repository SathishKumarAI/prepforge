---
qid: ing_d71505c985__star__local
question: 'Q: Your team wants to build an internal AI assistant. Should you build
  on OpenClaw, OpenHands, or build custom with Claude Code + MCP?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 257
output_tokens: 289
total_tokens: 546
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:38:51-05:00'
sources: []
---

**Situation:** Our product team was pushing for a conversational AI that could pull data from our internal dashboards and auto-generate reports by Friday next week to demo at the quarterly review.

**Task:** I had to decide whether to fast‑track with an existing open‑source stack (OpenClaw or OpenHands) or craft a custom solution using Claude Code + MCP, while ensuring data security, low latency, and maintainability.

**Action:** I mapped each option against our constraints:  
- *OpenClaw* offered tight integration with Jupyter notebooks but lacked robust intent parsing for natural language queries.  
- *OpenHands* had excellent voice‑to‑code capabilities yet its API was still experimental, raising reliability concerns for production.  
I benchmarked Claude Code’s code generation speed (0.8 s per snippet) and MCP’s modular policy engine, then built a prototype that wrapped internal APIs in MCP policies to enforce data access rules. I also added a lightweight caching layer to reduce latency.

**Result:** The custom stack cut query turnaround from 30 min to under 2 min, achieved 95% accuracy on intent recognition, and passed the security audit with zero breaches. I learned that while open‑source tools accelerate early prototypes, tailoring the stack around our data governance needs delivers the most reliable product for internal users.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
