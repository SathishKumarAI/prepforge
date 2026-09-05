---
qid: ing_5e39ca0938__star__local
question: 'Explain: Tier 3: Run on a sample (expensive LLM, ~$5/1K)'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 247
output_tokens: 323
total_tokens: 570
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:36:26-05:00'
sources: []
---

**Situation:** In my last role as a data scientist for a fintech startup, we were building an AI-powered compliance assistant. Our beta test involved processing around 200,000 regulatory documents each month, but the initial prototype used a high‑cost LLM (OpenAI GPT‑4) that charged roughly $5 per 1,000 tokens—too expensive for production.

**Task:** I needed to reduce monthly inference costs by at least 60% while maintaining accuracy above 92% on key compliance metrics.

**Action:** I first profiled token usage and found most prompts were 3–4k tokens long. I redesigned the prompt hierarchy: a lightweight, rule‑based pre‑processor filtered out non‑critical sections, sending only 800‑token summaries to GPT‑4. For the bulk of the workload, I deployed an open‑source distilled model (e.g., Llama‑2‑7B) on our GPU cluster, using quantization and mixed‑precision inference to cut latency by 30%. I also implemented a caching layer that stored previously processed documents, avoiding duplicate calls.

**Result:** Monthly costs dropped from $10k to $3.5k—a 65% savings—while the compliance accuracy stayed at 93%. The exercise taught me how to balance model performance with operational economics and highlighted the power of hybrid architectures in real‑world AI deployments.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
