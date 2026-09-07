---
qid: ing_c37b6b2afa__faang__local
question: 'Explain: Scaling Verify with Wallet for Identity Verification at Uber'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 514
total_tokens: 748
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:15:41-05:00'
sources: []
---

**Clarify**  
We need to explain how Uber’s *Scaling Verify* system uses a digital wallet to streamline identity verification. I’ll confirm that the wallet stores verified credentials (e.g., KYC data, biometric tokens) and that “scaling” refers to handling millions of users across multiple regions while keeping latency low.

**Approach**  
1. Outline the high‑level architecture: user → mobile SDK → Verify API → Wallet backend.  
2. Detail how wallet acts as a cache/credential store.  
3. Discuss data flow, security (encryption, tokenization), and compliance.  
4. Touch on scaling strategies (horizontal scaling, sharding, CDN).  

**Depth**  
- **Data model:** Each wallet holds an *identity token* (JWT) signed by Uber’s auth service; the token contains immutable user attributes plus a revocation flag.  
- **Verification flow:** When a driver logs in, the SDK first checks the local wallet for a valid token. If missing or expired, it calls Verify API, which performs biometric OCR + document OCR, returns a fresh token, and writes it back to the wallet.  
- **Security:** Tokens are encrypted at rest with per‑user keys derived from a master key via HKDF; all communication is TLS 1.3. Revocation is achieved by embedding a “revoked_at” timestamp in the token and consulting a global revocation list (GRC) cached on edge servers.  
- **Scaling:** The wallet backend is sharded by user ID hash, each shard runs on Kubernetes with auto‑scaling pods; read traffic hits a Redis cluster for near‑zero latency. A CDN caches public revocation data so regional nodes can validate tokens locally without hitting the core DB.

**Edge Cases**  
- Token expiry during an active session → fallback to Verify API and refresh token asynchronously.  
- Revoked credentials while offline → local wallet marks token as stale; next sync forces re‑verification.  
- Multi‑device sync → push notification triggers wallet update across devices.

**Optimize & Communicate**  
Future improvements: introduce a “lazy revocation” mechanism using Bloom filters to reduce GRC lookups, and employ zero‑knowledge proofs for attribute checks to preserve privacy. I would explain these trade‑offs by comparing latency vs. security overhead, ensuring interviewers see my focus on both engineering rigor and business impact.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
