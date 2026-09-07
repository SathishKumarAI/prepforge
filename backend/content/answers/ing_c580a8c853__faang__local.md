---
qid: ing_c580a8c853__faang__local
question: 'Explain: Informational responses — HTTP response status codes - HTTP |
  MDN'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 678
total_tokens: 916
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:20:19-05:00'
sources: []
---

**Clarify**  
You’re asking for an explanation of *informational* HTTP responses (status codes 100‑199). I’ll assume you want: what they represent, when a server sends them, and why they matter in client–server communication.

---

### Approach  
1. List the standard 1xx codes.  
2. Describe their purpose in the request‑response lifecycle.  
3. Explain typical use cases (e.g., `100 Continue`, `101 Switching Protocols`).  
4. Mention how clients interpret them and what happens if they’re omitted or misused.

---

### Depth  

| Code | Name | When Sent | Effect on the Client |
|------|------|-----------|---------------------|
| **100 Continue** | Request received; keep sending body | After a client sends `Expect: 100-continue` header | Client proceeds to send request payload. |
| **101 Switching Protocols** | Server switching protocols (e.g., WebSocket) | Upon successful upgrade request | Client switches its protocol stack accordingly. |
| **102 Processing** *(WebDAV)* | Server has accepted the request but processing is not yet complete | Long‑running operations | Keeps connection alive; client may retry or wait. |
| **103 Early Hints** *(draft, Chrome/Edge support)* | Server sends preliminary headers (e.g., `<link rel=preload>`) before full response | When resource preloading can improve performance | Client starts fetching linked resources immediately. |

*Common pattern:* The server first acknowledges the request header receipt, then continues with the final `2xx` or error response.

**Why they matter**  
- **Performance**: `100 Continue` prevents sending large bodies when the server will reject the request (e.g., authentication failure).  
- **Protocol negotiation**: `101 Switching Protocols` enables upgrades like WebSocket without separate handshakes.  
- **User experience**: `103 Early Hints` allows browsers to start loading assets before the full page is ready, reducing perceived latency.

---

### Edge Cases  

| Scenario | What can break? | Test strategy |
|----------|-----------------|---------------|
| Server sends 1xx but never follows with final response | Client hangs or times out | Mock server that delays final status; verify client timeout handling. |
| Client sends `Expect: 100-continue` but server ignores it | Unnecessary payload sent | Verify server respects header or falls back to sending body immediately. |
| Browser doesn’t support `103 Early Hints` | Preload links ignored | Test on legacy browsers and confirm graceful degradation. |

---

### Optimize & Communicate  

*Optimizations:*  
- Cache 1xx responses where appropriate (e.g., reuse the same `100 Continue` for repeated requests).  
- Use `101 Switching Protocols` only when necessary to avoid extra round‑trips.

*Communication:*  
When interviewing, I’d say: “Informational codes are handshake messages that keep the client and server in sync before the heavy lifting begins. They’re small but crucial for efficiency and protocol evolution.” This shows I understand both the technical mechanics and the practical impact on user experience.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
