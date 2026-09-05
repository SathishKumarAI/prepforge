---
qid: ing_a7d91f702f__star__local
question: 'Explain: Evals — TypeScript AI Framework for Agents and Apps | Mastra'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 354
total_tokens: 595
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:08:36-05:00'
sources: []
---

**Situation:**  
At my last company we were building a voice‑assistant product that needed to test thousands of conversational flows before each release. The QA team struggled with manual script writing and the CI pipeline kept failing due to flaky tests.

**Task:**  
I was tasked with creating an automated, reproducible evaluation framework that could run end‑to‑end agent interactions in TypeScript, capture user intent accuracy, response latency, and compliance scores, and surface actionable insights for developers.

**Action:**  
I designed *Evals* as a lightweight TypeScript library. First, I defined a declarative JSON schema for test cases—each case listed prompts, expected intents, and optional context. Using Jest and the OpenAI API wrapper, I wrote a runner that spawns an agent instance, feeds the prompt, logs the raw LLM output, and applies custom assertion functions (e.g., regex intent match). For performance metrics I integrated `performance.now()` to capture response times, and added a WebSocket hook so developers could watch live execution in VSCode. I also built a CLI that aggregates results into an HTML dashboard with heatmaps of misclassified intents.

**Result:**  
The framework cut manual test creation time by 70 % and reduced CI failures from 12 % to under 2 %. The team now releases new features every two weeks instead of monthly, and we saw a 15 % drop in post‑release support tickets. I learned that coupling domain‑specific assertions with a simple TypeScript API gives developers the power to iterate fast while keeping tests maintainable.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
