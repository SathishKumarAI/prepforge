---
qid: ing_5f99e7d248__star__local
question: How do you evaluate an LLM workflow before and after giving it access to
  production operations?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 351
total_tokens: 594
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:39:36-05:00'
sources: []
---

**Situation** – In my last role I was tasked with integrating a GPT‑4 based content generator into our customer support portal. The team wanted to ensure the model would not introduce hallucinations or violate privacy before we rolled it into production.

**Task** – My goal was to design a rigorous evaluation pipeline that could benchmark the LLM’s safety, accuracy, and latency both pre‑deployment and after live usage, while tracking drift over time.

**Action** – I built a two‑phase workflow. First, in the sandbox I created a curated test set of 5,000 support tickets, annotated for correctness and privacy risk. Using OpenAI’s API with temperature 0.2, I ran batch inference, then automated scoring via custom scripts: BLEU/ROUGE for relevance, a privacy filter that flagged PII using spaCy NER, and latency measured in ms per request. We also set up A/B testing in staging, comparing model responses to human agents on real tickets. After deployment, we instrumented the production API with Prometheus metrics (latency percentiles, error rates) and a feedback loop: every 10th response was reviewed by an engineer and logged back into the training data for continuous fine‑tuning.

**Result** – The pre‑deployment pass rate was 92% on accuracy and 99.7% PII compliance; post‑deployment monitoring kept hallucinations below 0.3% over three months, and latency stayed under 200 ms 95% of the time. I learned that coupling automated metrics with periodic human reviews creates a resilient safety net for LLMs in live systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
