---
qid: ing_eafd6decfc__faang__local
question: 'Explain: Indirect-prompt-injection defense at the read layer'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 428
total_tokens: 663
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:46:05-05:00'
sources: []
---

**Indirect‑Prompt‑Injection Defense (Read Layer)**  

| Step | What it is | Why it matters |
|------|------------|----------------|
| **Clarify** | We’re protecting a model that receives user text and then internally generates a *prompt* for a downstream LLM. “Indirect injection” means an attacker crafts the first input so that, after transformation, the hidden prompt contains malicious instructions (e.g., “delete data”). | Preventing this keeps downstream behavior honest without altering the core LLM. |
| **Approach** | 1️⃣ Validate and sanitize the *user payload* before it reaches the prompt‑builder. <br>2️⃣ Apply a whitelist of allowed tokens/phrases in the transformed prompt. <br>3️⃣ Use a deterministic, cryptographic hash (e.g., HMAC) to detect tampering between stages. |
| **Depth** | • Sanitize: strip control chars, limit length, escape special LLM syntax. <br>• Whitelist: maintain a curated set of domain‑specific tokens; reject anything outside it. <br>• Hash: compute `H = HMAC(secret, user_input)` in the read layer and verify after prompt generation. Complexity O(n) per request; space negligible. |
| **Edge Cases** | • Legitimate content that matches forbidden patterns (e.g., “please delete my account”). → Use contextual disambiguation or a second‑stage policy model. <br>• Unicode homographs that bypass simple filters – normalize to NFC and compare. |
| **Optimize & Communicate** | • Cache hash results for repeated inputs to reduce CPU. <br>• Log every rejection with user ID for auditability. When explaining, emphasize the *separation of concerns*: read layer cleans input; prompt‑builder stays pure; downstream LLM only sees vetted prompts. This layered defense keeps latency low (≈1 ms) while ensuring robustness against indirect injection attacks.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
