---
qid: ing_98efb94a2a__star__local
question: 'Explain: Multi-Agent System - Python — GitHub - microsoft/semantic-kernel:
  Integrate cutting-edge LLM technology quickly and easily into your apps \u00b7 GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 262
output_tokens: 363
total_tokens: 625
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:38:29-05:00'
sources: []
---

**Situation** – In my last role at a fintech startup, we were building a compliance monitoring tool that had to process regulatory documents and generate actionable insights for our legal team within 24 hours of ingestion. Our existing pipeline was linear and couldn’t keep up with the volume, so I proposed using a multi‑agent system built on Microsoft’s Semantic Kernel.

**Task** – My goal was to design an architecture where distinct agents could each handle a slice of the workflow: one for document parsing, another for summarization, a third for compliance rule checking, and a final one that orchestrated everything and exposed a REST API. I had to keep latency under 3 seconds per doc while scaling to 1,000 docs/day.

**Action** – I forked the `semantic-kernel` repo, added custom prompts for each agent, and wrapped them in lightweight FastAPI endpoints. Using the kernel’s “prompt orchestration” feature, I wired agents together so they could call one another asynchronously via HTTP triggers. I also introduced a Redis queue to buffer incoming documents and used Python’s `asyncio` to run agents concurrently. For testing, I simulated 1,200 docs with a simple synthetic dataset and measured throughput.

**Result** – The new system processed each document in an average of 2.8 seconds, a 70% speedup over the legacy pipeline. It also reduced false‑positive compliance flags by 15% thanks to the rule‑checking agent’s dynamic prompt tuning. I learned that leveraging Semantic Kernel’s modularity and async capabilities can turn a monolithic workflow into a resilient, scalable multi‑agent architecture.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
