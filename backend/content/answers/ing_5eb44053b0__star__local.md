---
qid: ing_5eb44053b0__star__local
question: 'Explain: 🔒 Security & Privacy — GitHub - langfuse/langfuse: \ud83e\udea2
  Open source AI engineering platform: LLM evals, observability, metrics, prompt management,
  playground, datasets. Integrates with OpenTelemetry, LangChain, OpenAI SDK, LiteLLM,
  and more. \ud83c\udf4aYC W23 \u00b7 GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 313
output_tokens: 380
total_tokens: 693
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:37:26-05:00'
sources: []
---

**Situation:**  
When my team started using the Langfuse open‑source AI platform to evaluate our LLM models in production, we discovered that sensitive customer prompts were being stored in plain text within the repository’s PostgreSQL database and logged in the playground UI. The compliance officer flagged this as a major privacy risk.

**Task:**  
I needed to harden Langfuse so that all prompt data was encrypted at rest, access was strictly controlled, and audit trails met GDPR and SOC 2 requirements—all while keeping the platform usable for developers.

**Action:**  
1. Added a `prompt_encryption_key` environment variable and patched the prompt‑ingestion module to AES‑256 encrypt payloads before persisting them.  
2. Integrated OpenTelemetry tracing with custom span attributes that flag any prompt containing PII, sending alerts to our Ops Slack channel.  
3. Implemented role‑based access in the UI using JWT scopes; only users with `prompt_viewer` could decrypt data via a secure decryption endpoint.  
4. Configured PostgreSQL’s `pgcrypto` extension for column encryption and set up automated nightly key rotation scripts.

**Result:**  
Within two weeks, all prompts were encrypted at rest, and the platform now logs every read/write operation with user IDs and timestamps—compliant with GDPR and SOC 2. We passed the quarterly audit with no findings, and developer productivity only dropped 3% because encryption/decryption happened transparently in the background. This exercise taught me that security can be built into open‑source tooling without sacrificing usability.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
