---
qid: ing_a59ffc0657__star__local
question: Design an agent that operates a web browser to complete multi-step tasks.
  How do you make it reliable enough to ship?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 249
output_tokens: 361
total_tokens: 610
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:04:16-05:00'
sources: []
---

**Situation**  
When my team built the “WebPilot” automation platform, we had to deliver a browser‑controlled agent that could complete complex user workflows—like booking flights and ordering groceries—within 48 hrs of a request. Early beta runs hit flaky navigation: pages loaded out of order or JavaScript errors caused the agent to abort mid‑step.

**Task**  
I was tasked with tightening reliability so we could ship a production‑grade product that guaranteed ≥95% success on any user‑defined workflow, while keeping latency under 3 s per action.

**Action**  
1. Implemented a *retry‑with back‑off* policy for every DOM interaction, using Playwright’s `locator.waitFor` with custom predicates to detect stale elements.  
2. Added a lightweight *state snapshot* after each step (DOM hash + network logs) and a rollback routine that restores the last good state via browser context reload.  
3. Built an internal “task planner” that decomposes user intents into declarative actions, then validates each against a dynamic schema before execution.  
4. Instrumented telemetry: every action’s success/failure, duration, and error code were sent to Grafana; we set alerts for >5 % failure rate per step.

**Result**  
After two sprints of iterative testing, overall task completion rose from 78 % to 97 %. Latency stayed at ~2.8 s per action, and the rollback feature cut manual debugging time by 70 %. I learned that coupling deterministic state management with fine‑grained retry logic is key to turning a brittle web‑automation prototype into a ship‑ready service.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
