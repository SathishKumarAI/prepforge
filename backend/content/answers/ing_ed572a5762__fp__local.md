---
qid: ing_ed572a5762__fp__local
question: 'Explain: Hashing methods — What is Load Balancing?'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 172
output_tokens: 568
total_tokens: 740
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T00:24:07-05:00'
sources: []
---

**Load balancing in hash‑based partitioning**

Suppose we have a set \(S\) of keys that must be distributed among \(m\) servers (buckets).  
Let \(h:S\rightarrow\{1,\dots ,m\}\) be a hash function.  For each key \(x\), the server
\(h(x)\) receives it.  The *load* on server \(i\) is

\[
L_i=\sum_{x\in S}\mathbf 1_{\{h(x)=i\}} .
\]

The fundamental problem is to keep all \(L_i\) as equal as possible; otherwise some
servers become bottlenecks, while others sit idle.  
From a **probabilistic viewpoint**, if \(h\) behaves like an independent random function,
then each key chooses a server uniformly at random, so \(\mathbb E[L_i]=|S|/m\).  By the
Chernoff bound,

\[
\Pr[\,L_i > (1+\varepsilon)\tfrac{|S|}{m}\,] \le e^{-\Theta(\varepsilon^2 |S|/m)} .
\]

Thus with high probability all loads are within a small factor of the mean.  This
is the *load‑balancing property* that guarantees scalability.

**Why it must hold**

- **Information‑theoretic limit:** Each key carries at most one bit of information about its destination; to avoid collisions, the hash space must be uniformly populated.
- **Geometric intuition:** Think of keys as points in a high‑dimensional cube; hashing projects them onto an axis.  Uniformity means the projection is evenly spread, preventing clustering.

**Non‑obvious insight**

The *worst‑case* load can be far larger than the expectation if the hash function is poorly chosen (e.g., linear congruential).  Even a deterministic hash that is “good” for one distribution may be terrible for another.  Therefore modern systems use **two‑choice hashing**: each key hashes to two buckets and goes to the less loaded one.  This simple tweak reduces maximum load from \(\Theta(\log n/\log\log n)\) to \(\Theta(\log\log n)\), a dramatic improvement that is not obvious until you analyze the underlying occupancy process.

In short, load balancing in hashing guarantees that no single server becomes a hotspot by ensuring that hash outputs are statistically uniform and, where possible, reinforced by adaptive choices.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
