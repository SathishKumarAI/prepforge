---
qid: ing_bd586d35fc__fp__local
question: 'Explain: Add a URL — Bloom Filters | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 171
output_tokens: 600
total_tokens: 771
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:46:04-05:00'
sources: []
---

**Bloom filters** answer the *probabilistic membership query* problem:  
Given an enormous set \(S\) (e.g., all URLs visited by a CDN), we want to test if a new item \(x\) belongs to \(S\) using **minimal memory** and **constant‑time queries**.  

The solution starts from the observation that exact membership requires storing every element or building an index, both linear in \(|S|\). Instead, we tolerate *false positives* but forbid false negatives.  

1. **Hashing into a bit array**:  
   Allocate \(m\) bits all set to 0. Choose \(k\) independent hash functions \(h_1,\dots,h_k:\text{item}\rightarrow[0,m-1]\).  
2. **Insertion**: For each element \(x\in S\), set bit \(B[h_i(x)] = 1\) for all \(i\).  
3. **Query**: Return *“present”* iff all bits at positions \(h_i(y)\) are 1.

Why this works: Each hash distributes an item uniformly over the array, so after inserting \(|S|\) items the probability a particular bit remains 0 is  
\(p = (1-1/m)^{k|S|}\approx e^{-k|S|/m}\).  
Thus the false‑positive rate for a new element is  
\(\Pr[\text{all } k \text{ bits are 1}] = (1-p)^k \approx (1-e^{-k|S|/m})^k.\)  

Optimizing \(k\) gives \(k^\*=\frac{m}{|S|}\ln2\), yielding a minimal error of \((0.5)^{k^\*}\).  
This derivation links Bloom filters to **information theory**: we compress membership information into \(m\) bits while preserving a bounded entropy.

**Non‑obvious insight**:  
The array’s *effective capacity* is not simply \(m/k\); it grows exponentially with the ratio \(m/|S|\). By choosing \(k\) close to \(\ln2\, m/|S|\), we achieve the smallest possible false‑positive probability for a fixed memory budget, making Bloom filters optimal among all *fixed‑size* probabilistic data structures.  

**Use in ML system design**:  
- **Feature hashing**: Quickly test if a token has appeared before.  
- **Negative sampling**: Efficiently filter out already seen negative examples.  
- **Cache eviction**: Identify likely cache misses with negligible overhead.

---  
**Reference**: <https://en.wikipedia.org/wiki/Bloom_filter>

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
