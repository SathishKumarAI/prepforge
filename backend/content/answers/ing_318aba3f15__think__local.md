---
qid: ing_318aba3f15__think__local
question: 'Explain: Sub-Agents and Parallelism — Claude Code'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 189
output_tokens: 448
total_tokens: 637
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T02:23:45-05:00'
sources: []
---

**1️⃣ Clarify the request & set assumptions**  
- The user wants an explanation of “Sub‑Agents and Parallelism” as used in Claude’s codebase, not a generic AI concept.  
- Assume they have some programming background but may not know how Anthropic structures Claude internally.  
- Decide to focus on high‑level design: what a sub‑agent is, why parallelism matters, and how it’s implemented.

**2️⃣ Mental model / framework**  
Use a *“pipeline of responsibility”* view:  
- **Master agent** orchestrates the conversation.  
- **Sub‑agents** are specialized workers (e.g., reasoning, summarization).  
- **Parallelism** lets multiple sub‑agents run concurrently to reduce latency and improve throughput.

Map this onto Claude’s architecture: master → dispatch → worker threads/processes or async coroutines → results aggregation.

**3️⃣ Step‑by‑step reasoning**  
1. Outline the overall flow of a user query through Claude.  
2. Describe how the system splits tasks into sub‑agents (tokenization, intent detection, grounding).  
3. Explain the concurrency model used (async/await, thread pool, or actor‑style queues).  
4. Show how results are merged back and why that yields lower latency.  
5. Mention any fallback logic if a sub‑agent fails.

**4️⃣ Common traps to avoid**  
- Don’t conflate *parallelism* with *multi‑threading*; clarify that Claude may use async I/O, not necessarily OS threads.  
- Avoid deep dives into low‑level C++ or Rust code unless the user explicitly asks.  
- Don’t overpromise performance gains—highlight trade‑offs like resource contention.

**5️⃣ Sanity‑check & communicate**  
- Re‑read the explanation to ensure it flows from high‑level idea to concrete example.  
- Verify that each bullet logically follows the previous one.  
- Speak “out loud” (i.e., write in a conversational tone) so the user can mentally rehearse the steps and apply them elsewhere.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
