---
qid: ing_ed49f2c525__fp__local
question: 'Explain: What matters more for an agentic coding tool like Claude Code:
  the model or the harness? Design the loop.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 184
output_tokens: 554
total_tokens: 738
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T00:23:53-05:00'
sources: []
---

### Why the *harness* can outweigh the raw model

An agentic coding tool is a **closed‑loop system**: a language model (LM) proposes code snippets; a harness evaluates them against specifications, tests, and safety constraints; feedback from the harness rewrites or rejects the LM’s output.  
In this loop the **information bottleneck** lies in the harness:

| Element | Role | Bottleneck |
|---------|------|------------|
| LM | Generates candidate solutions | Limited by training data & architecture |
| Harness | Checks correctness, style, safety | Provides concrete gradients (accept/reject) |

Because the harness delivers *deterministic* signals—pass/fail, test failures—it offers a much higher‑signal‑to‑noise reward than the noisy probability distribution of the LM. The LM’s uncertainty is effectively compressed by the harness into binary outcomes; thus, even a mediocre LM can be coaxed to produce high‑quality code if the harness is precise and expressive.

### Designing an effective loop

1. **Specification Capture**  
   - Input: natural language prompt + formal constraints (unit tests, lint rules).  
   - Output: *task graph* that decomposes the problem into sub‑tasks.

2. **LM Proposal Phase**  
   - Generate multiple candidate code blocks with diverse prompts (`temperature`, `top_p`).  
   - Attach *confidence scores* from the LM’s internal logits.

3. **Harness Evaluation**  
   - Compile & run tests; compute static analysis metrics.  
   - Return a *structured feedback vector*: `{pass: bool, error_msgs: [...], style_score: float}`.

4. **Adaptive Re‑prompting**  
   - If `pass==false`, construct a targeted prompt using the error messages (e.g., “Fix syntax error on line 12”).  
   - Weight new prompts by LM confidence and harness score to bias future generations.

5. **Iteration & Convergence**  
   - Loop until all sub‑tasks pass or a maximum number of rounds is reached.  
   - Log *success trajectories* to fine‑tune the harness itself (e.g., adjust test coverage).

#### Non‑obvious insight
The harness acts as an *implicit curriculum*: by gradually increasing test strictness, it transforms a single LM into a multi‑stage learning system that self‑corrects. This dynamic shaping of the reward surface is far more powerful than hard‑coding a larger model, because it exploits the LM’s flexibility while constraining its outputs to a rigorous specification space.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
