---
qid: ing_3387650b48__fp__local
question: 'Explain: Online Banking — Client-Server Architecture | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 172
output_tokens: 415
total_tokens: 587
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T17:54:34-05:00'
sources: []
---

### Why a client‑server model is the natural fit for online banking

The **fundamental problem**: a customer must *safely* read and modify state (balances, transfers) that lives in a highly regulated database while ensuring availability under heavy load.

1. **Separation of concerns** – The server holds immutable data; the client merely requests views or actions. This guarantees that every transaction is logged by a single source of truth, satisfying auditability and consistency.
2. **Statelessness + session tokens** – Each request contains all information needed to be processed. This follows the *REST* principle that HTTP is inherently stateless, allowing horizontal scaling without complex state replication.
3. **Fine‑grained access control** – The server enforces role‑based policies and multi‑factor authentication; the client never stores secrets. This derives from the *principle of least privilege* in security theory.

### Deeper principle: Information bottleneck

The server is the sole *information bottleneck*: all state changes must pass through it, which ensures that any change can be validated against the current entropy (balance) of an account. If a client could modify data locally, the system would violate the **data‑consistency** guarantee required by the CAP theorem for banking.

### Non‑obvious insight

Most architects focus on scalability and latency; they miss that **transactional integrity is enforced by the very act of making every state change a remote call**. By treating each API invocation as an *atomic* operation, the system automatically benefits from database ACID guarantees without needing complex distributed consensus protocols—because the client never writes directly to storage.

In short, client‑server design is not just convenient; it is the only architecture that naturally satisfies the stringent consistency, security, and auditability constraints of online banking.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
