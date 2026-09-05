---
qid: ing_25038527f5__star__local
question: 'Q47: How do you defend against prompt injection attacks?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 359
total_tokens: 596
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:42:56-05:00'
sources: []
---

**Situation:**  
While leading the rollout of a customer‑support chatbot for our fintech client, we discovered that test users could manipulate the model’s responses by injecting malicious prompts into conversation logs, potentially exposing sensitive data.

**Task:**  
I had to design and implement a robust defense against prompt injection that preserved user experience while maintaining compliance with GDPR and internal security policies.

**Action:**  
1. **Input sanitization pipeline:** Built a regex‑based filter in Go to strip disallowed tokens (e.g., “/system”, “<|end_of_text|>”) before forwarding any text to the LLM.  
2. **Prompt template hardening:** Rewrote all templates using a strict “role: content” schema and introduced a deterministic system prompt that never changes, preventing user‑supplied tokens from being interpreted as commands.  
3. **Runtime monitoring:** Deployed an OpenTelemetry exporter that flags any request containing atypical token patterns; alerts are sent to the security ops dashboard.  
4. **Fine‑tuning with adversarial data:** Added a small corpus of known injection attempts to our fine‑tune set, retraining the model in PyTorch for 3 epochs (≈1 h) and evaluating on a custom test suite.

**Result:**  
After deployment, zero successful prompt injections were logged over three months, and latency increased by only 12 ms per request. The client’s compliance audit passed with no findings, and I documented the defense strategy in our internal playbook for future LLM projects.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
