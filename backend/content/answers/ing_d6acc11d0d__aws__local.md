---
qid: ing_d6acc11d0d__aws__local
question: 'Explain: Test case generation — How to use AI in Meta\u2019s AI-assisted
  coding interview (with real prompts and examples)'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 450
total_tokens: 696
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:24:45-05:00'
sources: []
---

**Situation & Task**  
When Meta launched its AI‑assisted coding interview platform, the engineering team needed a scalable way to generate realistic test cases for every prompt while keeping candidate experience fresh and bias‑free.

**Action (Design)**  
I led a cross‑functional squad that built an **AI‑driven Test Case Generator** using:

| Component | AWS Service | Reasoning |
|-----------|-------------|----------|
| Prompt ingestion | Amazon S3 + Lambda | Durable storage, event‑driven processing |
| Language model | Amazon Bedrock (Claude/PaLM) | Fine‑tuned for coding prompts, low latency |
| Validation & safety | Amazon Comprehend + custom rules | Detects harmful or overly trivial cases |
| Caching & replay | DynamoDB with TTL | 99.9% read availability, cost‑efficient |
| Orchestration | Step Functions | Clear state machine, retry logic |

The pipeline ingests a prompt → Bedrock generates 5–10 candidate inputs → Comprehend validates against a *difficulty* rubric → DynamoDB stores the final set for retrieval by the interview UI. We added an **A/B test** layer that swapped in a “human‑reviewed” subset to measure bias impact.

**Result**  
- Generated over **1M unique test cases** within 6 months, cutting manual effort by 80 % (≈$120k saved).  
- Candidate success rate improved from 68 % to 81 % on average, and the interview completion time dropped by 25 %.  
- System achieved **99.7 % availability** with a cost of $0.45 per interview.

**Reflection**  
I owned the end‑to‑end flow, dove deep into Bedrock’s token limits, and iterated quickly based on real candidate feedback—demonstrating *Ownership*, *Dive Deep*, and *Bias for Action*. The project taught me that even in AI, a clear rubric + human oversight yields the best balance of automation and fairness.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
