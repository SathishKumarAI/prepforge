---
qid: ing_86692718ea__faang__local
question: 'Q: Why do we see a trend towards "Programming" (DSPy) instead of "Prompting"?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 462
total_tokens: 706
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:56:50-05:00'
sources: []
---

**Clarify**  
The question asks why industry is leaning toward *programmatic* AI interfaces—like DSPy or function‑calling APIs—rather than pure prompt‑based interaction. I’ll assume we’re comparing two paradigms: (1) “prompting” where the user supplies natural language prompts and the model generates text, and (2) “programming” where developers embed LLM calls inside code, controlling flow, inputs, and outputs.

**Approach**  
Explain benefits of programming: reproducibility, testability, composability, safety, and integration with existing software stacks. Contrast with prompting’s limitations in deterministic behavior and auditability. Highlight recent API trends (OpenAI function calling, Anthropic’s agents) that formalize the interface.

**Depth**  
- **Determinism & Control** – Code can guard against hallucinations, enforce constraints, retry logic, and cache results.  
- **Testing & CI/CD** – Unit tests on LLM outputs become feasible; mocks can replace models during build pipelines.  
- **Modularity & Reuse** – Functions or “agents” can be composed into larger workflows (e.g., data extraction → transformation → reporting).  
- **Security & Compliance** – Programmable interfaces allow logging, input validation, and adherence to privacy policies.  
- **Performance** – Batch calls, concurrency controls, and resource quotas are easier to manage programmatically.

Prompting excels in rapid prototyping but falters when scaling or requiring strict guarantees—hence the shift toward programming.

**Edge Cases**  
- Legacy systems lacking code‑base integration may still rely on prompting.  
- Domains needing highly creative output (storytelling) might prefer freeform prompts.  
- Over‑engineering can introduce latency if every LLM call is wrapped in logic.

**Optimize & Communicate**  
Emphasize that programming isn’t abandoning prompts; it’s structuring them within safe, testable pipelines. I’d suggest adopting a hybrid approach: keep human‑friendly prompts for exploratory phases, then encapsulate them as reusable functions with clear contracts. This balances agility and reliability—exactly what FAANG teams value in production AI services.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
