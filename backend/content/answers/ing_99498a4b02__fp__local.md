---
qid: ing_99498a4b02__fp__local
question: 'Explain: Score within context — Ai Evals Complete Guide Langwatch Langfuse'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 175
output_tokens: 461
total_tokens: 636
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:31:53-05:00'
sources: []
---

**Score‑within‑Context (SwiC) – a principled way to evaluate LLMs**

At its core, an LLM is a conditional probability model  
\(p_\theta(\mathbf{y}\mid\mathbf{x})\).  
When we ask it to generate a response \(\hat{\mathbf{y}}\), the only thing that matters for evaluation is how *likely* that response is under the true distribution \(p^*(\mathbf{y}\mid\mathbf{x})\).  
The log‑likelihood of the correct answer, normalized by the context length, gives a direct estimate of per‑token perplexity.  

**Why normalizing by context?**  
In practice we compare prompts of different lengths (e.g., a short question vs. an entire dialogue). Raw likelihoods are dominated by prompt size; longer contexts inflate the score even if the model’s quality is unchanged. Dividing by the number of tokens in \(\mathbf{x}\) yields a *per‑token* metric that is invariant to prompt length, aligning with information theory: each token carries one unit of information.

**Connection to optimization**  
SwiC turns evaluation into an objective function that could be minimized during training (e.g., via reinforcement learning). By treating the score as a differentiable surrogate for downstream utility, we bridge the gap between *offline* benchmarks and *online* deployment.

**Non‑obvious insight**  
Most people treat evaluation as a black‑box metric. In fact, SwiC exposes an **entropy bottleneck**: if a model assigns high probability to a correct answer but low to many plausible alternatives, its score will still be high. This reveals that a good evaluator must penalize *overconfidence* on wrong answers—something standard BLEU or ROUGE miss.

> **Practical tip:** Use Langwatch/Langfuse to automatically log the context length and compute SwiC per turn; it scales linearly with batch size and gives you a single, interpretable number that correlates strongly with human judgment.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
