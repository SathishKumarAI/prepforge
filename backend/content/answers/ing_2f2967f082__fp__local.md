---
qid: ing_2f2967f082__fp__local
question: 'Explain: Design the eval harness for an LLM feature we''re shipping - treat
  it like you''d design a test framework.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 182
output_tokens: 688
total_tokens: 870
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T17:45:17-05:00'
sources: []
---

**From the problem to the solution**

A new LLM feature is a *black‑box transformation* that must satisfy two hard constraints:  
1) **Correctness** – it produces outputs that meet user‑specified semantics (e.g., no hallucination).  
2) **Robustness** – its behavior remains stable under distribution shift, adversarial prompts, and runtime noise.  

These are optimization goals in a high‑dimensional space of prompts → logits → tokens. To evaluate them we must *sample* this space efficiently, *measure* outcomes with a mathematically grounded metric, and *iterate* quickly.

---

### 1. Define the objective function  
Let \(f_\theta(p)\) be the LLM’s response to prompt \(p\).  
- **Accuracy**: \(\text{Acc}(p)=\mathbf{1}\{\text{semantic match}(f_\theta(p),y_p)\}\).  
- **Robustness**: \(\text{Rob}(p,\delta)=\min_{\|\Delta p\|<\epsilon}\text{Acc}(p+\Delta p)\).  

The harness optimizes the joint loss \(L = -\lambda\,\mathbb{E}_p[\text{Acc}]+(1-\lambda)\,\mathbb{E}_p[1-\text{Rob}]\).

---

### 2. Construct a *canonical prompt set*  
- **Ground‑truth corpus**: curated, diverse, and labeled with gold outputs.  
- **Adversarial augmentations**: perturb prompts via paraphrasing, typos, or semantic drift to probe edge cases.  
- **Distribution shift samples**: domain‑specific jargon, rare entities, and low‑resource languages.

Sampling from this set ensures coverage of the *support* of real‑world usage while focusing on high‑entropy regions where models typically fail.

---

### 3. Metrics & statistical guarantees  
- **Confidence intervals** via bootstrapping guarantee that a reported \(95\%\) accuracy is not an artifact of sampling variance.  
- **Bayesian calibration curves** reveal overconfidence in uncertain regimes, guiding temperature or top‑k adjustments.  

These metrics are *statistically valid* (unbiased estimators) and directly comparable across feature releases.

---

### 4. Automation & feedback loop  
A CI pipeline runs the harness on every commit, producing a *feature‑impact score*. If the score falls below a threshold, the build fails; otherwise a lightweight “sanity check” is issued to developers. Continuous monitoring of live traffic feeds real‑world data back into the prompt set, closing the loop.

---

**Non‑obvious insight:**  
Because LLMs are *deterministic* given a seed but highly sensitive to *prompt phrasing*, the harness must treat prompts as *random variables*. By explicitly modeling prompt perturbations (the \(\Delta p\) term), we convert robustness into an *adversarial risk* problem, allowing us to apply proven bounds from robust optimization rather than relying on ad‑hoc stress tests. This principled view unifies accuracy and robustness under a single theoretical umbrella, enabling tighter guarantees as the feature matures.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
