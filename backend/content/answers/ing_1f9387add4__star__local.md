---
qid: ing_1f9387add4__star__local
question: 'Explain: Design the tool surface for a coding agent: which tools exist,
  what their schemas look like, and how results come back.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 252
output_tokens: 387
total_tokens: 639
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:32:25-05:00'
sources: []
---

**Situation**  
At my previous company we were building an internal coding assistant that could automatically scaffold micro‑services in Go. The team was frustrated because the existing IDE extensions only offered “run tests” or “format code”, not a way to programmatically request new files, update dependencies, or run CI pipelines from within the agent.

**Task**  
I needed to design a unified tool surface: define what external tools the agent could call, specify their JSON schemas for requests and responses, and build a lightweight runtime that would translate those calls into real actions while keeping latency under 200 ms per request.

**Action**  
First I catalogued all actionable services—Git (commit/push), Go‑mod (add dependency), Docker Build/Push, GitHub Actions API, and a local linter. For each, I drafted a minimal schema: `tool_name`, `arguments` object, and an `id`. The arguments were typed with JSON Schema; for example, the Docker tool accepted `{image_name:string, tag:string, context_path:string}`. I implemented a dispatcher in Rust that parsed the agent’s JSON payload, validated it against the schema using `serde_json::json!`, then invoked the corresponding CLI or REST endpoint via async HTTP calls. Results were wrapped back into a standard response: `{tool_id, status, output}`.

**Result**  
Within two sprints the coding agent could create a new service in 4 seconds, automatically add dependencies, build an image, and trigger a GitHub Actions run—all while the user saw a single “Run” button. Usage rose from 0 to 350 requests/month, and we cut manual setup time by 70%. I learned that clear, versioned tool schemas make it trivial for LLMs to compose complex workflows without hardcoding each step.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
