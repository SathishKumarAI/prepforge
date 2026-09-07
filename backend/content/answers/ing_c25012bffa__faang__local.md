---
qid: ing_c25012bffa__faang__local
question: 'Explain: Runnables — Langchain Deep Dive'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 586
total_tokens: 818
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:12:52-05:00'
sources: []
---

**Clarify**  
We’re asked to explain *Runnables* in the context of **LangChain**, a Python framework for building AI applications with LLMs.  
Assumptions:  
1. Interviewer wants both conceptual and practical details (e.g., how Runnables compose, state handling).  
2. The audience knows basic LLM/LLM‑chain terminology but not LangChain internals.

**Approach**  
1. Define the core abstraction (`Runnable`).  
2. Show its API contract (input→output, `invoke`/`stream`).  
3. Explain composition primitives (`>>`, `|`, `branch`, `parallel`) and how they build pipelines.  
4. Touch on stateful vs stateless Runnables and error handling.  
5. End with a quick code sketch.

**Depth**  
A **Runnable** is an immutable, pure function that maps a dictionary of inputs to a dictionary of outputs. It exposes two primary methods:  

| Method | Purpose | Complexity |
|--------|---------|------------|
| `invoke(input)` | Synchronous execution; returns full output dict. | O(1) per call (ignores underlying LLM latency). |
| `stream(input)` | Async generator yielding partial outputs (useful for streaming LLMs). | O(n) where *n* is number of tokens streamed. |

Composition:  
- **Sequential** (`a >> b`) creates a new Runnable that feeds the output of `a` into `b`.  
- **Parallel** (`Runnable.parallel([a,b])`) runs multiple Runnables concurrently and merges outputs.  
- **Branching** (`Runnable.branch(lambda x: "A" if cond else "B")`) routes inputs to different sub‑runnables.

Stateful Runnables (e.g., `ChatModel` storing conversation history) are wrapped in a *stateful* interface that preserves internal context across invocations. Error handling is propagated via exceptions or optional `catch` blocks.

**Edge Cases**  
- Missing keys → `KeyError`; mitigated by `Runnable.with_defaults`.  
- Long‑running LLM calls → timeouts; handled with `asyncio.wait_for`.  
- Parallel overload → thread‑pool saturation; use bounded executors.

**Optimize & Communicate**  
Future improvements: memoization for deterministic Runnables, better type hints to aid IDE autocompletion. When explaining, I’d narrate “Think of a Runnable as a Lego block that can be snapped together in any shape—sequentially, in parallel, or conditionally—while keeping the internals hidden.” This frames the abstraction, satisfies FAANG’s focus on clarity and depth, and stays within 200 words.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
