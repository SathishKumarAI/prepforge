---
qid: ing_9acd1d54f1__faang__local
question: 'Explain: Defense Pipeline — Llm Security'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 516
total_tokens: 746
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:44:17-05:00'
sources: []
---

**Defense Pipeline – LLm Security**

| Step | What it is | Why it matters |
|------|------------|----------------|
| **1️⃣ Threat Modeling** | Identify data‑leak vectors (prompt injection, token leakage) and adversary goals. | Prioritises mitigations where impact is highest. |
| **2️⃣ Data Sanitisation & Redaction** | Strip PII/controlled vocab from training corpora; enforce “no‑knowledge” policy for sensitive domains. | Prevents accidental memorisation of protected content. |
| **3️⃣ Model Hardening** |  • **Differential Privacy (DP)** noise during fine‑tuning.<br>• **Weight‑clipping / Regularisation** to limit over‑fitting. | Limits the model’s ability to regurgitate training data. |
| **4️⃣ Runtime Guardrails** | Prompt filtering, token‑level policy checks; enforce “no‑extraction” rule via a lightweight policy engine. | Stops malicious prompts from triggering leaks in production. |
| **5️⃣ Auditing & Monitoring** | Continuous output inspection with anomaly detectors and human review for flagged responses. | Enables rapid rollback if new leakage patterns emerge. |

### Core Detail
- **DP‑SGD**: Add Gaussian noise to gradients; tune ε so that the model’s privacy loss stays below a regulatory threshold (e.g., ε < 1).  
- **Prompt‑filter**: Regex + ML classifier trained on known injection templates; reject or sanitize before inference.  
- **Policy Engine**: Declarative rules (“no personal data, no copyrighted text”) evaluated per token, with back‑off to a safe default.

### Complexity & Trade‑offs
- DP adds ~10–15 % training time but yields provable privacy guarantees.  
- Runtime filters can introduce latency (~5 ms) but keep leakage risk negligible.  

### Edge Cases
- Adversaries craft *zero‑knowledge* prompts that bypass regex (e.g., encoded text). Mitigate by expanding the filter’s language model.  
- Over‑aggressive sanitisation may reduce utility; balance via A/B testing.

---

**Bottom line:** A defense pipeline is a layered, quantifiable strategy—starting with threat modeling, moving through data hygiene and DP hardening, and ending with runtime guardrails plus vigilant monitoring—to keep LLMs safe without crippling performance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
