---
qid: ing_40afbedf06__think__local
question: You want to detect a 3-point improvement in pass rate. How many eval examples
  do you need, and how do you get that number down?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 208
output_tokens: 1030
total_tokens: 1238
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T02:57:41-05:00'
sources: []
---

**1️⃣ Clarify the goal & assumptions**  
- *What we’re measuring*: a 3‑point (Δ = 0.03) increase in a pass rate (proportion).  
- *Statistical framework*: two‑sample proportion test (or paired if you can reuse the same items).  
- *Typical parameters*: α = 0.05 (two‑sided), power ≈ 80 % (β = 0.20).  
- *Baseline pass rate*: let’s assume a realistic 80 % (you’ll plug in your own p₀).

**2️⃣ Mental model / formula**  
For equal‑size groups:  

\[
n = \frac{(Z_{α/2}+Z_β)^2\, [p_0(1-p_0)+p_1(1-p_1)]}{(p_1-p_0)^2}
\]

With p₁ = p₀+Δ.  
Approximate shortcut (when Δ is small):  

\[
n \approx \frac{(Z_{α/2}+Z_β)^2\, 2p(1-p)}{Δ^2}
\]

where *p* ≈ (p₀+p₁)/2.

**3️⃣ Step‑by‑step calculation**  
- Z-values: Zₐ/₂ ≈ 1.96, Z_β ≈ 0.84 → sum ≈ 2.80.  
- For p₀ = 0.80, p₁ = 0.83 → p ≈ 0.815 → 2p(1‑p) ≈ 0.312.  
- Δ² = 0.0009.  

\[
n \approx \frac{(2.80)^2 \times 0.312}{0.0009}
   = \frac{7.84 \times 0.312}{0.0009}
   ≈ \frac{2.45}{0.0009} ≈ 2722
\]

So about **2,700 examples per side** (≈ 5,400 total).  
If baseline is 50 %, n shoots up to ~4,300 per group.

**4️⃣ Common traps**  
- Mixing one‑sided vs two‑sided α.  
- Forgetting that Δ must be expressed in proportion units (0.03, not 3%).  
- Using the wrong variance term (p₀(1‑p₀) + p₁(1‑p₁)) vs the pooled estimate.  

**5️⃣ Sanity check & verbalizing**  
- Verify Δ² is tiny; a 3‑point shift needs many samples unless baseline is extreme.  
- Rough rule: for Δ = 0.03, n ≈ 4,000–5,000 per group if p≈0.5, fewer (~2,500) when p≈0.8.  
- If the number feels too high, consider: paired tests (re‑evaluate same items), higher α, or Bayesian sequential designs to cut the required size.  

---

**Bottom line:** you’ll need on the order of **4–6 k evaluation examples** for a 3‑point lift at 80 % power, but you can shave that number by using paired data, accepting a slightly lower power, or adopting adaptive/Bayesian approaches.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
