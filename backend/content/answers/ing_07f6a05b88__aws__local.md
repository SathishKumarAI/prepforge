---
qid: ing_07f6a05b88__aws__local
question: 'Explain: When to Use a Tool — Tools vs. Subagents: Building Effective AI
  Agents Without Over-Engineering'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 481
total_tokens: 722
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:43:45-05:00'
sources: []
---

**When to use a tool versus building a sub‑agent?**

> **Leadership Principles:** *Customer Obsession* – deliver the simplest solution that satisfies user intent; *Ownership* – make architectural choices that scale without unnecessary complexity.

### Situation
Our product team needed an AI assistant that could answer customer queries about billing and usage. The initial prototype used a monolithic “sub‑agent” that parsed natural language, fetched data from multiple databases, ran custom business rules, and generated responses—all in one Lambda function. After launch we saw 27 % of calls escalated to human agents because the assistant often returned incorrect or incomplete information.

### Task
I had to reduce failure rate while keeping latency under 300 ms and cost below $0.05 per request.

### Action
1. **Dive Deep into Failure Modes**  
   * Instrumented logs showed that most errors came from the data‑fetch step, not the language model.  
2. **Redesign with “Tools” Pattern**  
   * Created lightweight AWS Step Functions workflows where each step is a dedicated Lambda (or Fargate task) acting as a *tool*:  
     * `BillingQueryTool` – retrieves billing records from DynamoDB.  
     * `UsageStatsTool` – calls Athena for usage aggregates.  
     * `ComplianceCheckTool` – verifies user permissions via Cognito.  
3. **Leverage Managed Services**  
   * Used Amazon Bedrock to generate natural‑language responses, feeding it only the tool outputs.  
4. **Bias for Action & Cost Control**  
   * Enabled Step Functions retry with exponential backoff; each tool runs in a 2 s timeout to cap cost.  

### Result
* Escalation rate dropped from 27 % to 3 % (an 89 % improvement).  
* Latency averaged 210 ms, well under the SLA.  
* Operational cost fell by 35 % because tools were stateless and reused across requests.

**Takeaway:** Treat complex domain logic as separate *tools* rather than embedding it in a monolithic sub‑agent. This yields higher reliability, easier testing, and cleaner scaling—exactly what Amazon expects from an ownership mindset.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
