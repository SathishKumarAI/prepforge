---
qid: ing_00d7ac0812__fp__local
question: 'Explain: Evaluation and Benchmarks — Llm Papers Cheatsheet'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 171
output_tokens: 521
total_tokens: 692
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:07:06-05:00'
sources: []
---

**Why we evaluate language models?**  
A language model is a probability distribution \(p_\theta(x)\) over sequences. Its *utility* lies in how well it predicts unseen text, or how useful its samples are for downstream tasks. Thus evaluation reduces to measuring the discrepancy between the model’s distribution and the true data distribution \(p_{\text{data}}\). From information theory this is naturally expressed by **cross‑entropy** (or equivalently KL divergence):  

\[
H(p_{\text{data}}, p_\theta)= -\mathbb{E}_{x\sim p_{\text{data}}}\!\log p_\theta(x).
\]

Cross‑entropy is the only proper scoring rule that is strictly consistent for probabilistic predictions, guaranteeing that a model minimizing it will converge to the true distribution as data grows.  

**Benchmarks arise because we cannot observe \(p_{\text{data}}\) directly.**  
We sample a finite test set \(\mathcal{D}_{\text{test}}\), compute perplexity (the exponential of cross‑entropy), and compare across models. Perplexity captures *average predictive uncertainty*; lower values mean the model assigns higher probability to real sentences.

**Why other metrics?**  
- **Accuracy on cloze tasks** tests *knowledge recall*, linking to the model’s ability to encode factual distributions.  
- **Few‑shot task performance** evaluates *parameter efficiency*: how well a fixed \(p_\theta\) adapts without fine‑tuning, reflecting implicit inductive biases.  
- **Human‑judged coherence or safety** addresses *semantic fidelity*, which perplexity cannot capture because two models can have identical perplexities yet differ in hallucination rates.

**Non‑obvious insight:**  
Perplexity rewards *over‑confidence* on idiosyncratic test tokens: a model that assigns very high probability to rare but correct tokens can lower perplexity, even if it frequently mispredicts common patterns. Therefore, combining perplexity with *coverage metrics* (e.g., entropy of the output distribution) yields a more robust picture of true generalization.

In short, evaluation is a principled application of proper scoring rules to approximate KL divergence, while benchmarks translate this theory into concrete, reproducible numbers that expose complementary strengths and weaknesses of LLMs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
