---
qid: ing_69a543afb3__fp__local
question: The customer has no labelled data and no eval culture. How do you establish
  "is it working?" for the deployment?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 183
output_tokens: 415
total_tokens: 598
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T19:49:07-05:00'
sources: []
---

When you have no labels or a formal eval pipeline, the *only* thing that can tell you whether an AI system is doing what you want is **information about its internal consistency with the data it sees**.  
At first principles, every predictive model is an estimator of some underlying function \(f\) given samples \((x_i,y_i)\). Without \(y_i\), you cannot compute a direct loss, but you can still ask: *does the model’s output behave like a good approximation to \(f\) given what it knows?*  
1. **Self‑consistency checks** – For classification, run the model on a held‑out portion of the same input distribution and verify that its confidence scores are well calibrated (e.g., via temperature scaling). Poor calibration signals overconfident but unreliable predictions.  
2. **Latent‑space geometry** – Cluster the hidden representations; if they form tight, semantically coherent groups, the network has learned useful features even without labels.  
3. **Synthetic proxy tasks** – Generate a small set of synthetic inputs where you *can* compute the target (e.g., perturbations that preserve semantics). Use these to estimate error rates cheaply.  
4. **Human‑in‑the‑loop sanity checks** – Periodically ask domain experts to review a random sample of outputs; their feedback can be turned into weak labels for an online learning loop.

The non‑obvious insight: **distribution‑shift detection is often the first red flag in unlabeled deployments**. If the input distribution drifts, all the above sanity checks will suddenly fail, alerting you that the model’s implicit assumptions no longer hold—long before any explicit label arrives.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
