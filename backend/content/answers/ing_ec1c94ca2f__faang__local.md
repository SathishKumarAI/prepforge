---
qid: ing_ec1c94ca2f__faang__local
question: 'Q: How do you prevent memory poisoning when agents can write to their own
  long-term store?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 511
total_tokens: 752
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:49:43-05:00'
sources: []
---

**Clarify**  
You’re asking how to guard against *memory‑poisoning*—where an AI agent writes malicious or corrupted data into its persistent memory so future queries are tainted. I’ll assume: (1) agents have write access to a shared key/value store, (2) the store is used for both facts and user context, and (3) we want to preserve performance while preventing tampering.

**Approach**  
1. **Write‑once or append‑only logs** per agent.  
2. **Cryptographic integrity checks** on each entry.  
3. **Access control + validation layers** before writes are committed.  
4. **Periodic audits and sandboxed replay** of the memory contents.

**Depth**  
- *Append‑only*: Each write creates a new immutable record; old records remain untouched, so corruption can be detected by diffs.  
- *Cryptographic hashes* (e.g., SHA‑256) chained like a blockchain: every entry’s hash includes the previous hash and the payload. Any tampering breaks the chain. Store only the hash of each record in a separate “ledger” that is write‑protected.  
- *Validation layer*: A lightweight policy engine checks payload schema, length limits, and semantic sanity (e.g., no SQL injection patterns). Rejections are logged but not persisted.  
- *Audits*: Periodically run a deterministic replay of the agent’s memory in an isolated environment to verify that all derived knowledge can be regenerated from the raw logs. Any divergence flags poisoning.

**Edge Cases**  
- *Denial‑of‑service* via huge append streams—throttle writes per agent.  
- *Replay attacks*: Replay old entries; mitigated by timestamps and monotonic counters in the hash chain.  
- *False positives*: Legitimate content flagged as malicious; mitigate with a whitelist of trusted patterns.

**Optimize & Communicate**  
To keep latency low, use in‑memory caching of recent hashes and batch write commits to disk. Explain that while this adds ~10 % overhead, it gives us tamper‑evidence comparable to blockchain integrity without the heavy consensus. Highlight trade‑offs: append‑only increases storage but simplifies audit; cryptographic chains ensure linear provenance. This structure shows clear problem understanding, a defensible engineering plan, and awareness of edge cases—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
