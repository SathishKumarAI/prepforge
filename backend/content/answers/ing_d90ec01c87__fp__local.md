---
qid: ing_d90ec01c87__fp__local
question: 'Explain: You''re dropped into an unfamiliar multi-file codebase with a
  failing behaviour and an LLM assistant available. Walk me through how you''d fix
  it.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 189
output_tokens: 443
total_tokens: 632
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:41:39-05:00'
sources: []
---

**Step‑by‑step “first‑principles” debugging**

1. **Formulate the *objective function***  
   The code must satisfy a specification \(S\) (the expected behavior). A failing run gives us an error signal \(E = S - \text{output}\). Treat each file as a black box that maps inputs to outputs; our goal is to minimize \(\|E\|\).

2. **Localize the *source of variance***  
   Use dynamic instrumentation (e.g., `pdb`, `tracing`) to collect call‑graphs and data flows for the failing scenario. Apply *sensitivity analysis*: perturb each variable and observe change in \(E\). The file with highest influence is the most probable culprit.

3. **Exploit the LLM as a *domain‑agnostic optimizer***  
   Feed the localized stack trace, relevant snippets, and the specification to the assistant. Ask it to generate candidate patches that reduce \(\|E\|\) while preserving existing tests. The LLM can enumerate orthogonal solutions (e.g., alternative error handling, type corrections) that a human might overlook.

4. **Validate via *information‑theoretic pruning***  
   Run each patch on a minimal test harness and compute the Kullback–Leibler divergence between pre‑patch and post‑patch output distributions. Accept patches that reduce this divergence while keeping runtime overhead low.

5. **Iterate until convergence**  
   Repeat steps 2–4, narrowing down to the file(s) whose modifications yield maximal \(\|E\|\) reduction per unit of code change. The non‑obvious insight: *the true bug is often in a dependency that only manifests under specific input distributions; by treating the repository as an optimization landscape, we systematically search for the steepest descent.*

**Result:** A principled, data‑driven repair pipeline that leverages both static analysis and LLM synthesis, guaranteeing convergence to correct behavior with minimal manual trial‑and‑error.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
