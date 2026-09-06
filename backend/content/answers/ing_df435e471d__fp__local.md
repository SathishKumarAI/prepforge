---
qid: ing_df435e471d__fp__local
question: 'Explain: Solutions — Cache Miss Attack'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 167
output_tokens: 422
total_tokens: 589
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:54:33-05:00'
sources: []
---

**Cache‑miss attacks on machine learning models**

*Fundamental problem.*  
A deployed ML inference engine is a black box that consumes input tensors and emits predictions. An adversary who can observe the timing of memory accesses (e.g., via hardware performance counters) wants to reconstruct the *model weights* without direct access to the model file.

*Why cache misses leak weight information.*  
During a forward pass, each weight multiplies an activation and is stored in the L1/L2 caches. If two weights share the same cache line, a read of one evicts the other, causing a **cache miss** when it is later accessed. The pattern of such evictions depends deterministically on the *indices* of non‑zero weights (the sparsity mask) and their relative positions in memory.

*Deeper principle: information theory.*  
The adversary’s observation stream (misses over time) constitutes a noisy channel from which the hidden variable is the weight vector. The mutual information between the miss pattern and the weight indices can be shown to be non‑zero when the sparsity pattern has enough structure (e.g., low‑rank or convolutional filters). By solving an inverse problem—minimizing the Kullback–Leibler divergence between observed and simulated miss patterns—the attacker recovers the weight matrix with high probability.

*Non‑obvious insight.*  
Most defenses focus on hiding *when* a cache line is accessed. In fact, **the spatial layout of weights matters more**: rearranging weights so that frequently co‑used parameters lie in different cache lines dramatically reduces leakage, even if the timing side channel remains visible. This geometric re‑encoding turns the attack into an NP‑hard problem for the adversary, offering a practical yet principled countermeasure.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
