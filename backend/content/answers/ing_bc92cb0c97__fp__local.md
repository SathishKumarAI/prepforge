---
qid: ing_bc92cb0c97__fp__local
question: 'Explain: Drawbacks of REST — REST vs GraphQL - by Ashish Pratap Singh'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 178
output_tokens: 380
total_tokens: 558
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:44:42-05:00'
sources: []
---

**Why REST Often Fails at the Edge of Modern APIs**

REST’s core idea is *resource‑centric* HTTP: every URL maps to a fixed representation. This works beautifully for CRUD but silently imposes three hard constraints that hurt performance and developer ergonomics.

1. **Over‑fetch / Under‑fetch** – A client must issue multiple round trips or over‑request data because the server’s representation is immutable. From an information‑theoretic view, this increases entropy: the network carries more bits than necessary, raising latency and cost.  
2. **Versioning friction** – Adding a new field breaks clients that don’t expect it, yet removing one forces API version bumps. The principle of *backward compatibility* is violated because REST treats every change as a new resource.  
3. **Lack of query expressiveness** – Filtering, aggregation, and pagination are ad‑hoc conventions (e.g., `?page=2`). This wastes bandwidth and obscures intent; the API is not a declarative data source but an imperative protocol.

GraphQL turns these constraints into advantages by letting clients *declare* exactly what they need. The query becomes a concise, low‑entropy message that maps naturally to probability distributions over data (the client’s posterior). It also embeds versioning in its type system: adding fields is additive and safe.

**Non‑obvious insight:**  
The real advantage of GraphQL lies not just in fewer requests but in *semantic decoupling*: the server exposes a *schema* that serves as a contract. Clients can evolve independently because they only care about the shape of data, not its location—this is why microservices thrive with GraphQL while REST struggles to keep pace.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
