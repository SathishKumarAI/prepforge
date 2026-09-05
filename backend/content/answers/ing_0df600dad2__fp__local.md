---
qid: ing_0df600dad2__fp__local
question: 'Explain: Authentication — GitHub - lib/pq: Go PostgreSQL driver for database/sql
  \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 185
output_tokens: 506
total_tokens: 691
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:35:32-05:00'
sources: []
---

### Why the `pq` driver must *authenticate* before any query

When a client talks to PostgreSQL it first negotiates a **protocol handshake**.  
The server promises: “I will give you access only if you prove that you know
a secret belonging to an allowed role.”  In information‑theoretic terms the
client has to send enough evidence that its *entropy* matches one of the
stored passwords, without leaking that password.

The driver therefore implements a **challenge–response** protocol:

1. **Server → Client** – sends a random salt and a list of supported
   authentication methods (e.g., `MD5`, `SCRAM‑SHA256`).
2. **Client → Server** – chooses the strongest mutually supported method,
   hashes or scrambles the password with the provided salt, and returns
   the result.
3. **Server** verifies the hash; if it matches, a session key is established.

This chain satisfies three deep principles:

| Principle | How it shows up in `pq` |
|-----------|------------------------|
| **Optimization** | The driver selects the fastest method that still meets security goals (e.g., prefer SCRAM over MD5). |
| **Information theory** | Passwords are never transmitted; only a derived hash of size equal to the secret’s entropy is sent. |
| **Probability** | Random salts ensure that replay attacks have probability ≈ 0, and multiple challenges make brute‑force infeasible. |

### One non‑obvious insight

Most people assume “authentication is just sending a password.”  
In `pq` the *real work* happens in the *scrambling* step: the driver
must **buffer the first 8 bytes of the password** and XOR them with a
randomly generated key before hashing.  This subtle XOR prevents an attacker
from deducing the raw password even if they see the final hash, because the
intermediate value is never exposed to the network.  Skipping that step
would expose the driver to downgrade attacks where a malicious server forces
the client to use MD5 instead of SCRAM.

In short, `pq`’s authentication logic is a micro‑implementation of
information‑secure challenge–response, carefully balancing speed,
security, and protocol compliance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
