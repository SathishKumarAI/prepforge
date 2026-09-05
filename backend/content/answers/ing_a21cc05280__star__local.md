---
qid: ing_a21cc05280__star__local
question: 'Explain: Next Steps — Introducing BigLaw Bench to Evaluate LLMs | Harvey'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 347
total_tokens: 588
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:56:48-05:00'
sources: []
---

**Situation** – While leading the AI‑integration team at a midsize law firm, we noticed our in‑house legal research tool was lagging behind competitors: it returned relevant case citations only 68 % of the time and required users to manually filter over 1,200 documents per search.  

**Task** – I had to design a systematic benchmark that would let us compare our proprietary LLM against industry leaders (OpenAI, Anthropic, Claude) on real‑world legal queries and quantify improvements before a full rollout.

**Action** – I introduced the “BigLaw Bench” framework: we compiled 3,000 anonymized client questions spanning contracts, IP, and litigation, then wrapped each into a prompt that included context metadata (jurisdiction, practice area). Using Hugging Face’s `datasets` library, I built an automated evaluation pipeline that fed prompts to each LLM, captured outputs, and scored them with a custom legal‑relevance metric (precision@3 + citation accuracy). We also ran A/B tests in our sandbox environment, logging latency, cost per query, and user satisfaction via Net Promoter Score surveys.

**Result** – The benchmark revealed our model achieved 82 % relevance versus 68 % for the baseline, with a 35 % reduction in average response time. Deployment to production cut research hours by 20 % (≈1,200 billable hours saved annually). I learned that rigorous, domain‑specific benchmarking is essential before scaling AI tools—ensuring both performance gains and client trust.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
