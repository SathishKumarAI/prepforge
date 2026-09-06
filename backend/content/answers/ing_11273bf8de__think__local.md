---
qid: ing_11273bf8de__think__local
question: Explain self-attention. What's its computational complexity, and what are
  your options when contexts get long?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 198
output_tokens: 525
total_tokens: 723
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T03:50:33-05:00'
sources: []
---

**Metacognitive roadmap for answering “Explain self‑attention…”:**

1. **Clarify the scope and assumptions**  
   * Assume a standard transformer encoder layer (query, key, value matrices).  
   * Focus on the core self‑attention operation: \( \text{softmax}(QK^\top / \sqrt d)V \).  
   * Mention typical hyperparameters (sequence length \(L\), hidden dim \(d\)).  

2. **Adopt a layered mental model**  
   * Break it into three sub‑steps: (a) linear projections → \(Q,K,V\); (b) similarity scoring & softmax; (c) weighted sum to produce outputs.  
   * For each sub‑step note the matrix dimensions involved.

3. **Step‑by‑step reasoning**  
   * Compute complexity of each sub‑step:  
     - Projections: \(O(Ld^2)\).  
     - Scoring: \(QK^\top\) is an \(L\times L\) product → \(O(L^2 d)\).  
     - Softmax + multiplication by \(V\): also \(O(L^2 d)\).  
   * Sum to get overall \(O(L^2 d)\).  
   * Highlight that the quadratic term dominates as \(L\) grows.

4. **Identify pitfalls**  
   * Don’t forget the hidden‑dim factor in the quadratic part (some sources omit it).  
   * Avoid conflating “self‑attention” with multi‑head attention; explain how heads just split \(d\) but keep same asymptotics.  
   * Be wary of over‑simplifying the softmax step as linear.

5. **Sanity‑check & articulate**  
   * Verify numbers: for \(L=512, d=768\), the quadratic term is ~\(512^2\times768 ≈ 200\,M\) ops—plausible.  
   * Convey options for long contexts: sliding windows, local attention, sparse or linearized self‑attention (e.g., Performer, Linformer), hierarchical encoders, memory‑augmented tricks.  
   * End with a quick comparison of trade‑offs (speed vs. fidelity).  

Follow this structure and you’ll produce a clear, mathematically grounded answer that anticipates common misunderstandings.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
