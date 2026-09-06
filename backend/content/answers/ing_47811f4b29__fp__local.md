---
qid: ing_47811f4b29__fp__local
question: 'Q: What are the limitations of LLM-as-judge?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 172
output_tokens: 464
total_tokens: 636
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T18:37:49-05:00'
sources: []
---

**Why an LLM can only *approximate* judgment**

The core task of a “LLM‑as‑judge” is to map a text input \(x\) to a label \(y\in\{0,1\}\) (e.g., correct/incorrect).  
Formally it learns a function \(\hat f(x)\) that minimizes expected loss

\[
L=\mathbb E_{(x,y)}[\ell(\hat f(x),y)] .
\]

The LLM is trained on finite data \(D=\{(x_i,y_i)\}_{i=1}^N\).  
Because the hypothesis class \(\mathcal H\) (the transformer’s parameter space) is huge but still limited, *generalization* depends on two factors:

| Factor | Why it limits judgment |
|--------|-----------------------|
| **Finite training set** | The distribution of \(x\) in \(D\) rarely covers the full space of possible claims. Unseen or adversarial phrasing can flip \(\hat f(x)\). |
| **Implicit prior over language** | The model encodes a *distribution* over plausible continuations, not a formal logical inference engine. It can “hallucinate” correctness when statistically likely but logically wrong. |
| **Evaluation loss mismatch** | Training optimizes token‑level likelihood; judging requires discrete accuracy or calibrated probability. The two objectives diverge. |

Hence the LLM’s decision surface is *statistical* rather than *principled*.  
A deeper insight: because language models are trained to predict next tokens, they implicitly learn a **soft semantic similarity** metric, not a causal or deductive one. Consequently, they can assign high confidence to spurious correlations (e.g., “The capital of France is Paris” and “Paris is a city”) while missing subtle factual nuances.

**Bottom line:** LLM-as-judge works only insofar as the training data covers the domain and the task aligns with token‑prediction objectives; otherwise, it falls back on statistical priors that can be systematically misaligned.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
