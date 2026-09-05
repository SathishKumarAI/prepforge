---
qid: vq_d1de3f7e90__fp__local
question: In a CLIENT/SERVER environment , which of the following would not be done
  at the client ?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 179
output_tokens: 469
total_tokens: 648
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:57:47-05:00'
sources: []
---

In a typical **client‑server** architecture the *client* is the thin front‑end that only renders a UI and forwards user actions to the back‑end.  
The *server* owns the business logic, data persistence, authentication, and resource management.

| What the client does | Why it stays on the client |
|----------------------|----------------------------|
| **Presentation** – HTML/CSS/JS rendering, input validation, local caching of UI state. | The browser or mobile runtime is designed for fast, responsive UI; keeping heavy logic out reduces latency and memory usage. |
| **Network I/O** – sending HTTP/HTTPS requests, receiving responses, handling WebSocket events. | Network code is platform‑agnostic and can be reused across devices; it must stay close to the network stack for efficiency. |
| **Stateful UI updates** – reacting to server payloads, updating the DOM or component tree. | UI frameworks (React, Vue, etc.) manage state locally; offloading this to the client avoids unnecessary round‑trips and keeps the view in sync with user actions. |

**What *not* is done at the client:**

- **Persisting business data** – databases, file storage, or any long‑term state must reside on the server (or a dedicated storage service).  
- **Enforcing security policies** – authentication tokens are issued by the server; authorization logic should never rely solely on client‑side code.  
- **Executing core business rules** – calculations that determine profit margins, inventory constraints, or compliance checks belong to the server’s domain layer.

The deeper principle is *separation of concerns*: the client handles *presentation* and *interaction*, while the server manages *data integrity* and *policy enforcement*. A non‑obvious insight: even simple “client‑side validation” must be mirrored on the server; otherwise, a malicious user can bypass it by crafting raw HTTP requests. Thus, the client never **owns** critical logic or data—only its presentation façade does.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
