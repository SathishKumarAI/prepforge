---
qid: ing_7d0fc65ce2__think__local
question: 'Explain: Introduction — Tools vs. Subagents: Building Effective AI Agents
  Without Over-Engineering'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 196
output_tokens: 396
total_tokens: 592
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T09:17:24-05:00'
sources: []
---

**1. Clarify the ask & set assumptions**  
   - Identify that the user wants a *how‑to* explanation of the “Introduction – Tools vs. Subagents” section from a book or article on AI agents.  
   - Assume the audience has basic AI knowledge but may not know what “tools” and “subagents” mean in this context.

**2. Choose a mental model / framework**  
   - Use the *agent‑centric architecture* lens: an agent = goal + decision loop + execution engine.  
   - Map “tools” to external APIs or functions the agent can call, and “subagents” to nested agents that handle sub‑tasks.

**3. Reason step by step toward a concise answer**  
   1. Define each concept in plain terms.  
   2. Explain why we need both: tools give raw power (e.g., web search), subagents add structure (decomposition).  
   3. Outline the trade‑offs: tools are lightweight but limited; subagents are powerful but risk over‑engineering.  
   4. Show a simple workflow diagram in words.  
   5. Conclude with best‑practice tips: start with tools, introduce subagents only when complexity grows.

**4. Avoid common traps**  
   - Don’t conflate “tool” with “function”; emphasize the *callable* nature.  
   - Don’t oversell subagents; remind that each adds an extra inference step and potential latency.  
   - Skip jargon unless it’s defined first.

**5. Sanity‑check & communicate clearly**  
   - Verify word count (~170 words).  
   - Read aloud: does the flow feel natural?  
   - End with a short “next steps” sentence to keep the answer actionable.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
