---
qid: ing_61110f3f24__fp__local
question: What is training data memorisation and extraction, and why does it matter
  for a deployed product?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 178
output_tokens: 401
total_tokens: 579
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T19:31:43-05:00'
sources: []
---

### Why a model’s “memory” matters

When we train an AI, the objective is to *generalise*—to map inputs \(x\) to outputs \(y\) that would hold for any unseen data drawn from the same distribution \(\mathcal{D}\).  
The optimisation problem is  

\[
\min_{\theta} \; \mathbb{E}_{(x,y)\sim\mathcal{D}}\!\left[ L(f_\theta(x), y) \right].
\]

If a model’s capacity exceeds the intrinsic complexity of \(\mathcal{D}\), the optimiser can reduce loss by fitting *every* training example exactly. This is **memorisation**: the parameters encode discrete samples rather than a smooth decision surface.

### Extraction

Once memorised, those exact samples become recoverable through targeted queries. For instance, an adversary could send a prompt that triggers the model to regurgitate a specific phrase or user data that happened to appear in training. This is **extraction**—the reverse of generalisation: retrieving stored information.

### Why it matters for deployment

1. **Privacy leakage**: If training data includes personal records, extraction exposes them, violating regulations (GDPR, CCPA).  
2. **Intellectual‑property risk**: Proprietary code or copyrighted text can be illicitly reproduced.  
3. **Security vulnerability**: Attackers can inject malicious patterns that later surface as outputs.  

Thus, memorisation violates the *information‑theoretic* goal of a model: to encode only the *distribution*, not the dataset itself. Techniques like differential privacy or regularised training aim to keep the mutual information \(I(\theta; \mathcal{D})\) low, ensuring that deployment preserves both user trust and legal compliance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
