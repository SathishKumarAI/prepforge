---
qid: ing_2312efe059__fp__local
question: 'Explain: Path parameters — Create an index | Elasticsearch API documentation'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 172
output_tokens: 427
total_tokens: 599
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T17:20:10-05:00'
sources: []
---

### Why the *Create Index* endpoint needs a **path parameter**

The fundamental problem is that a cluster can hold thousands of indices, each with its own mapping and settings.  
When you issue `PUT /my‑index`, Elasticsearch must

1. locate the exact index object in the cluster state,
2. decide whether it already exists, and
3. apply the supplied body (mappings, analyzers) only to that one.

The **path parameter** (`{index}`) is the canonical way to reference a single target among many. It satisfies three constraints:

| Constraint | Why it matters |
|------------|----------------|
| **Uniqueness** | The cluster state is a map `index_name → IndexMetadata`. A key lookup is O(1). |
| **Predictability** | Clients can construct URLs deterministically; no ambiguity about which index the body applies to. |
| **Security** | Permissions are evaluated per‑index (`indices:write` on that name), preventing accidental writes to other indices. |

#### Deep principle: *indexing as a key–value store*

Elasticsearch’s internal data structure is essentially a distributed hash table of `IndexMetadata`. The HTTP API mirrors this by exposing the key directly in the URL. This keeps the transport protocol lightweight (no need for a separate header or query string) and aligns with RESTful conventions: the path identifies the resource.

#### Non‑obvious insight

The same endpoint can **create** an index *and* **update** its settings/mappings if you use `PUT /my‑index` without a body. The server interprets this as “ensure existence” rather than “overwrite”. This duality is a subtle optimization: it avoids an extra round‑trip for idempotent creation, while still allowing full control when a body is present.

In short, the path parameter is not just syntactic sugar; it’s the efficient key that lets Elasticsearch satisfy uniqueness, speed, and security in one concise URL.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
