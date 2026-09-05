---
qid: ing_5f619809c7__star__local
question: 'Explain: A team wants to ship a prompt change to a Claude-powered support
  agent. Design the eval gate that decides if it ships.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 252
output_tokens: 350
total_tokens: 602
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:39:07-05:00'
sources: []
---

**Situation:**  
Last month my product team rolled out a new FAQ dataset for our Claude‑powered customer support bot, but a senior engineer flagged that the updated prompts might increase hallucination rates during peak hours.

**Task:**  
I was tasked with designing an evaluation gate that would decide whether to ship the prompt change. The gate had to balance user satisfaction, latency, and hallucination risk while staying within our SLA of 95% accurate replies.

**Action:**  
First, I set up a controlled A/B test: 10 % of live traffic received the new prompts, the rest stayed on the baseline. We instrumented Claude’s confidence scores, response times, and flagged hallucinations via a custom post‑processing filter that matched key entities to our knowledge base. I defined three thresholds: (1) hallucination rate ≤ 3 %, (2) latency increase ≤ 20 ms, and (3) user satisfaction score ≥ 4.5/5 from live chat surveys. The gate also ran a nightly Monte‑Carlo simulation on the 24‑hour data to estimate variance. If all three metrics met thresholds with > 95% confidence, we’d trigger a full rollout.

**Result:**  
The new prompts reduced average response time by 18 ms and increased user satisfaction from 4.32 to 4.58 while keeping hallucinations at 2.1 %. The gate’s simulation confirmed < 2 % probability of exceeding thresholds, so we shipped confidently. I learned that combining real‑time metrics with probabilistic safety nets is essential when deploying AI changes under strict SLAs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
