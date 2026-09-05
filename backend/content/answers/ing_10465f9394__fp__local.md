---
qid: ing_10465f9394__fp__local
question: 'Explain: HMACs and Digital Signatures — Checksums | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 175
output_tokens: 610
total_tokens: 785
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:40:06-05:00'
sources: []
---

**Why we need a checksum in the first place**

When data travels over an unreliable channel (the Internet, disk, or memory), two fundamental threats exist:

1. **Integrity loss** – random corruption of bits.
2. **Impersonation** – a malicious actor forges or tampers with the payload.

A *checksum* is simply a deterministic function that maps any message \(M\) to a small tag \(t\). The receiver recomputes \(t'\) and compares it to the received tag; if they differ, corruption is detected.  
Formally, we need a hash \(h\) such that for all distinct messages \(M_1 \neq M_2\), \(h(M_1)\neq h(M_2)\) with negligible probability—this is **preimage resistance**. The *size* of the tag (e.g., 128 bits in MD5) balances collision risk against bandwidth.

---

### HMACs: Integrity + Authentication

An HMAC augments a hash with a secret key \(K\):

\[
\text{HMAC}_K(M)=h((K \oplus opad)\,\|\, h((K \oplus ipad)\,\|\,M)).
\]

The inner and outer pads (\(ipad, opad\)) thwart length‑extension attacks. The key ensures that only parties possessing \(K\) can generate a valid tag. Thus HMACs solve *integrity* **and** *authentication* (proof of origin). They remain efficient because they reuse the underlying hash.

---

### Digital Signatures: Integrity + Non‑Repudiation

A digital signature replaces the secret key with a private signing key \(sk\) and uses a public verification key \(pk\):

1. Hash the message once, then apply an asymmetric primitive (RSA, ECDSA, etc.) to produce \(\sigma = \text{Sign}_{sk}(h(M))\).
2. Anyone can verify \(\sigma\) with \(pk\), but only the holder of \(sk\) could have produced it.

Because \(sk\) is not shared, the signer cannot later deny having signed \(M\); this is **non‑repudiation**—a property HMACs lack.

---

### Non‑obvious insight

Both HMAC and signature schemes ultimately rely on *hashing* as a dimensionality reduction. The secret or private key simply selects a *different hash function* in the same family. Thus, designing secure HMACs or signatures boils down to choosing a collision‑resistant hash and pairing it with an appropriate key‑based transformation—no “magic” is needed beyond that fundamental optimization: *reduce data size while preserving uniqueness*.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
