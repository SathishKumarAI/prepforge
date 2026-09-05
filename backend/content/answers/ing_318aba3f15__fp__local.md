---
qid: ing_318aba3f15__fp__local
question: 'Explain: Sub-Agents and Parallelism — Claude Code'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 170
output_tokens: 526
total_tokens: 696
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T17:50:05-05:00'
sources: []
---

### Why split a Claude prompt into *sub‑agents*?

Claude’s core engine (the “LLM”) is a black‑box function  
\(f:\text{Prompt}\rightarrow \text{Response}\).  
If we hand the whole conversation to \(f\) in one shot, every token we add
increases latency linearly: the model must read, process, and generate again.

The *sub‑agent* pattern rewrites the problem as a **divide‑and‑conquer** task:
1. **Decompose** the user request into independent subtasks (e.g., “summarise paragraph A”, “extract facts from paragraph B”).
2. **Assign each subtask to an agent**—a lightweight wrapper that invokes Claude with a minimal prompt.
3. **Execute agents in parallel** on separate threads or processes.

This mirrors the *Map‑Reduce* paradigm: map → independent workers; reduce → aggregation of partial results. The key insight is that Claude’s inference cost scales roughly linearly with input length, but not with the number of concurrent calls—each call runs on a distinct GPU core. Thus parallelism yields sublinear wall‑clock time while keeping per‑token costs unchanged.

### Deep principle: *Information bottleneck in sequence models*

Claude’s transformer processes tokens by sliding windows; long inputs force many attention computations. By breaking a long prompt into short, focused prompts, each agent avoids the quadratic cost of attending over the entire context. The overall computation becomes \(k \times O(L_{\text{sub}}^2)\) instead of \(O((kL_{\text{sub}})^2)\), where \(k\) is the number of sub‑agents and \(L_{\text{sub}}\) the length per agent.

### Non‑obvious insight

**Parallelism introduces *interaction noise*:** agents may produce overlapping or contradictory outputs. A naïve aggregation (e.g., simple concatenation) can magnify errors. The subtle fix is to let a **meta‑agent** perform *consistency checking*—it receives all sub‑outputs, runs a lightweight classifier on each, and resolves conflicts before presenting the final answer. This extra layer turns parallelism from a speed trick into a robustness enhancement.

In short: sub‑agents + parallelism = faster inference *plus* a principled way to manage long‑form reasoning by leveraging transformer internals and an information‑theoretic view of context size.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
