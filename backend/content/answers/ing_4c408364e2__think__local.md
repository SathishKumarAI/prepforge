---
qid: ing_4c408364e2__think__local
question: 'Explain: Add custom spans — Ai Evals Complete Guide Langwatch Langfuse'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 194
output_tokens: 475
total_tokens: 669
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:22:41-05:00'
sources: []
---

**1️⃣ Clarify the ask & set assumptions**  
- The user wants an *explanation* of how to “Add custom spans” in the context of **AI Evals**, specifically for the **Langwatch** and **Langfuse** tools.  
- Assume they’re familiar with basic evaluation concepts but not with span‑level instrumentation.  
- Clarify whether they need code snippets, conceptual steps, or both; here we’ll outline a clear mental model first.

**2️⃣ Mental model / framework**  
- Treat an *evaluation* as a pipeline: **Input → Model → Output → Metrics**.  
- A *span* is any named sub‑segment of that pipeline you want to instrument (e.g., tokenization, prompt construction).  
- Custom spans let you capture timing, metadata, or debug info for those segments.

**3️⃣ Step‑by‑step reasoning**  
1. Identify the logical points in your eval where extra insight is needed.  
2. In **Langwatch**, wrap each point with `langwatch.span(name="…")` context managers; inside, run the code you want to trace.  
3. For **Langfuse**, create a custom span by calling `client.start_span(name=…)`, execute the block, then `client.end_span()`.  
4. Ensure spans are nested correctly so that parent/child relationships reflect real dependencies.  
5. Verify that each span logs required metadata (e.g., duration, status).  
6. Run the eval and inspect the resulting trace dashboards to confirm spans appear as expected.

**4️⃣ Common traps**  
- Forgetting to close a span → hanging threads or corrupted metrics.  
- Over‑nesting: too many tiny spans can overwhelm storage & slow execution.  
- Mixing synchronous and asynchronous code without proper async context managers.

**5️⃣ Sanity‑check & verbalize**  
- After coding, mentally walk through the pipeline: “When I hit this span, does it capture everything I need?”  
- Say aloud the start/end points of each span to ensure they’re logically placed.  
- Run a quick test eval and read back the logged durations—if they match expected ranges, you’ve wired them correctly.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
