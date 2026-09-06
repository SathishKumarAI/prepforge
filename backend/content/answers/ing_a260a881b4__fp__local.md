---
qid: ing_a260a881b4__fp__local
question: 'Explain: Measuring Hallucinations — BigLaw Bench: Hallucinations | Harvey'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 176
output_tokens: 562
total_tokens: 738
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:50:55-05:00'
sources: []
---

### Why we *measure* hallucinations

Legal language models are expected to **produce verifiable facts** (case citations, statutes).  
When a model “hallucinates” – it fabricates references that do not exist – the output is no longer usable.  Thus the fundamental problem is: *how can we quantify the probability that a generated legal statement refers to an actual source?*  

### From uncertainty to a measurable metric

1. **Model outputs a distribution over tokens** \(p_\theta(x)\).  
2. For each token \(x_i\) in a generated passage, we ask: *is there a real document in the training corpus that contains this exact span?*  
3. Let \(S\) be the set of all legal documents. Define an indicator  
   \[
   I_i = \begin{cases}
   1 & \text{if } x_{i-1:i+k}\in S,\\
   0 & \text{otherwise},
   \end{cases}
   \]
   where \(k\) is the chosen span length.  
4. The **Hallucination Rate (HR)** for a passage of length \(L\) is  
   \[
   HR = 1 - \frac{\sum_{i=1}^{L} I_i}{L},
   \]
   i.e., one minus the fraction of tokens that can be anchored to real text.

This is essentially an empirical estimate of the model’s *coverage* over a factual knowledge base, derived directly from Bayes’ rule: \(P(\text{fact}\mid x)=\frac{P(x\mid \text{fact})P(\text{fact})}{P(x)}\).  By counting anchors we approximate this probability.

### Deeper principle

The metric is an instance of **information‑theoretic fidelity**: it measures how much *actual* legal information the model conveys versus invented content.  A lower HR implies higher mutual information between the generated text and the source corpus, aligning with the goal of trustworthy legal AI.

### Non‑obvious insight

Most evaluation frameworks treat hallucinations as a binary “yes/no” per passage.  The *token‑level* HR reveals that even a single fabricated sentence can inflate the score dramatically, while long passages may still be largely factual.  Thus, for high‑stakes domains like law, a fine‑grained metric is essential to guide model training (e.g., via reinforcement learning with hallucination penalties) and deployment decisions.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
