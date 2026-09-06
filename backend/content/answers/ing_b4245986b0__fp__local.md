---
qid: ing_b4245986b0__fp__local
question: 'Explain: Step 5: Extract the Optimal Path after Training'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 172
output_tokens: 620
total_tokens: 792
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:27:07-05:00'
sources: []
---

### Step 5: Extracting the Optimal Path after Training  

After a model (e.g., an HMM or a neural‐sequence tagger) has been trained, we possess **parameters** that define the joint probability of observations \(O = o_1,\dots,o_T\) and hidden states \(S = s_1,\dots,s_T\).  
The *optimal path* is the state sequence \(\hat S\) maximizing this probability:

\[
\hat S=\arg\max_{S} P(S|O)=\arg\max_{S}\prod_{t=1}^{T}P(o_t|s_t)\,P(s_t|s_{t-1}) .
\]

#### Why it *must* be solved by dynamic programming  
The objective is a product over time steps; taking logs turns it into a sum:

\[
\log P(S|O)=\sum_{t=1}^{T}\Bigl(\log P(o_t|s_t)+\log P(s_t|s_{t-1})\Bigr).
\]

Because each term depends only on the current and previous state, the global optimum can be decomposed:  
the best prefix ending in a given state at time \(t\) depends solely on the best prefix of length \(t-1\).  
This *optimal substructure* is exactly what the Viterbi algorithm exploits:

```
δ_t(s) = max_{s'} [ δ_{t-1}(s') + log P(o_t|s) + log P(s|s') ]
ψ_t(s) = argmax_{s'} [...]
```

Storing backpointers \(\psi\) allows a single backward pass to recover \(\hat S\).  
Any brute‑force search would be exponential in \(T\); dynamic programming reduces it to \(O(T\,|S|^2)\).

#### Connection to deeper principles  
- **Dynamic programming** is an instance of *optimal control* on a finite graph.  
- The log‑probabilities are a *cost function*; maximizing probability equals minimizing negative log‑likelihood, i.e., solving a convex optimization over discrete variables.  

#### Non‑obvious insight  
The optimal path depends only on **relative** scores (log probabilities), not absolute values.  
Thus, adding a constant to all emission or transition scores leaves the Viterbi result unchanged.  
This invariance explains why temperature scaling in language models does *not* alter decoding unless it changes relative logits.

In summary, extracting the optimal path is an application of dynamic programming to a decomposable log‑likelihood objective, grounded in optimal control and convex optimization, with the subtle but powerful property that only score differences matter.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
