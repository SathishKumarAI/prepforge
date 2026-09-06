---
qid: ing_c93be74d3c__think__local
question: How do you present an agent's tool calls and multi-step progress in the
  UI?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 195
output_tokens: 521
total_tokens: 716
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T14:13:26-05:00'
sources: []
---

**1️⃣ Clarify the ask & set assumptions**  
- *What is “presenting” here?* We’re talking about a user‑facing interface that shows an agent’s internal reasoning: each tool call, its input, the returned result, and how those pieces fit into the overall plan.  
- *Who are we designing for?* Assume non‑technical users who need to understand why the agent behaved as it did, but also power users who might want to tweak or replay steps.  
- *What constraints exist?* Time (real‑time updates vs batch), screen real‑space, accessibility.

**2️⃣ Adopt a mental model / framework**  
Use a **timeline + tree hybrid**:  
- A linear “progress bar” for the overall workflow.  
- Nested expandable nodes for each tool call, showing *call → arguments → output*.  
This mirrors how developers trace logs (stack traces) and how project managers see milestones.

**3️⃣ Reason step‑by‑step toward a concrete UI design**  
1. **Top‑level panel**: “Execution Flow” with a step counter.  
2. **For each step**:  
   - Icon/label for tool name.  
   - Collapsible section with JSON of arguments and output.  
3. **Highlight current active step** (e.g., blinking border).  
4. **Action controls**: “Retry”, “Skip”, or “Edit” on a step.  
5. **Visualization aids**: color‑coding success vs failure, icons for tool types.  
6. **Optional side panel**: summarise the overall intent and final outcome.

**4️⃣ Common traps to avoid**  
- *Overloading* the user with raw JSON—wrap it in pretty‑printed panels or collapsible trees.  
- *Lack of context*: show the parent plan node so users see why a tool was called.  
- *Non‑responsive updates*: buffer rapid calls; otherwise the UI feels laggy.

**5️⃣ Sanity‑check & articulate**  
Ask: “Does this let a user trace from intent → tool call → result, and then decide on next action?” If yes, iterate; if no, add a breadcrumb trail or a “Show full plan” toggle. Communicate the design as: “We’ll present a collapsible timeline where each step shows its tool name, arguments, and output—highlighting progress and allowing quick intervention.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
