---
qid: ing_96df153b64__aws__local
question: How do you select and order few-shot examples? What are the known pitfalls?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 531
total_tokens: 766
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:07:15-05:00'
sources: []
---

**Situation / Task** – While launching a customer‑centric recommendation engine on SageMaker, I had to build a prompt that used few‑shot examples for GPT‑4. The goal was 30 % lift in click‑through rate (CTR) with minimal latency.

**Action** –  
1. **Define the target distribution**: I extracted the top‑50 product categories from production logs and created a stratified pool of 5,000 example conversations.  
2. **Sampling & ordering** – For each inference batch I drew a random subset per category, then sorted by *recency* (most recent first) to bias the model toward current trends.  
3. **Validate order effects**: Using an A/B test on 200 k requests, I compared random vs. chronological ordering and measured CTR.  
4. **Automate in Lambda + Bedrock** – The Lambda function pulls the ordered examples from S3, injects them into the prompt, and streams the result back to API Gateway.  

**Result** – The chronologically‑ordered few‑shot prompt delivered a 32 % lift in CTR (vs. baseline 20 %) while keeping inference latency under 120 ms, well within SLA. Cost dropped 18 % by reducing unnecessary model invocations.

**Learnings & Pitfalls** –  
- **Distribution shift**: Without stratification, the prompt over‑represented niche categories, hurting recall.  
- **Bias from order**: Random ordering caused “priming” bias; chronological ordering mitigated it.  
- **Overfitting**: Reusing the same few examples across sessions led to stale predictions—resolved by periodic pool refresh.

---

### Leadership Principles Anchored
- **Customer Obsession** – Targeted CTR improvement directly benefits user engagement.  
- **Ownership & Dive Deep** – I built end‑to‑end sampling logic, validated assumptions with data, and iterated on the prompt design.  

Bar‑raisers focus: clear ownership of the sampling pipeline, depth in understanding order effects, quantified impact (CTR lift), and evidence of learning from initial failures.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
