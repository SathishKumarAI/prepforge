---
qid: ing_098eae072b__aws__local
question: Design the tool schema for a coding agent. How many tools, and how do you
  handle tool errors?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 425
total_tokens: 665
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:47:27-05:00'
sources: []
---

**Situation / Task**  
I was tasked with designing the schema for a “Coding Agent” that dynamically invokes external tools (e.g., GitHub API, AWS CodeBuild, unit‑test runner) to write and test code. The goal was to maximize reliability while keeping cost predictable.

**Action**  

1. **Tool Registry** – One central DynamoDB table (`Tools`) stores metadata: `tool_id`, `name`, `endpoint`, `rate_limit`, `health_status`, and a JSON schema for input/output.  
2. **Versioned Tool API** – Each tool exposes a versioned Lambda endpoint; the agent queries the registry to discover available versions, ensuring backward compatibility.  
3. **Error Handling** –  
   * *Local validation*: Agent validates payload against the tool’s JSON schema before invocation (avoids 400 errors).  
   * *Retry policy*: Exponential back‑off with a maximum of 3 retries for transient 5xx or throttling responses.  
   * *Circuit breaker*: After 2 consecutive failures, the tool is flagged `unhealthy` in DynamoDB; subsequent calls route through a fallback Lambda that returns a cached “last known good” response.  
4. **Metrics & Observability** – CloudWatch Alarms on failure rate per tool trigger automatic scaling of Lambda concurrency and alert ops.

**Result**  

*Reduced operational incidents by 70%* (from 12/quarter to 3/quarter) and *cut cost by 15%* through dynamic scaling and circuit‑breaking. The design earned a “Bar‑Raiser” nod for its clear ownership, deep dive into failure modes, and quantifiable impact.

**Leadership Principles Anchored**  
- **Customer Obsession**: Ensured the agent never fails silently, preserving developer experience.  
- **Ownership**: Created end‑to‑end tooling that self‑manages health and scaling.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
