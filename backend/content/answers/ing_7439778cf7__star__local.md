---
qid: ing_7439778cf7__star__local
question: 'Explain: Model Signing CLI — GitHub - sigstore/model-transparency: Supply
  chain security for ML \u00b7 GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 252
output_tokens: 339
total_tokens: 591
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:26:49-05:00'
sources: []
---

**Situation**  
During a production rollout of an image‑classification model at my previous company, we discovered that the deployment pipeline was vulnerable to tampering: anyone with access to the artifact store could swap in a malicious variant without detection.

**Task**  
I had to implement a secure model signing process so every model version could be cryptographically verified before it reached production, ensuring integrity and provenance across our CI/CD workflow.

**Action**  
I chose Sigstore’s `model-transparency` CLI because it integrates with GitHub Actions and supports the Open Neural Network Exchange (ONNX) format. First, I generated a key pair stored in HashiCorp Vault and configured the CLI to use this signing key via environment variables. In our GitHub workflow, after training, I added a step that invoked `model-sign` on the ONNX file, producing a `.sig` signature and an associated transparency log entry. The same workflow then ran `model-verify` during deployment; if verification failed, the job aborted. I also created a custom policy in OPA to restrict which teams could sign models, adding a fine‑grained RBAC layer.

**Result**  
The signing pipeline reduced model‑related incidents by 98 % over six months and cut manual audit time from two hours per release to under five minutes. It also gave us a verifiable chain of custody that satisfied our compliance auditors, and I learned how to embed supply‑chain security directly into ML workflows using open standards.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
