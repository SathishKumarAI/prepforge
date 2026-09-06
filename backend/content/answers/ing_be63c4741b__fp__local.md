---
qid: ing_be63c4741b__fp__local
question: 'Explain: What does an API gateway do? Why — What is API Gateway?'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 176
output_tokens: 390
total_tokens: 566
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:48:27-05:00'
sources: []
---

**Why a system needs an API gateway**

When many micro‑services expose REST/GraphQL endpoints, a client (browser, mobile app, another service) would have to know the address, authentication scheme, rate limits, and version of *every* service it touches.  
From an information‑theoretic view this is a **high‑entropy interface**: each request carries a lot of “protocol baggage” that must be repeated for every hop. The gateway acts as a *compressor*: it collects all the metadata (routing, auth, transformation) into one contract and presents a single, low‑entropy façade to clients.

**What an API gateway actually does**

| Core function | Reasoning |
|---------------|-----------|
| **Routing & load‑balancing** | It forwards requests to the appropriate backend based on path/host, distributing traffic like a probability distribution over instances. |
| **Security & policy enforcement** | Centralizes auth (JWT, OAuth) and rate limiting; reduces per‑service code duplication—an optimization of shared constraints. |
| **Transformation & aggregation** | Converts between client’s format and each service’s API, even composing multiple calls into one response—akin to a linear map that preserves semantics while reducing dimensionality. |
| **Observability & resilience** | Adds logging, metrics, circuit‑breaker logic; turns a fragile chain of services into a single monitored endpoint. |

**Non‑obvious insight**

Most people see gateways as merely “proxy + auth”. In reality they are *policy engines* that enforce invariants across the entire API ecosystem. By moving these invariants to one place you reduce coupling, making each micro‑service free to evolve its own contract without breaking clients—precisely what distributed optimization demands for scalable systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
