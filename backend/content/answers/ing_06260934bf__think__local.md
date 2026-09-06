---
qid: ing_06260934bf__think__local
question: Compare Kaplan and Chinchilla scaling laws. What did Chinchilla change?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 194
output_tokens: 535
total_tokens: 729
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T03:08:13-05:00'
sources: []
---

**1️⃣ Clarify the ask & set assumptions**  
- The user wants a *comparison* of two papers on language‑model scaling: Kaplan et al. (2020) and Chinchilla (2022).  
- Assume they know basic terminology (parameters, compute, dataset size) but not the specific equations or why Chinchilla was needed.  
- Decide to focus on the key change: how the optimal compute–parameter trade‑off shifted.

**2️⃣ Choose a mental model**  
- Treat each paper as a *scaling law*: an empirical formula linking performance to two variables (model size S and training steps T, or equivalently dataset size D).  
- Visualise a 2‑D “performance surface” with axes S and D; the optimum is where the gradient points toward better accuracy.  

**3️⃣ Step‑by‑step reasoning**  
a. *Kaplan*:  
   - Derived \( \text{Perf} \sim S^{-\alpha}\,D^{\beta}\) (roughly \(S^{-0.075}\), \(D^{0.07}\)).  
   - Found the “sweet spot” where compute ≈ \(S \times D\).  
b. *Chinchilla*:  
   - Re‑evaluated with larger models and more data, discovered that the optimal ratio of parameters to tokens is lower than Kaplan’s.  
   - New optimum: \(D/S \approx 20{,}000\) tokens per parameter (vs Kaplan’s ~10 k).  
c. *What changed*: Chinchilla adjusted the compute‑budget allocation—more data per parameter and fewer parameters for the same compute.

**4️⃣ Common pitfalls to avoid**  
- Mixing up “tokens per parameter” with “parameters per token”.  
- Forgetting that Chinchilla’s law was derived from newer, larger models; it doesn’t invalidate Kaplan but refines it.  
- Over‑simplifying: both papers still assume a power‑law relationship, just with different exponents.

**5️⃣ Sanity‑check & verbalise**  
- Check dimensions: compute ≈ S×D should hold for both.  
- Rephrase: “Kaplan said double the parameters and halve the data gives the same compute; Chinchilla found you actually need *more* data per parameter to hit the optimum.”  
- Confirm that the key takeaway is the revised S:D ratio, not a wholesale replacement of Kaplan’s law.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
