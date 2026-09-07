---
qid: ing_2bb5a591eb__faang__local
question: 'Explain: Pattern 2 – Orchestrator agent (sub-agents as tools)'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 491
total_tokens: 730
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:24:31-05:00'
sources: []
---

**Clarify**  
The question asks for a design that implements *Pattern 2*: an **orchestrator agent** that delegates work to several *tool‑agents*. I’ll assume we’re building a modular AI system (e.g., a virtual assistant) where the orchestrator decides which sub‑agent to invoke, passes data, and aggregates results.

---

**Approach**  
1. **Define interfaces** – `ToolAgent { run(input): Output }`.  
2. **Orchestrator logic** – a decision engine that maps intent → tool (rule‑based or learned).  
3. **Execution loop** – the orchestrator calls `run()`, handles failures, and collects outputs.  
4. **Result composition** – combine sub‑agent results into a single response.

---

**Depth**  

| Component | Implementation Detail | Complexity |
|-----------|-----------------------|------------|
| Decision engine | Simple rule table or lightweight ML classifier (e.g., BERT fine‑tuned on intent) | O(1) lookup or O(n) inference |
| Tool agents | Stateless microservices; each can be a separate LLM prompt template or API wrapper | Constant per call |
| Communication | gRPC/REST + protobuf for type safety | Network latency dominates |

Error handling: retry logic, circuit breakers, fallback to default tool. Security: sandboxed containers per agent.

---

**Edge Cases**  

* Ambiguous intent → multi‑tool execution or human escalation.  
* Tool failure → orchestrator retries or selects backup.  
* Cyclic dependencies between tools → detect via dependency graph and abort.

Testing strategy: unit tests for each agent, integration tests with mocked responses, load tests to measure orchestration latency.

---

**Optimize & Communicate**  

1. **Caching** – memoize tool outputs for identical inputs.  
2. **Batching** – if multiple tools are needed, batch calls into a single request when possible.  
3. **Explainability** – log the decision path so users can see why a particular tool was chosen.

I’d narrate this by first outlining the high‑level flow (intent → orchestrator → tool), then drilling into interface contracts and error handling, and finally discussing performance trade‑offs and scalability considerations—exactly what FAANG interviewers expect.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
