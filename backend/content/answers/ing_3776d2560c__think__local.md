---
qid: ing_3776d2560c__think__local
question: Your platform must support multiple LLM providers, including deployments
  in restricted environments where only some models are available. How do you architect
  model selection?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 206
output_tokens: 444
total_tokens: 650
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T02:36:32-05:00'
sources: []
---

**1. Clarify the problem & set assumptions**  
   - *What* is “restricted environment”? (e.g., on‑prem, air‑gapped, regulatory limits).  
   - Which LLMs are available per provider and in each env?  
   - Is selection driven by user request, policy, or fallback logic?  
   - Assume we can query a registry of model capabilities at runtime.

**2. Adopt a modular “capability‑based” framework**  
   - Treat each LLM as a *service* exposing metadata: provider, version, supported prompt types, token limits, compliance tags, latency, cost.  
   - Build a **Model Catalog Service** that aggregates this metadata into a searchable index.

**3. Reason step‑by‑step through selection**  
   1. Receive request → extract intent & constraints (e.g., “must run locally”, “max 4 k tokens”).  
   2. Query the catalog for models satisfying those constraints.  
   3. Rank candidates by policy rules (provider trust, cost, latency).  
   4. If multiple satisfy, pick the best; if none, surface an error or fallback to a generic model.  
   5. Cache the decision per session for consistency.

**4. Avoid common pitfalls**  
   - *Hard‑coding* provider logic: leads to brittle code when new LLMs appear.  
   - Ignoring **policy drift**: compliance requirements may change; keep metadata up‑to‑date.  
   - Overlooking *environment detection*: assume “restricted” = local, but sometimes a hybrid setup exists.

**5. Sanity‑check & communicate**  
   - Run unit tests with mock catalogs to ensure selection respects all constraints.  
   - Log the decision path (request → catalog query → chosen model) so operators can audit failures.  
   - Present the architecture diagram: request → policy engine → catalog service → deployment layer, highlighting how each component isolates provider specifics from core logic.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
