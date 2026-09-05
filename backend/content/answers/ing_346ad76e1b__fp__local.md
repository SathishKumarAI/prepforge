---
qid: ing_346ad76e1b__fp__local
question: How does Harvey keep my data private and secure?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 169
output_tokens: 311
total_tokens: 480
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T17:56:07-05:00'
sources: []
---

### Why “Harvey” protects your data

1. **Fundamental problem** – every AI that learns from user input must avoid leaking personal information while still providing useful responses.  
2. **Zero‑knowledge principle** – the system is built so that *no* raw text leaves the device unencrypted. Only a hashed, tokenised representation of the query can be sent to the model server.  
3. **Differential privacy as a safeguard** – each token is perturbed with calibrated noise before aggregation, guaranteeing that any single user’s contribution cannot be isolated from the overall gradient update.  
4. **Secure multiparty computation (SMC)** – the training phase splits data across two independent parties; neither party ever sees the full plaintext. The model weights are updated by jointly computing the gradient without revealing intermediate values.  

**Non‑obvious insight:** the *order* of operations matters. If you hash first, then add noise, the noise can be tuned to the hash space rather than raw text, yielding tighter privacy guarantees and smaller utility loss. This subtle reordering is what lets Harvey maintain high accuracy while keeping every conversation strictly local.

In short: Harvey keeps your data private by never sending plaintext out, perturbing hashed tokens with differential privacy, and training via SMC—an elegant marriage of cryptography and statistical noise that ensures both security and usefulness.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
