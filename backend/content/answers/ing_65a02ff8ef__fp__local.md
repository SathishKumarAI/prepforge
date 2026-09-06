---
qid: ing_65a02ff8ef__fp__local
question: Your agent spends over half its first turn just finding the relevant code.
  How do you fix that?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 179
output_tokens: 429
total_tokens: 608
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T19:41:13-05:00'
sources: []
---

When an agent spends > 50 % of its first turn hunting the code that implements a goal, it’s essentially performing *unbounded symbolic search* over the program’s call graph.  
The root cause is that the agent treats every function as a black box: to decide “do I need `foo()`?” it must explore all paths that could reach `foo`, evaluate conditions, and back‑track if they fail. This brute‑force traversal has exponential cost in the depth of the dependency tree.

**Why it must work this way**  
In any imperative system, a function’s availability depends on control flow and data dependencies. The agent can’t know a priori which functions are reachable without inspecting those paths—otherwise it would violate the *no‑lookahead* principle that guarantees soundness. Thus, the search is necessary but highly inefficient.

**Optimization through static analysis (a deeper principle)**  
Treat the program as a directed acyclic graph (DAG) of predicates and effects. By computing *reachability sets* once—using a fixed‑point algorithm over the call graph—you convert the dynamic search into a simple lookup. This is essentially solving an optimization problem: minimize runtime cost by precomputing a static dependency matrix.

**Non‑obvious insight**  
The key to halving the first‑turn cost lies in *partial evaluation* of the search itself. Rather than recomputing reachability from scratch each turn, cache the results of “does `foo` depend on `bar`?” as a Boolean matrix. When new state arrives, update only the affected rows (incremental graph updates). This leverages the fact that most programs have *low‑depth* dependencies; thus incremental propagation is O(1) per change in practice.

Implementing this static‑analysis cache turns the agent’s first turn from exponential to linear in the number of functions, and subsequent turns become near‑constant.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
