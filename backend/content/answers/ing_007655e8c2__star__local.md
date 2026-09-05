---
qid: ing_007655e8c2__star__local
question: 'Explain: Signing with PKCS #11 URIs — GitHub - sigstore/model-transparency:
  Supply chain security for ML \u00b7 GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 257
output_tokens: 424
total_tokens: 681
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:29:31-05:00'
sources: []
---

**Situation**  
While leading the model‑release pipeline at a fintech startup, we discovered that our continuous‑integration (CI) server was generating signatures with a local software key store. In a recent audit, auditors flagged this as a weak point because any compromise of the CI host could invalidate all signed artifacts.

**Task**  
I had to migrate the signing process to use a hardware security module (HSM) via PKCS #11 URIs, ensuring that private keys never left the secure enclave while keeping our GitHub Actions workflow unchanged.

**Action**  
First, I added the AWS CloudHSM client SDK and configured it to expose a PKCS #11 library. In the `.github/workflows/release.yml` we replaced the `openssl dgst -sign` step with `pkcs11-tool --module /usr/lib64/opensc-pkcs11.so --login --pin $PIN --key-id 0x01 --signature-file sig.bin`. The URI syntax (`pkcs11:token=MYHSM;id=01`) was passed as an environment variable, allowing the HSM to perform the RSA‑2048 signature. I also updated our `sigstore` verification step to resolve the same URI during runtime, ensuring end‑to‑end validation. Finally, I added a test matrix that ran the signing locally against a soft token to confirm parity before deploying.

**Result**  
The migration cut the risk surface by 100 %—private keys never touched disk—and reduced signature generation time from ~250 ms to ~180 ms due to HSM acceleration. The audit passed with no findings, and we added an alerting rule that triggers if a signing operation fails, giving us real‑time visibility into HSM health. I learned how PKCS #11 URIs can be seamlessly integrated into CI/CD pipelines without breaking existing tooling.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
