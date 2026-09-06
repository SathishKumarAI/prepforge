---
qid: ing_8c0f373857__fp__local
question: What's the difference between zero-shot and few-shot prompting, and when
  would you use each?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 177
output_tokens: 499
total_tokens: 676
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:02:46-05:00'
sources: []
---

**Zero‑shot vs. Few‑Shot Prompting**

Both techniques let a language model (LM) perform a new task without explicit fine‑tuning.  
The *fundamental problem* is that the LM’s parameters were trained on a vast corpus of free text; to solve a specific query it must “infer” the mapping from input to output.

| Feature | Zero‑shot | Few‑shot |
|---------|-----------|----------|
| **Evidence supplied** | Only the task description (e.g., “Translate English to French.”) | Task description + 1–5 *examples* that show the desired input–output pattern. |
| **Assumption about LM knowledge** | The model already internalises the rule from pre‑training; the prompt merely activates it. | The model uses the few examples as a *micro‑dataset*, aligning its internal representation with the task’s idiosyncrasies. |
| **Information‑theoretic cost** | O(1) extra tokens; relies on prior entropy reduction by the LM. | O(k × n) tokens (k = #shots, n = avg length), trading off token budget for higher certainty. |

### When to use which?

* **Zero‑shot** is preferable when:  
  * Token budget is tight (e.g., real‑time inference).  
  * The task is generic and the LM’s pre‑training has likely covered it (sentiment, summarisation).  
  * You want maximal generality; adding examples may overfit to a narrow style.

* **Few‑shot** shines when:  
  * The task is domain‑specific or stylistically constrained (legal contract drafting).  
  * You have a small but informative set of examples that clarify nuances the LM might misinterpret.  
  * Accuracy outweighs token cost—e.g., medical diagnosis prompts where each extra example can halve error rates.

### Non‑obvious insight

Adding **contrastive** examples (one correct, one deliberately wrong) can force the model to learn a sharper decision boundary, often outperforming plain few‑shot setups. This leverages the LM’s implicit “self‑critique” ability: it learns not just *what* to output but *why* certain patterns are undesirable.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
