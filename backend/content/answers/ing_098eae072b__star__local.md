---
qid: ing_098eae072b__star__local
question: Design the tool schema for a coding agent. How many tools, and how do you
  handle tool errors?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 426
total_tokens: 672
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:48:00-05:00'
sources: []
---

**Situation** – In my last role I led a prototype for an AI coding assistant that needed to interact with three external services: a language model API (OpenAI), a code formatter (Prettier), and a static‑analysis engine (ESLint). The team was sprinting to deliver a demo for a VC pitch, so reliability had to be guaranteed even under rate limits and partial outages.

**Task** – I had to design the tool schema: decide how many discrete “tool” objects to expose to the LLM, define clear input/output contracts, and build robust error‑handling that keeps the user experience smooth without leaking internal stack traces.

**Action** – I split the agent’s capabilities into four tools: `generate_code`, `format_code`, `lint_code`, and `debug`. Each tool was a lightweight wrapper around its service, with a unified JSON schema for requests and responses. For error handling I implemented two layers:

1. **Local retry logic** (exponential back‑off up to 3 attempts) for transient network errors or 429 rate limits.
2. A fallback hierarchy: if `lint_code` fails, the agent automatically falls back to `format_code`; if both fail, it returns a user‑friendly message and logs the incident.

I also added a health‑check endpoint that the LLM can query before invoking a tool, so it avoids calling a down service entirely. All logs were sent to a central dashboard with alerting on consecutive failures.

**Result** – During the sprint the agent handled 95 % of requests without human intervention; the average latency dropped from 1.2 s to 0.8 s thanks to the health‑check preflight. The VC demo went live, and we received positive feedback that “the assistant never got stuck”. I learned that a clear tool contract plus proactive health checks dramatically improves reliability in AI‑powered workflows.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
