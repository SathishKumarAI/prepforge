---
qid: ing_3a0a205793__faang__local
question: 'Explain: Data Desensitization — How do we manage sensitive data in a system?'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 459
total_tokens: 700
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:59:21-05:00'
sources: []
---

**Clarify**  
We’re asked how to *desensitize* or protect sensitive data (PII, PHI, financial records) while still enabling analytics and ML. Key assumptions: the system processes raw data streams, stores them in a database, and runs batch/model training jobs; we must comply with GDPR/CCPA and internal security policies.

**Approach**  
1. Identify data classes and sensitivity level.  
2. Apply *data masking* (redaction or tokenization) for real‑time consumption.  
3. Store an encrypted master copy using field‑level encryption or HSMs.  
4. For ML, create a *synthetic dataset* via differential privacy or homomorphic encryption.  
5. Use role‑based access control and audit logs.

**Depth**  
- **Masking/Tokenization**: Replace values on the fly (e.g., credit card → `xxxx-xxxx-xxxx-1234`). Complexity O(n) per record, negligible overhead.  
- **Encryption**: AES‑256 GCM at field level; key rotation via AWS KMS or Azure Key Vault. Decryption only in memory during training.  
- **Differential Privacy (DP)**: Add Laplace/Gaussian noise to query results with ε≈1–2 for high privacy, still useful for ML. DP guarantees formal privacy loss bounds.  
- **Synthetic Data**: Use generative models (GANs) trained on masked data; preserve statistical properties without exposing raw values.

**Edge Cases**  
- *Zero‑touch pipelines* may inadvertently leak data; enforce strict IAM policies.  
- *Model inversion attacks*: guard by limiting model outputs and applying DP.  
- *Performance hit*: encryption/decryption adds CPU load; mitigate with GPU‑accelerated crypto libraries.

**Optimize & Communicate**  
Explain trade‑offs: higher ε → better utility but lower privacy; tokenization vs full encryption depends on downstream use. Show a diagram of data flow (raw → mask/encrypt → synthetic/DP → model). Emphasize continuous monitoring, key lifecycle management, and compliance reporting as part of the solution.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
