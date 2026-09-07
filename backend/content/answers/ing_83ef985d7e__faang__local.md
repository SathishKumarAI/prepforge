---
qid: ing_83ef985d7e__faang__local
question: 'Explain: The PM wants AI summaries of the user''s private messages. Design
  it privacy-first.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 460
total_tokens: 700
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:51:31-05:00'
sources: []
---

**Clarify**  
The goal: provide an AI‑generated summary of a user’s private text (e.g., chat logs) while ensuring the data never leaves the device or is exposed to third parties. Key assumptions: *the user authorizes on‑device summarization*, *messages are stored encrypted at rest*, and *no network connectivity for model inference* unless explicitly granted.

**Approach**  
1. **On‑Device Inference** – ship a lightweight, quantized transformer (e.g., DistilBERT + summarizer head) bundled with the app.  
2. **Secure Enclave / Trusted Execution** – run the model inside a hardware‑protected enclave so that plaintext messages are never exposed to OS processes.  
3. **Data Flow Control** – use a “data‑in, data‑out” pipeline: decrypt only in memory, feed to the model, immediately re‑encrypt or discard raw text after summarization.  

**Depth**  
- *Model*: 12 M parameters, ≤50 MB; inference latency ~200 ms on modern smartphones.  
- *Encryption*: AES‑256 GCM for storage; decryption key derived from user passcode via PBKDF2.  
- *Audit*: log only metadata (timestamp, summary length) in a tamper‑evident ledger; never store the summary itself beyond immediate display unless the user opts to save it locally.

**Edge Cases**  
- Extremely large message threads → chunking with overlap and hierarchical summarization.  
- Offline mode → fallback to rule‑based short‑summary if model unavailable.  
- Malformed or malicious input → sandboxed execution prevents memory corruption.

**Optimize & Communicate**  
Future iterations could employ *Federated Learning* for continuous improvement without sending raw data, and *Differential Privacy* noise on summary generation to guard against inference attacks. I’d explain this pipeline in a diagram during the interview, emphasizing that every step is isolated from external access, satisfying both privacy regulations (GDPR, CCPA) and user trust.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
