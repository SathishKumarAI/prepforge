---
qid: ing_da252f3fdf__think__local
question: 'Explain: Availability in Series vs Parallel — Availability | System Design'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 190
output_tokens: 516
total_tokens: 706
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T15:21:42-05:00'
sources: []
---

**1️⃣ Clarify the question & set assumptions**  
- *What is “availability” here?*  We’re talking about uptime probability (P=1‑MTTR/MTBF) for a system that can be built with either series or parallel components.  
- *Assume independent failures*, identical MTBFs, and no repair dependencies.  
- *Define the target*: compute overall availability for two configurations: all components in series vs at least one component in parallel.

**2️⃣ Mental model / framework**  
- Treat each component as a Bernoulli random variable (up/down).  
- Use reliability algebra:  
  - Series: \(R_{\text{series}} = \prod R_i\) → Availability is the product of individual availabilities.  
  - Parallel: \(R_{\text{parallel}} = 1-\prod(1-R_i)\) → One component suffices to keep the system up.  

**3️⃣ Step‑by‑step reasoning**  
- Let each component have availability \(A\).  
- **Series**: \(A_{\text{series}} = A^n\). With n=2, \(A_{\text{series}} = A^2\).  
- **Parallel**: \(A_{\text{parallel}} = 1-(1-A)^n\). With n=2, \(A_{\text{parallel}} = 1-(1-A)^2 = 2A - A^2\).  
- Compare numerically (e.g., A=0.99): series ≈ 0.9801; parallel ≈ 0.9999—clear advantage of redundancy.

**4️⃣ Common traps to avoid**  
- Mixing MTBF/MTTR with availability formulas.  
- Assuming failures are correlated when they’re not.  
- Forgetting that in parallel, *any* component failure is tolerated; only simultaneous failures kill the system.

**5️⃣ Sanity‑check & verbalize**  
- Verify edge cases: A=1 → both configurations give 1; A=0 → series gives 0, parallel also gives 0.  
- Explain that increasing n in parallel raises availability asymptotically toward 1, while in series it drops exponentially.  
- Summarize: “Series is a single point of failure—availability multiplies. Parallel adds redundancy—availability improves as \(1-(1-A)^n\).”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
