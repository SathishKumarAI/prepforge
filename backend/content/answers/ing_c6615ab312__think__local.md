---
qid: ing_c6615ab312__think__local
question: 'Explain: Q: Explain why transformer attention is O(n²) and what alternatives
  exist.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 196
output_tokens: 480
total_tokens: 676
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T14:03:28-05:00'
sources: []
---

**1. Clarify the question & state assumptions**  
   - Identify that “transformer attention” refers to self‑attention in a vanilla transformer layer (scaled dot‑product).  
   - Assume we are comparing computational cost relative to sequence length *n*, with hidden dimension *d* fixed, and ignoring constant factors like batch size.  

**2. Choose a mental model / framework**  
   - Think of attention as a matrix multiplication: compute all pairwise dot products between query (Q) and key (K) vectors → an *n × n* score matrix.  
   - Then apply softmax and multiply by value (V), again involving an *n × n* weight.  

**3. Reason step‑by‑step toward the answer**  
   - Enumerate operations:  
     1. Q, K, V projection → O(n d).  
     2. Compute Q·Kᵀ → each of the n² entries requires d multiplications → O(n² d).  
     3. Softmax over rows (O(n²)).  
     4. Weighted sum with V → another O(n² d).  
   - Summarize that the dominant term is the *n² d* cost from the pairwise interactions, hence overall complexity is O(n²).  

**4. Common traps to avoid**  
   - Forgetting that softmax itself is linear in n², not negligible.  
   - Confusing “O(n)” for per‑token operations with the total over all tokens.  
   - Ignoring memory bandwidth: storing an *n × n* score matrix can be prohibitive even if compute is fine.  

**5. Sanity‑check & verbalize**  
   - Verify by plugging in numbers (e.g., n=512, d=64) and comparing to a linear layer’s cost.  
   - Explain that alternatives like sparse attention, kernel‑based approximations, or recurrence reduce the quadratic term, often trading off exactness for efficiency.  

This structured reasoning can be reused whenever you need to explain algorithmic complexity or evaluate model trade‑offs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
