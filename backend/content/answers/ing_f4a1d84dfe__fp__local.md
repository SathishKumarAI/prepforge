---
qid: ing_f4a1d84dfe__fp__local
question: 'Explain: How we hire — Careers \\ Anthropic'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 170
output_tokens: 486
total_tokens: 656
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T00:39:38-05:00'
sources: []
---

**Hiring at Anthropic – a principled design**

The core problem: *find people who can safely build large‑scale language models*.  
We must **maximise future performance** while keeping the risk of misuse low.

1. **Skill set → Expected contribution**  
   We start with an objective function \(f(s)=\alpha\,P_{\text{model}}(s)-\beta\,R_{\text{misuse}}(s)\).  
   Here \(s\) denotes a candidate’s skill vector (research, software, ethics), \(\alpha,\beta>0\).  
   The hiring pipeline is engineered to estimate \(f(s)\) accurately.

2. **Structured interview → Bayesian update**  
   Each interview stage supplies evidence \(e_i\) about \(s\).  
   We treat \(P(s|E)=\frac{P(E|s)P_0(s)}{\sum P(E|s')P_0(s')}\), where \(E=\{e_1,\dots,e_n\}\).  
   The “structured” format ensures the likelihood \(P(E|s)\) is well‑defined, allowing a principled update.

3. **Calibration test → Risk weighting**  
   Candidates solve real‑world safety problems. Their solutions are scored against a calibrated rubric that approximates \(\beta R_{\text{misuse}}(s)\).  
   This explicit weighting keeps the risk term in \(f(s)\) from being ignored.

4. **Decision rule → Expected utility threshold**  
   We accept if \(E[f(s)|E] > T\), where \(T\) is set so that the expected *value* of a hire outweighs the *cost* of a misstep.  
   This turns hiring into an optimization problem rather than intuition.

**Non‑obvious insight:**  
The calibration test is not merely a screening tool; it **acts as a prior update on \(\beta\)**, empirically estimating how much risk each skill level contributes. By treating risk as a learnable parameter rather than a fixed penalty, Anthropic dynamically adjusts hiring thresholds in response to evolving safety knowledge.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
