---
qid: vq_805df06273__faang__local
question: Could you provide an example of a root cause analysis?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 459
total_tokens: 692
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:19:23-05:00'
sources: []
---

**Root‑Cause Analysis (RCA) Example – “Model Accuracy Drops After Deployment”**

| **Step** | **What I’d do** |
|----------|----------------|
| **1️⃣ Clarify** | • Problem: Validation accuracy fell from 92 % to 78 % after the latest model was pushed. <br>• Assumptions to confirm: data distribution unchanged, no code drift, same evaluation metrics, and that the drop is reproducible across multiple runs. |
| **2️⃣ Approach** | 1. Re‑run validation on a fresh test set.<br>2. Compare feature distributions (mean, std) between training, validation, and post‑deployment data.<br>3. Check for code or pipeline changes (CI logs).<br>4. Inspect model weights/architecture for accidental modifications.<br>5. Run hypothesis tests to pinpoint the culprit. |
| **3️⃣ Depth** | • **Feature drift:** Compute Kolmogorov–Smirnov statistics; a KS > 0.2 on 7 features indicates shift. <br>• **Label noise:** Re‑label a random 1% sample manually—error rate jumps from 1 % to 4 %. <br>• Complexity: O(n·d) for distribution checks, negligible overhead. |
| **4️⃣ Edge Cases** | • Small test set → high variance in accuracy.<br>• Rare class imbalance could mask drift.<br>• Deployment of a different model version (branch mismatch). |
| **5️⃣ Optimize & Communicate** | • Automate drift alerts using an A/B testing framework. <br>• Document root cause and mitigation: retrain with updated data, add feature‑level monitoring. <br>• Present findings to ops and ML Ops teams in a concise 10‑slide deck, highlighting timeline, impact, and next steps. |

**Takeaway:** Systematic RCA—data checks → code audit → hypothesis testing—quickly isolates the issue (label noise + feature drift) and guides corrective action while keeping stakeholders informed.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
