---
qid: ing_dd28e6eb83__fp__local
question: 'Explain: HTTP/JSON — Apache CouchDB'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 169
output_tokens: 392
total_tokens: 561
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:49:39-05:00'
sources: []
---

### Why CouchDB speaks HTTP/JSON

The core problem is **distributed, schema‑free storage** that can be queried and updated over the web without a custom protocol.  
CouchDB solves this by treating every database object as an immutable JSON document exposed through a pure REST API.

1. **Uniform interface (REST)** – By mapping CRUD operations to standard HTTP verbs (`GET`, `POST`, `PUT`, `DELETE`) CouchDB inherits existing infrastructure: caching, proxies, authentication, and idempotence guarantees.  
2. **Self‑describing data (JSON)** – JSON is a lightweight key–value format that maps directly onto JavaScript objects, enabling instant parsing in browsers and many languages. It also allows documents to evolve without breaking clients—new fields can appear at any time.  
3. **Conflict resolution via MVCC** – Each document carries a revision hash (`_rev`). When two replicas modify the same doc concurrently, CouchDB keeps both branches; the client later merges based on these hashes. The JSON payload simply contains all revisions in an array, so conflict detection is a pure string comparison problem.

#### Non‑obvious insight  
Because HTTP is *stateless*, CouchDB must encode **all** state needed for replication inside the request body or URL parameters. This forces it to expose revision trees and attachment digests openly, turning what would otherwise be opaque internal data into first‑class queryable fields. Consequently, any client can build a lightweight “offline” copy of the database by mirroring only the JSON payloads it needs—no hidden protocol is required.  

Thus, HTTP/JSON is not an arbitrary choice; it is the minimal, universally understood language that satisfies the constraints of distributed, versioned storage while keeping the system open and interoperable.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
