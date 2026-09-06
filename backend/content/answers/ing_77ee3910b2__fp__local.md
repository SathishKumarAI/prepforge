---
qid: ing_77ee3910b2__fp__local
question: 'Explain: ​ Reference-free vs reference-based evaluators'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 169
output_tokens: 417
total_tokens: 586
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T20:19:53-05:00'
sources: []
---

**Why the evaluator must be *reference‑free* or *reference‑based?**

When a model outputs text, we want a scalar that correlates with human judgment.  
The *fundamental problem* is: *how do we measure quality without an oracle?*  

1. **Reference‑based metrics** (BLEU, ROUGE, METEOR) assume the existence of one or more “gold” sentences.  
   - They solve a *matching optimization*: maximize overlap with references under length/ordering constraints.  
   - The underlying principle is **information gain**—the closer the generated sentence to any reference, the higher its perceived informativeness.  
   - Non‑obvious insight: these metrics are *biased* toward surface form; they penalize legitimate paraphrases because the optimization ignores semantic equivalence.

2. **Reference‑free metrics** (BERTScore, MoverScore, COMET) bypass the need for gold text by modeling a *semantic similarity function* \(f(\hat y,y)\).  
   - Here the optimization is: maximize expected utility over the *latent space of meanings*, not surface forms.  
   - The deeper principle is **probabilistic inference**—we estimate \(p(y|\hat y)\) and reward high‑probability interpretations, thus aligning with information theory (high mutual information between \(\hat y\) and true meaning).  
   - Insight: reference‑free metrics can still be *calibrated* to human scores by learning a regression on a small labeled set, thereby combining the interpretability of reference‑based scores with the flexibility of semantic models.

In short, reference‑based evaluators are efficient but surface‑biased; reference‑free ones tackle the true optimization problem—semantic fidelity—yet require richer representations and calibration.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
