---
qid: ing_500437ceac__faang__local
question: Your prompt change gained 3 points on the eval. How confident are you that
  it is real?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 457
total_tokens: 699
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:50:28-05:00'
sources: []
---

**Clarify**  
The question asks whether a 3‑point increase in an AI evaluation metric after a prompt change reflects genuine improvement or could be due to noise or overfitting. Key assumptions: (1) the same test set was used pre‑ and post‑change; (2) the evaluation is deterministic; (3) we have access to statistical variance of the score.

**Approach**  
1. Collect multiple runs of each prompt on identical data to estimate mean & variance.  
2. Perform a paired hypothesis test (e.g., Wilcoxon signed‑rank or t‑test if normality holds).  
3. Compute confidence interval for the difference.  
4. If possible, run a hold‑out set to check generalization.

**Depth**  
- **Data collection:** Execute each prompt 10 times; record scores \(S_{pre}\) and \(S_{post}\).  
- **Statistical test:**  
  \[
  H_0: \mu_{\Delta}=0,\quad H_a: \mu_{\Delta}>0
  \]
  where \(\Delta = S_{post}-S_{pre}\).  
  Calculate the p‑value; if \(p<0.05\), reject \(H_0\).  
- **Effect size:** Cohen’s d to gauge practical significance.  
Complexity is O(n) for n runs, negligible overhead.

**Edge Cases**  
- Non‑independent evaluations (e.g., caching) could inflate confidence.  
- Small sample size may lead to Type I errors.  
- If the test set contains bias that favors the new prompt, results won’t generalize.

**Optimize & Communicate**  
Explain that a 3‑point lift is modest; statistical validation ensures it isn’t random drift. Present the p‑value and confidence interval succinctly: “The mean improvement is 3 points with a 95% CI of [1.2, 4.8], p=0.003.” This shows both significance and magnitude, satisfying interviewers’ focus on rigor and clear communication.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
