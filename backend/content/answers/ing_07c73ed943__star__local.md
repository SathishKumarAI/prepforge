---
qid: ing_07c73ed943__star__local
question: 'Explain: Cody for Visual Studio (Experimental) — Cody - Sourcegraph docs'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 371
total_tokens: 612
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:44:23-05:00'
sources: []
---

**Situation**  
During the launch of our internal AI assistant, we were tasked with integrating a new feature into Visual Studio that could surface relevant code snippets and documentation on the fly. The team was using an early‑stage plugin called Cody for Visual Studio (Experimental), which leveraged Sourcegraph’s search APIs.

**Task**  
I needed to demonstrate how Cody could be configured to pull contextually appropriate docs from our internal repository, reduce the time developers spent hunting for usage examples, and ensure the feature didn’t degrade editor performance.

**Action**  
First, I set up a dedicated Sourcegraph instance pointing at our monorepo, enabling the “Code Search” index with `--enable-code-search`. Then I installed the experimental Cody extension from the VS Marketplace and edited its JSON config to point to the local Sourcegraph URL. Using the `cody search` command in the editor, I crafted a query that combined language filters (`lang:python`) with a custom tag (`@docs`). To keep latency low, I cached the top‑10 results per file using VS Code’s global state API and prefetched them when a developer hovered over a function name. Finally, I added telemetry to log query success rates and response times.

**Result**  
Within two weeks, the feature cut average documentation lookup time from 3 minutes to under 20 seconds for 75% of users, as measured by the telemetry logs. The team reported higher code quality scores in peer reviews because developers could quickly see best‑practice patterns. I learned how to balance aggressive caching with up‑to‑date results and gained hands‑on experience configuring Sourcegraph’s API for low‑latency editor integration.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
