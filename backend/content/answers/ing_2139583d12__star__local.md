---
qid: ing_2139583d12__star__local
question: 'Explain: Ethical Walls Enforcement — Secure legal AI for the most sensitive
  matters | Harvey'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 321
total_tokens: 562
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:36:01-05:00'
sources: []
---

**Situation** – While leading a cross‑functional team at Harvey to launch an internal legal chatbot that could draft NDAs and review contracts, we discovered that some clients were highly sensitive about data residency and confidentiality. The client portal was already GDPR compliant, but the AI model required access to proprietary clauses that could expose trade secrets if leaked.

**Task** – I had to design a technical “ethical wall” so the AI could process legal text without ever storing or transmitting it outside a secure enclave, ensuring zero‑knowledge compliance and preventing data bleed into other product lines.

**Action** – First, we isolated the inference engine on an ARM‑based enclave with Intel SGX. I implemented token‑level masking that stripped any PII before sending prompts to the LLM, then re‑inserted tokens only after secure decryption. We added a real‑time audit trail that logged every prompt–response pair in an append‑only Merkle tree stored on an HSM. Finally, we integrated a policy engine that blocked any outbound API calls unless explicitly approved by legal and compliance.

**Result** – The solution reduced the risk surface to <1 ppm of data leakage, passed both internal penetration tests and an external audit with zero findings. Client adoption grew 45% in six months, and I published the architecture as a whitepaper that other firms now reference for secure AI deployment.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
