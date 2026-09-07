---
qid: ing_3d76da2c3d__faang__local
question: 'Explain: Q72: Explain MCP (Model Context Protocol) 2.0 and the security
  risks of running MCP servers in production.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 249
output_tokens: 618
total_tokens: 867
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:06:41-05:00'
sources: []
---

**Q72 – Model Context Protocol (MCP v2.0)**  

---

### 1️⃣ Clarify  
* **What is MCP?** A lightweight, language‑agnostic protocol for exchanging a model’s *context* (metadata, weights, inference settings) between client and server.  
* **Why v2.0?** Adds JSON‑based schema evolution, signed payloads, and built‑in compression.  
* **Assumptions to confirm:**  
  - The environment is containerized with mutual TLS.  
  - Clients authenticate via OAuth tokens.  
  - We’re deploying on a public cloud (AWS/GCP).  

### 2️⃣ Approach  
1. Outline MCP v2.0 features (header, payload, signature).  
2. Enumerate security risks of running an MCP server in prod.  
3. Provide mitigations and best‑practice checklist.

### 3️⃣ Depth – Core Answer  
MCP v2.0 defines a **handshake**:  
* `X-MCP-Version: 2.0` header + optional `X-MCP-Nonce`.  
* Payload is **JSON‑encoded** with base64‑compressed model binaries; a SHA‑256 HMAC signed by the server’s private key authenticates integrity.  

**Security risks:**  
| Risk | Why it matters | Mitigation |
|------|----------------|------------|
| **Model tampering** | Untrusted clients could inject malicious weights if signatures are weak. | Use asymmetric signing (RSA‑PSS) and verify on every request; rotate keys quarterly. |
| **Denial‑of‑Service via large payloads** | Attackers send huge base64 blobs to exhaust memory. | Enforce `Content-Length` limits, stream decoding, and reject > 50 MB requests. |
| **Privilege escalation through mis‑configured RBAC** | If the server trusts a compromised token it can expose proprietary models. | Strict OAuth scopes; audit logs for model access. |
| **Replay attacks on context** | Reusing an old nonce may bypass freshness checks. | Include timestamps, enforce 5 min TTL, and track nonces per client. |

### 4️⃣ Edge Cases  
* Empty or malformed `X-MCP-Nonce`.  
* Clients using legacy MCP v1.0 – fallback to a compatibility layer.  
* Network latency causing HMAC verification timeout.

### 5️⃣ Optimize & Communicate  
- **Performance:** Use protobuf instead of raw JSON for binary payloads; this cuts parse time by ~30%.  
- **Observability:** Instrument per‑request latency and error rates; set alerts on spikes.  

**Narrative tip:** Start with the “what” (MCP v2.0), move to the “why it’s risky”, then finish with a concise mitigation plan—exactly how top FAANG teams structure their answers.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
