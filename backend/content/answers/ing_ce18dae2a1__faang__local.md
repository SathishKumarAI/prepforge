---
qid: ing_ce18dae2a1__faang__local
question: 'Explain: Q119: A popular coding CLI was caught silently uploading entire
  repositories, secrets included, while its privacy toggle did nothing. Design telemetry
  for your own coding agent so this class of failure is impossible.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 263
output_tokens: 435
total_tokens: 698
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:39:51-05:00'
sources: []
---

**Clarify**  
We need a telemetry design that guarantees *no* accidental upload of private code or secrets from our CLI agent, even if the user toggles “privacy” off. Assume: (1) repositories can be large; (2) users may have local‑only files; (3) we must still allow optional intentional uploads for collaboration.

**Approach**  
1. **Immutable upload manifest** – every upload request must include a signed hash of the exact file list and contents.  
2. **Privacy flag enforcement** – the CLI will refuse to generate a manifest unless the user explicitly opts in via a two‑step confirmation.  
3. **Local sandboxing** – before any network call, run a static analysis pass that flags secrets (env vars, keys) and rejects the upload if any are detected.  
4. **Audit log** – all decisions (allow/deny, manifest hash, user confirmation timestamp) are written to an append‑only local ledger that can be replayed.

**Depth**  
- Manifest generation: compute SHA‑256 over sorted file paths + content; sign with a per‑user private key.  
- Validation server verifies signature and stores the manifest as the only authorized upload record.  
- Complexity: O(n) time to hash files, O(1) network overhead for the signed payload.  
- Trade‑off: extra CPU for hashing is negligible compared to typical CI runs.

**Edge Cases**  
- Binary blobs or large files → stream hashing to avoid memory blowup.  
- Files added after manifest creation → blocked until a new manifest is approved.  
- Users who forget their private key → fall back to a recovery flow that requires 2FA.

**Optimize & Communicate**  
Explain that the design turns *any* upload into an explicit, cryptographically verifiable action. By coupling a signed manifest with a sandboxed secret scan and immutable audit logs, we eliminate silent leaks. This approach scales linearly, is audit‑ready, and satisfies security auditors while keeping user experience minimal.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
