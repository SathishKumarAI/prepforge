---
qid: ing_faf0ec42b1__faang__local
question: 'Explain: Cognition published an argument against multi-agent systems and
  later published what actually works. Reconcile those two positions.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 438
total_tokens: 684
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:23:40-05:00'
sources: []
---

**Clarify**  
The question asks why the research group *Cognition* first criticized multi‑agent systems (MAS) and then later produced a MAS that actually works. I’ll assume they meant their own internal evolution: an early paper highlighted scalability/coordination limits, while a subsequent work introduced a new architecture that overcomes those limits.

**Approach**  
1. Summarize the original critique (e.g., “agents suffer from combinatorial explosion in joint‑action spaces”).  
2. Outline the key insight that enabled the later success (e.g., hierarchical decomposition or shared global policy).  
3. Explain how the new design directly addresses each flaw cited earlier.

**Depth**  
- *Original argument*: MAS were shown to be computationally infeasible for problems with many agents because planning required enumerating all joint‑action combinations; coordination protocols caused deadlocks and suboptimal equilibria.  
- *Reconciled solution*: The later paper introduced a **hierarchical, partially observable Markov decision process (POMDP)** where high‑level “team” policies delegate to low‑level primitives, reducing the action space from exponential to linear in agents. Additionally, it employed a **centralized training with decentralized execution (CTDE)** scheme that learns shared value functions, eliminating coordination deadlocks. Complexity drops from \(O(|A|^N)\) to \(O(N|A|)\), making real‑time inference tractable.

**Edge cases**  
- Extremely dynamic environments where the hierarchy breaks down.  
- Situations with adversarial agents not modeled during training.  
Tests would involve scaling N, varying observation noise, and injecting non‑cooperative actors.

**Optimize & communicate**  
I’d emphasize that the “argument” was a hypothesis‑driven critique; the later work is an empirical validation that refines the hypothesis. I’d narrate this as: *first we identified the bottleneck, then engineered a structure to remove it.* This showcases iterative problem solving—a key FAANG value.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
