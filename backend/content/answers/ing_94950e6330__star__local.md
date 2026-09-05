---
qid: ing_94950e6330__star__local
question: 'Explain: Action Success Rate (ASR) — Evaluating Agentic Systems'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 383
total_tokens: 623
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:30:02-05:00'
sources: []
---

**Situation** – In early 2024 I was leading a research sprint at my lab on a new conversational AI that could autonomously negotiate with users about travel itineraries. The prototype performed well in scripted tests but we needed to quantify how often it actually completed negotiations successfully when faced with noisy, real‑world inputs.

**Task** – My goal was to design and implement an Action Success Rate (ASR) metric that would give us a clear, reproducible measure of the system’s agentic performance across thousands of simulated interactions, and then use that data to guide iterative improvements.

**Action** – I built a pipeline in Python using PyTest for automated interaction logs. Each conversation was annotated with a “success” flag if the final booking state matched user intent and constraints. The ASR was computed as successful turns divided by total attempts. To account for partial successes, I added a weighted score where a 70‑percent match earned 0.7 points. We ran 10,000 synthetic dialogues generated via GPT‑4 prompts, collected logs in an Elasticsearch cluster, and visualized trends with Kibana dashboards. I then performed ablation studies on dialogue policy parameters to see their impact on ASR.

**Result** – The baseline model achieved a 62 % ASR; after tuning the reward function for user satisfaction and tightening slot‑filling heuristics, we lifted ASR to 78 %, a 16‑point improvement. This metric guided us in prioritizing features that directly increased agent autonomy, and I learned how crucial it is to define success not just qualitatively but with a rigorous, reproducible score that scales to real‑world deployments.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
