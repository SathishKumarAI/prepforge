---
qid: ing_39463fbd91__faang__local
question: 'Explain: Maintain a single API — Introduction to Apollo Federation - Apollo
  GraphQL Docs'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 476
total_tokens: 715
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:57:46-05:00'
sources: []
---

## Clarify  
You want a **single entry‑point** for all GraphQL services while still allowing each team to evolve its own schema independently.  
Assumptions:  
* Multiple micro‑services expose GraphQL endpoints.  
* Clients should not know which service hosts which type.  
* We’re using Apollo Server (or compatible) and want zero downtime during rollout.

## Approach  
1. **Create a gateway** that aggregates all sub‑schemas.  
2. Each microservice publishes a *subgraph* with its own SDL and resolvers.  
3. The gateway stitches the subgraphs into one unified schema at runtime.  

This is Apollo Federation: the gateway runs once; every service can be redeployed independently.

## Depth (Implementation)  
```bash
# Subgraph
const typeDefs = gql`
  extend type Query { user(id: ID!): User }
  type User @key(fields:"id") { id: ID! name: String }
`;
```

```js
// Gateway
import { ApolloServer } from '@apollo/server';
import { buildFederatedSchema } from '@apollo/federation';

const gateway = new ApolloServer({
  schema: buildFederatedSchema([{ typeDefs, resolvers }, …]),
});
```

*Resolvers use `@key` and `@provides` to share data across services.*  
Complexity: O(N) per query (N subgraphs).  
Trade‑offs: Slight runtime overhead vs. great modularity.

## Edge Cases  
*Schema version mismatch*: gateway will throw at startup; handle with schema validation or a “stale” flag.  
*Network latency*: add caching or use `@requires` to limit cross‑service calls.  
*Hot reload*: use Apollo Studio for live schema changes.

## Optimize & Communicate  
- **Versioning**: tag subgraphs, keep gateway compatible via introspection.  
- **Observability**: instrument each service; aggregate metrics in the gateway.  
- **Narration**: “We expose one GraphQL endpoint to clients but internally split logic into micro‑services. Apollo Federation lets us stitch these together on demand, giving us modularity without sacrificing a clean API surface.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
