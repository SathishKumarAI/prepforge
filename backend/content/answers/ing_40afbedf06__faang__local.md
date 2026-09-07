---
qid: ing_40afbedf06__faang__local
question: You want to detect a 3-point improvement in pass rate. How many eval examples
  do you need, and how do you get that number down?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 252
output_tokens: 983
total_tokens: 1235
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:14:38-05:00'
sources: []
---

**Clarify**  
You want to know how many evaluation examples are needed to *statistically* detect a 3‑point increase in the pass rate of an AI model (e.g., from p₁ to p₂ = p₁+0.03). We’ll assume a two–sided hypothesis test, α = 0.05 and power = 80 % (β = 0.20). I’ll ask: *What is the baseline pass rate?* If we don’t know it, we’ll use the worst‑case variance.

**Approach**  
1. Use a two–proportion z‑test formula for sample size per group.  
2. Plug in p₁ = p₂ − 0.03; if unknown, set p ≈ 0.5 to maximize variance.  
3. Compute the total n = 2·n_per_group.  
4. Reduce n by: (a) tightening α or β (not recommended), (b) leveraging prior knowledge via Bayesian or hierarchical models, (c) using sequential/A/B testing with early stopping, and (d) stratifying data to reduce variance.

**Depth**  
The standard formula:

\[
n_{\text{per}}=\frac{(Z_{1-\alpha/2}+Z_{1-\beta})^2\,[p_1(1-p_1)+p_2(1-p_2)]}{(p_2-p_1)^2}
\]

With α = 0.05 → Z≈1.96, β = 0.20 → Z≈0.84; Δ = 0.03.

Worst‑case (p₁=p₂=0.5):

\[
n_{\text{per}}=\frac{(2.8)^2[0.25+0.25]}{0.0009}\approx 4356
\]

Total ≈ 8,700 evaluation examples.

If baseline is higher (e.g., p₁=0.80), variance shrinks:  
p(1‑p)=0.16 → n_per≈2775, total≈5550.

**Edge Cases**  
- Extremely low or high pass rates (<0.05 or >0.95) change variance dramatically; use exact binomial tests instead of normal approximation.  
- Correlated examples (e.g., same prompt reused) inflate effective sample size—need to de‑duplicate or model dependencies.  
- Non‑binary outcomes (confidence scores) require different metrics and power calculations.

**Optimize & Communicate**  
1. **Bayesian A/B**: Incorporate prior beliefs about the pass rate; posterior predictive checks often need fewer samples.  
2. **Sequential Testing**: Monitor cumulative difference and stop when crossing a pre‑defined boundary (e.g., O’Brien–Fleming).  
3. **Stratification**: Group examples by difficulty; test within strata to reduce noise, then aggregate via meta‑analysis.  
4. **Pilot Runs**: Run a small subset (≈ 1 % of target) to estimate variance more accurately before committing full budget.

By explaining the derivation, acknowledging assumptions, and outlining practical reductions, we demonstrate structured problem solving that top FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
