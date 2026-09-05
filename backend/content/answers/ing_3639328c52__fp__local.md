---
qid: ing_3639328c52__fp__local
question: 'Explain: Exact Match — Llm Evaluation'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 167
output_tokens: 489
total_tokens: 656
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T17:59:46-05:00'
sources: []
---

**Exact‑Match (EM) in LLM evaluation**

The fundamental problem is *how do we quantify correctness of a generated answer when the target is known?*  
If the ground truth is a single token sequence \(t\), then any candidate \(s\) can be judged by the indicator

\[
\text{EM}(s,t)=
\begin{cases}
1 & \text{if } s=t,\\
0 & \text{otherwise}.
\end{cases}
\]

This binary function is the *Dirac delta* on the discrete space of strings. Its expectation over a dataset gives the proportion of perfect reproductions—exactly what we want when the task demands an unambiguous answer (e.g., dictionary lookup, fact retrieval).

Why must it work this way?  
1. **Information-theoretic optimality**: The EM score is the maximum‑likelihood estimator for the *deterministic* mapping \(t \mapsto s\). Any deviation reduces likelihood to zero, mirroring a strict “information loss” penalty.  
2. **Geometric simplicity**: In Hamming space of token indices, EM corresponds to a point mass at distance 0; all other points lie in the complement. This yields a clean convexity property for training objectives that use EM as a target (e.g., reinforcement learning with reward shaping).  
3. **Optimization tractability**: Because EM is a step function, it can be used as a surrogate loss in policy gradient methods—gradients are zero except at the exact match, which encourages exploration until the correct answer is hit.

**Non‑obvious insight:**  
EM implicitly assumes *label noise* is absent. In practice, many “correct” answers have multiple valid forms (synonyms, paraphrases). Treating any mismatch as a failure underestimates model performance and biases training toward brittle token‑level exactness rather than semantic fidelity. A principled remedy is to replace EM with a *soft‑match* kernel (e.g., BLEU or ROUGE) that respects the underlying geometry of language while preserving the clear decision boundary of exactness for tasks that truly require it.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
