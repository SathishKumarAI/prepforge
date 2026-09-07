---
qid: ing_1a15571bd2__faang__local
question: 'Explain: Evaluating and Debugging Generative AI - DeepLearning.AI'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 460
total_tokens: 697
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:45:44-05:00'
sources: []
---

**Clarify**

We need to explain how a team would *evaluate* the quality of a generative model (e.g., GPT‑style) and *debug* it when outputs are wrong or unsafe.  
Assumptions: we have access to training logs, inference APIs, user feedback, and compute for re‑training.

**Approach**

1. **Define metrics** (perplexity, BLEU/FID, safety scores).  
2. **Collect evaluation data** – synthetic test sets + real user prompts.  
3. **Run automated tests** to detect regressions after each training iteration.  
4. **Instrument the model**: log hidden states, attention weights, token probabilities.  
5. **Iteratively debug** by correlating anomalies with training data or architecture changes.

**Depth**

- *Evaluation*: Use perplexity on a held‑out set for baseline; augment with human‑rated quality scores and safety metrics (e.g., toxicity thresholds). For image/text generation, compute FID/ROUGE.  
- *Debugging*: If perplexity spikes, inspect data distribution shift. If unsafe content appears, trace the activation patterns that triggered it—use saliency maps or attention visualizers. Employ counter‑factual prompts to test robustness.  
- Complexity: Evaluation is O(N) per batch; debugging can be expensive if we need to recompute gradients, so use cached activations. Trade‑off between fine‑grained debugging (high fidelity) vs. fast heuristics (quick feedback).

**Edge Cases**

- Data drift leading to unseen prompts.  
- Adversarial prompting that exploits model biases.  
- Overfitting to the validation set causing inflated metrics.

Test by injecting synthetic adversarial prompts and monitoring safety thresholds.

**Optimize & Communicate**

Iteratively refine training data, loss weighting, or architecture based on metric feedback. Present findings in dashboards: trend graphs of perplexity vs. safety score, heatmaps of attention for flagged outputs. Explain decisions with causal links (e.g., “adding diverse demographic prompts reduced bias by X%”). This demonstrates structured problem solving, clear communication, and depth—all key FAANG interview signals.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
