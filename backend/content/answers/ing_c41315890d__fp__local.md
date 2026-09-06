---
qid: ing_c41315890d__fp__local
question: 'Q: How do you keep eval results honest against data contamination?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 172
output_tokens: 398
total_tokens: 570
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:59:07-05:00'
sources: []
---

**Why contamination matters**

When a model is evaluated on a dataset that has leaked training signals, the score no longer reflects *generalisation* but memorised patterns. That turns an “accuracy” into a meaningless number and misleads downstream decisions.

**The principled fix: controlled exposure**

1. **Strict partitioning by origin**  
   - Build a *metadata graph* of every example’s lineage (source, preprocessing steps).  
   - Enforce that no edge connects training to test data; the graph must be bipartite.  
   This guarantees that overlap is only possible through shared derivation, which we can then audit.

2. **Statistical contamination detection**  
   - For each test token, compute its *information‑theoretic distance* (e.g., KL divergence) to the empirical distribution of the training set.  
   - Flag tokens whose distance falls below a threshold as potential leaks.  
   This leverages the deep principle that a clean test sample should be statistically independent from training.

3. **Adversarial “contamination score”**  
   - Train a lightweight discriminator to distinguish training vs. test samples.  
   - A high discrimination accuracy signals contamination; a low one indicates honest evaluation.  
   The discriminator’s loss is an upper bound on the mutual information between datasets, tying the method to information theory.

**Non‑obvious insight**

Even if the *datasets* are disjoint, shared preprocessing pipelines can create hidden correlations (e.g., stemming identical tokens). By modelling the entire data‑processing graph and applying a probabilistic independence test at every node, you expose subtle leaks that simple split checks miss. This approach scales with data size because the graph operations are linear in the number of examples, yet it remains grounded in the same optimization principle that drives clean generalisation: *minimise mutual information between training and evaluation sets.*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
