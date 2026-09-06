---
qid: ing_8b0fa7760b__fp__local
question: You clearly use Perplexity - what's broken, and what would you ship to fix
  it?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 178
output_tokens: 646
total_tokens: 824
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:00:35-05:00'
sources: []
---

### Why Perplexity is *broken* for modern LLMs  

Perplexity (PP) measures how well a model predicts the next token:  
\[
\text{PP}=2^{-\frac1N\sum_{i=1}^{N}\log_2 p_\theta(x_i|x_{<i})}.
\]  
It was invented for *unidirectional* language modeling on small vocabularies. Two facts now invalidate that assumption:

1. **Bidirectionality & masked training** – Transformers are trained to predict *any* missing token, not just the next one. PP therefore evaluates a model on an unrealistic conditional distribution.
2. **Token‑level granularity** – Modern models operate on subword units (BPE/WordPiece). A single “meaningful” token can span multiple subwords; PP treats each subword equally, exaggerating errors that are semantically irrelevant.

Consequently, low PP does *not* correlate with downstream quality: a model can achieve 30 PP yet hallucinate or mis‑interpret context because the metric rewards surface‑level frequency matching rather than *semantic consistency*.

---

### What to ship instead  

1. **Contextualized Perplexity (cPP)** – average cross‑entropy over all *mask positions* used during training, weighted by mask probability.  
   \[
   \text{cPP}=2^{-\frac1M\sum_{j=1}^{M}\log_2 p_\theta(x_j|x_{\mathcal M\setminus j})},
   \]
   where \( \mathcal M \) is the set of masked indices.  
   *Why*: mirrors training objective, penalizes errors that matter for generation.

2. **Semantic Perplexity (sPP)** – replace token‑logits with embeddings and compute cross‑entropy over a *semantic similarity* distribution:
   \[
   p_{\text{sem}}(x_i)=\frac{\exp(\langle e_{x_i},e_\theta\rangle/\tau)}{\sum_k \exp(\langle e_k,e_\theta\rangle/\tau)},
   \]
   where \( e \) are contextual embeddings and \( \tau \) a temperature.  
   *Why*: rewards predictions that land in the right semantic region, not just lexical neighbors.

3. **Calibration‑adjusted PP (cAP)** – adjust for over‑confidence by fitting a Platt‑style sigmoid to logits before entropy calculation.  
   *Why*: modern models are notoriously miscalibrated; cAP aligns with true predictive uncertainty.

---

#### Non‑obvious insight  

Perplexity conflates **frequency** and **contextual relevance** because it treats every token equally. By redefining the probability space in terms of *semantic neighborhoods* (sPP), we expose a model’s ability to capture meaning, not just surface statistics. This shift reveals that many high‑PP models fail on tasks requiring world knowledge or long‑range coherence—precisely where real AI systems need improvement.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
