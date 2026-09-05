---
qid: ing_8b99179630__star__local
question: 'Q63: How do you handle version control for prompts in production?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 330
total_tokens: 569
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:12:07-05:00'
sources: []
---

**Situation**  
In my last role I was responsible for a conversational‑AI service that handled 12,000 user queries per hour. The prompt templates fed into the LLM were constantly evolving—new product features, policy updates, and A/B test variants meant we had dozens of prompt versions in play.

**Task**  
I needed a robust system to version‑control prompts, ensure reproducibility for each deployment, and roll back quickly if a new prompt caused a spike in negative sentiment scores.

**Action**  
I set up a lightweight Git repository that stored all prompt files with semantic commit messages. Each branch corresponded to an environment (dev, staging, prod). For production, I automated the promotion pipeline: a CI job ran unit tests against a local LLM sandbox, generated a checksum of the final prompt bundle, and tagged it with a UUID. The deployment script fetched the exact tag from Git, inserted the hash into the request header, and logged it in our monitoring dashboard. If a query’s sentiment dipped below 0.75, alerts triggered an automated rollback to the previous stable tag.

**Result**  
We cut prompt‑related incidents by 87 % within two weeks of deployment, reduced mean time to recovery from 45 min to under 5 min, and gained full auditability—every user query could be traced back to the exact prompt version used. I learned that treating prompts as first‑class code artifacts, with proper CI/CD and observability, is essential for reliable production AI systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
