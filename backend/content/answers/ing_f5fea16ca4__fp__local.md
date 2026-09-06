---
qid: ing_f5fea16ca4__fp__local
question: 'Explain: Compute corrected rate — Ai Evals Complete Guide Langwatch Langfuse'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 175
output_tokens: 460
total_tokens: 635
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T00:42:32-05:00'
sources: []
---

**Corrected rate** is the *bias‑adjusted* performance metric you get when you ask a language model (LM) to evaluate its own outputs or to score another LM’s generations.  
The fundamental problem it solves is that **raw accuracy or BLEU scores are systematically optimistic**: the evaluator, being trained on the same data as the generator, tends to reward familiar patterns and penalize novelty.  

1. **Model a scoring process**: let \(S\) be the score assigned by the evaluator to a generation \(g\).  
   \[
   S = f(g)+\varepsilon,
   \]
   where \(f(g)\) is the true (latent) quality and \(\varepsilon\) captures noise and bias.  

2. **Estimate bias**: run the evaluator on a held‑out *gold* set with known human scores \(H\).  
   Fit a linear regression \(S = \alpha + \beta H + u\).  The intercept \(\alpha\) is the systematic over‑rewarding (or under‑rewarding), and \(\beta\) tells how much of the human variance the evaluator captures.  

3. **Correct**: for any new score \(s_{\text{raw}}\),
   \[
   s_{\text{corr}} = \frac{s_{\text{raw}}-\alpha}{\beta}.
   \]
   This is the *corrected rate*—the expected human‑aligned quality.  

The deeper principle is **calibration**: we are forcing a probabilistic model (the evaluator) to match the true distribution of human judgments.  
A non‑obvious insight: if \(\beta\) falls below 1, increasing the evaluator’s capacity or diversity of training data can *reduce* its sensitivity to idiosyncratic patterns, thereby raising \(\beta\). Thus, rather than simply “tuning for higher accuracy,” you should target a higher calibration slope.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
