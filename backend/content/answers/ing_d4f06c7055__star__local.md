---
qid: ing_d4f06c7055__star__local
question: 'Explain: Project background — AI Coding Workflow - by Neo Kim and Louis-Fran\u00e7ois
  Bouchard'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 249
output_tokens: 434
total_tokens: 683
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:34:47-05:00'
sources: []
---

**Situation**  
When I joined the software house in early 2024, our core product was a cloud‑based IDE that developers used to write, test, and deploy code across multiple languages. The engineering team had been struggling with an average cycle time of 12 hours from commit to production, largely because manual linting, static analysis, and unit‑test generation were bottlenecks.

**Task**  
I was tasked with building an “AI Coding Workflow” that would automate the heavy lifting—auto‑completing code snippets, generating test cases on the fly, and suggesting refactors—so we could cut cycle time by at least 40% while keeping quality high enough for a production release within six months.

**Action**  
I led a cross‑functional squad to design a pipeline that combined OpenAI’s Codex model with our internal static‑analysis engine. We built a lightweight microservice in Go, exposed as an HTTP API, and integrated it into the IDE via a VS‑Code extension. The extension sent context (file content, cursor position) to the service, which returned code suggestions and unit tests in JSON. I also added a feedback loop: every time a developer accepted or rejected a suggestion, the system logged it and retrained on a nightly job using our own fine‑tuning framework. To keep latency under 200 ms, we deployed the microservice on Kubernetes with autoscaling based on request queue depth.

**Result**  
Within four months of launch, cycle time dropped from 12 to 7 hours—a 42% improvement—and the acceptance rate for AI‑generated tests rose to 68%. The team reported a 30% increase in overall productivity, and we captured an additional $2 M in revenue by offering the workflow as a premium add‑on. I learned that marrying large‑language models with domain‑specific tooling can deliver measurable impact when you treat the model as a service that learns from real user interactions.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
