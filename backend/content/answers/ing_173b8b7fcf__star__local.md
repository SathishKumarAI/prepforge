---
qid: ing_173b8b7fcf__star__local
question: 'Explain: Standard JSON Schema Across Validation Libraries'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 329
total_tokens: 562
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:15:12-05:00'
sources: []
---

**Situation** – In my last role at a fintech startup we were migrating our legacy REST API to GraphQL. The back‑end was built in Node.js with multiple microservices that each had its own validation library (Ajv for one service, Joi for another). During the migration I discovered that the same user profile payload was being validated twice with inconsistent rules, causing 12% of our integration tests to fail.

**Task** – I needed to unify the schema definition so every microservice used a single source of truth, reduce duplication, and ensure consistent error messages across the stack.

**Action** – I created an OpenAPI‑generated JSON Schema repository using `swagger-codegen` and then wrote a lightweight wrapper that converted the schema into the format expected by each validator (Ajv’s `$schema`, Joi’s `.keys()`). The wrapper exposed a simple API: `validate(serviceName, payload)`. I added CI checks to compare validation results across libraries and used `json-schema-faker` to generate test vectors automatically. This eliminated redundant code and made schema updates trivial.

**Result** – Validation errors dropped from 12% to <1%, and our deployment pipeline time decreased by ~30 %. The team now has a single, versioned JSON Schema that all services consume, improving maintainability and reducing the risk of silent regressions. I learned how critical it is to treat schema as a shared contract and how tooling can bridge disparate validation ecosystems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
