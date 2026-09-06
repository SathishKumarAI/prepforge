---
qid: ing_94c77dda9f__fp__local
question: 'Explain: Tier 3 - frontier model / human review — Content Moderation Pipeline'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 175
output_tokens: 470
total_tokens: 645
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:21:36-05:00'
sources: []
---

**Tier 3 – Frontier Model + Human Review in a Content‑Moderation Pipeline**

The core problem is to decide, *in real time*, whether user‑generated content violates policy while keeping false positives low enough that users are not unduly censored. This is an **optimization over two competing objectives**: minimize the expected loss from *missed violations* (type I error) and from *over‑censoring* (type II error).  
A frontier model—usually a large transformer fine‑tuned on policy labels—provides a high‑capacity classifier that captures nuanced language. However, because policies are fluid, the model’s **confidence calibration** is imperfect: it may be overconfident on novel or adversarial inputs. Therefore we treat the model’s posterior probability \(p(y|x)\) as an *uncertainty* signal rather than a final verdict.

1. **Uncertainty‑driven triage**:  
   - If \(\max(p) > \tau_{\text{safe}}\), auto‑approve or auto‑reject.  
   - If \(\min(p) < \tau_{\text{unsafe}}\), auto‑reject.  
   - Otherwise, flag for human review.

2. **Human‑in‑the‑loop cost–benefit**: The expected benefit of a human decision is proportional to the *entropy* \(H(p)\). High entropy means the model is unsure; the marginal utility of a human override outweighs the cost of delay.  
3. **Feedback loop**: Human labels are fed back into an online learning system that continuously updates the frontier model, shrinking the uncertain region.

**Non‑obvious insight:** Calibration errors correlate strongly with *policy drift*. A sudden increase in miscalibrated predictions is a better early warning for policy changes than raw accuracy metrics. Monitoring calibration over time thus lets the moderation team preemptively adjust thresholds or retrain before violations slip through.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
