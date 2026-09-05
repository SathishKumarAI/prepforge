---
qid: ing_123024c841__star__local
question: 'Explain: An API Contract in Practice — What is an API? | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 298
total_tokens: 540
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:04:55-05:00'
sources: []
---

**Situation** – I was leading a micro‑services revamp for our e‑commerce platform. The front‑end team complained that the product catalogue service kept changing its endpoints, breaking their UI builds every sprint.

**Task** – My job was to formalise an API contract so both teams could ship independently without surprise bugs, while still allowing the catalogue service to evolve.

**Action** – I introduced OpenAPI (Swagger) to define a static JSON schema for every endpoint: path parameters, query strings, request bodies, and response payloads. We then generated a TypeScript client library that was checked into the UI repo, ensuring compile‑time type safety. For versioning, we adopted semantic‑versioned URLs (`/v1/products`) and set up automated contract tests with Pact that ran in CI for every pull request. When the catalogue team needed to add a new field, they updated the spec, regenerated the client, and ran all existing contracts to guarantee backward compatibility.

**Result** – The number of “endpoint mismatch” incidents dropped from 12 per month to zero within two weeks. UI deployments became 35 % faster because we eliminated manual endpoint documentation reviews. I learned that a well‑defined API contract is not just documentation—it’s an enforceable spec that protects the entire product pipeline.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
