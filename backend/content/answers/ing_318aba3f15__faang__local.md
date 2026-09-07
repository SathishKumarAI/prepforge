---
qid: ing_318aba3f15__faang__local
question: 'Explain: Sub-Agents and Parallelism — Claude Code'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 522
total_tokens: 755
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:39:31-05:00'
sources: []
---

**Clarify**  
You’re asking how Claude’s architecture splits a task into *sub‑agents* and executes them concurrently—i.e., the “parallelism” mechanism that lets large language models finish complex prompts faster.

**Approach**  
1. Identify the high‑level workflow: a top‑level planner, sub‑agent generators, an orchestrator.  
2. Explain the parallel execution model (async tasks, thread pools).  
3. Show how results are merged and fed back to the planner.  

**Depth**  
Claude’s *Sub‑Agent* system is essentially a lightweight micro‑service layer built on top of the core LLM. When a prompt needs multiple steps (e.g., “summarize, translate, fact‑check”), the orchestrator invokes distinct sub‑agents—each an instance of the same model but with role‑specific prompts.  
- **Parallelism**: The orchestrator uses Python’s `asyncio` and a bounded semaphore to launch up to *N* agents concurrently (default 8). Each agent runs in its own coroutine, sending input to the LLM API and awaiting the response.  
- **Result aggregation**: Once all coroutines finish, results are collected into a dictionary keyed by sub‑agent name. The planner then merges these outputs—often via a simple rule set or a secondary “merge” agent that resolves conflicts.  
- **Complexity**: O(K) where *K* is the number of agents; latency scales roughly with `max_time = max_i(t_i)` rather than Σtᵢ, giving near‑linear speedup until I/O bound.

**Edge Cases**  
- Agent failure or timeouts → fallback to sequential execution.  
- Excessive concurrency → rate limits hit → back‑off strategy.  
- Divergent outputs → merge conflicts; need a deterministic tie‑breaker.

**Optimize & Communicate**  
To improve throughput, we can cache sub‑agent responses for identical inputs (memoization) and tune the semaphore size based on observed latency distribution. I’d explain this trade‑off to stakeholders: higher parallelism reduces wall‑clock time but increases GPU/CPU load and risk of throttling. In a production interview, I’d sketch the orchestrator’s async flow on a whiteboard and walk through a sample “translate & fact‑check” request.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
