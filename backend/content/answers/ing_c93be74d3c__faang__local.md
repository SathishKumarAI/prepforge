---
qid: ing_c93be74d3c__faang__local
question: How do you present an agent's tool calls and multi-step progress in the
  UI?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 407
total_tokens: 646
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:27:47-05:00'
sources: []
---

**Clarify**  
You want a UI that lets users see *which tools* an LLM‑driven agent is invoking and the *intermediate steps* it’s taking before delivering the final answer.  
Assumptions to confirm:  
1. Are we visualising in‑app or on a separate dashboard?  
2. Do we need real‑time streaming or just a replay?  
3. What level of detail (tool name, arguments, result) is required?

**Approach**  
1. **Event stream API** – each tool call emits `{timestamp, tool, args, status}`.  
2. **Front‑end component** – a collapsible timeline panel.  
3. **State machine** – map statuses (`queued → running → succeeded/failed`).  
4. **Replay mode** – allow users to step through or jump to a specific call.

**Depth**  
- Render calls as cards in chronological order; use icons per tool type.  
- Hover shows full arguments, click expands result preview (JSON tree).  
- For long sequences, lazy‑load older entries.  
- Complexity: O(n) rendering, O(1) updates via React state or Vue reactive refs.  
- Trade‑off: richer UI (color coding, tool icons) vs. bandwidth; compress payloads with delta encoding.

**Edge Cases**  
- Tool failures → show error bubble, allow retry button.  
- Circular dependencies → detect and warn.  
- Missing arguments → placeholder “unknown”.  
- Very large results → truncate with “view full” link.

**Optimize & Communicate**  
Start with a minimal timeline; once validated, add tool‑specific widgets (maps for location tools, charts for analytics). Explain to interviewers: we’re building an observable agent workflow that balances transparency and performance, ensuring users can audit decisions while keeping the UI responsive.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
