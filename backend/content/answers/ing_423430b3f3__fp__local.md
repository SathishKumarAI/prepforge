---
qid: ing_423430b3f3__fp__local
question: 'Explain: You shipped an LLM feature - how did you evaluate it? Walk me
  through the actual eval setup.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 182
output_tokens: 481
total_tokens: 663
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T18:25:36-05:00'
sources: []
---

**Why we evaluate an LLM feature the way we do**

The *fundamental problem* is to guarantee that a new language‑model capability improves real‑world user outcomes without introducing regressions.  
We therefore treat evaluation as a **controlled experiment on the objective function** — user satisfaction, task success, or business KPIs.  

1. **Define the target distribution**  
   *Collect a representative sample of prompts* from production logs (filtered for privacy).  
   *Augment with synthetic edge‑cases* that stress the new feature.

2. **Set up an A/B test harness**  
   - Randomly route traffic to **variant A** (baseline) and **variant B** (feature).  
   - Use a stratified randomizer so each prompt class sees both variants equally.

3. **Measure outcomes with a composite metric**  
   *Primary*: weighted user‑feedback score (NPS + completion rate).  
   *Secondary*: latency, hallucination rate (calibrated via a small human‑labelled validation set), and cost per token.  

4. **Statistical rigor**  
   Apply a **Bayesian A/B test** with a prior derived from historical runs to compute the posterior probability that B > A.  Significance is declared when \(P(B>A) > 0.99\).  

5. **Error analysis loop**  
   *Trigger* an automated pipeline that clusters mis‑predicted prompts (via perplexity + LLM embeddings), flags them, and feeds back into the training set.

---

### Non‑obvious insight

Most teams stop at “higher accuracy”, but the *distribution shift between logged prompts and live traffic* is a silent source of bias. By continuously re‑sampling from production logs during evaluation (a form of online calibration) we keep the test distribution aligned with real usage, ensuring that gains are not merely artifacts of the held‑out dataset. This dynamic alignment turns evaluation into an *adaptive optimization loop* rather than a static benchmark.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
