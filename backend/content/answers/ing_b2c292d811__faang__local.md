---
qid: ing_b2c292d811__faang__local
question: Your new prompt scores 78% vs the old prompt's 74% on a 100-example eval.
  Do you ship it?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 249
output_tokens: 449
total_tokens: 698
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:39:32-05:00'
sources: []
---

**Clarify**  
You’re deciding whether to release a new AI prompt that achieved 78 % accuracy on an internal test set versus the legacy prompt’s 74 %. Key assumptions: (1) the evaluation dataset is representative of production traffic; (2) “accuracy” reflects business‑critical quality (e.g., user satisfaction, revenue impact); (3) deployment risk (latency, cost, safety) is comparable between prompts.

**Approach**  
1. Validate the test set’s representativeness via a holdout or A/B study.  
2. Quantify business impact: estimate lift in NPS, conversion, or revenue per user.  
3. Assess operational costs and risk (e.g., inference latency, hallucination frequency).  
4. If benefits outweigh risks, ship with monitoring; otherwise iterate.

**Depth**  
- **Statistical test**: use a two‑sample proportion test to confirm 78 % > 74 % is significant at α=0.05.  
- **Cost–benefit**: Suppose each prompt costs $0.001 per inference and the new one adds 5 ms latency. If the accuracy lift yields a 1 % higher conversion on 10M users/month, that’s an extra $500k revenue versus negligible cost increase.  
- **Risk mitigation**: Implement fallback to legacy prompt for edge cases or add safety checks.

**Edge Cases**  
- Dataset shift could make the new prompt worse in production.  
- Rare but costly hallucinations might offset accuracy gains.  
- Latency spikes under load could degrade UX.

**Optimize & Communicate**  
- Start with a staged rollout (5 % traffic) and monitor key metrics daily.  
- If lift persists, roll out gradually; otherwise rollback.  
- Present findings in a concise dashboard: accuracy delta, statistical significance, projected revenue lift, cost impact, risk flags.  

By grounding the decision in statistical validation, business ROI, and operational safety, you demonstrate structured thinking and clear communication—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
