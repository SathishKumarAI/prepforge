---
qid: ing_d90404079b__fp__local
question: 'Explain: Versioning — Client-Server Architecture | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 172
output_tokens: 487
total_tokens: 659
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:41:30-05:00'
sources: []
---

**Versioning in a client‑server ML architecture**

*Problem:* Clients request predictions from a server that may host many models or model versions. If a new training run produces an updated weight matrix, the server must keep the old one for reproducibility while still serving the latest one to most users. The key is to allow **concurrent reads** of any version without locking and to guarantee that a request always sees a *single* coherent model.

1. **Immutable artefacts** – every training run emits a hash‑digested artifact (e.g., SHA‑256 of the binary weights). That hash becomes the *identifier*. Because the data are immutable, clients can cache the URL `model://<hash>` and never worry about stale content; the server can serve via a CDN or object store.

2. **Content‑addressable routing** – the HTTP path encodes the hash (`GET /v1/models/<hash>/predict`). The server uses this to look up the artifact in a key‑value store that maps hashes to file locations. No lock is needed; reads are O(1).

3. **Semantic versioning of API endpoints** – `v1`, `v2` etc. refer to *model families* (e.g., architecture changes). Within each family, the hash resolves to a concrete model.

4. **Consistency vs availability** – by making models immutable and read‑only, we sidestep CAP trade‑offs: we can serve from any replica (availability) while guaranteeing that all replicas agree on a given hash (consistency).

5. **Non‑obvious insight:**  
   *Hashing the entire weight tensor turns version control into a pure lookup problem.* It removes the need for separate “current” pointers, eliminates race conditions during roll‑outs, and automatically enables rollback by simply redirecting clients to an older hash.

In short, immutable, content‑addressable model artifacts give a clean, mathematically sound solution to multi‑version serving in client‑server ML systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
