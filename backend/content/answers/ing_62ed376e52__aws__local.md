---
qid: ing_62ed376e52__aws__local
question: 'Explain: Zero-Shot — Prompt Engineering | Lil''Log'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 578
total_tokens: 810
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:08:46-05:00'
sources: []
---

**Situation (S)** – While leading a cross‑functional team at my previous company, we were tasked with building a real‑time customer sentiment engine for an e‑commerce platform that had never seen labeled data for new product categories. The business demanded *zero‑shot* classification within 24 hours of launch.

**Task (T)** – Deliver a production‑ready system that could infer sentiment for unseen categories without retraining, with < 5 % error and sub‑second latency, all while staying under the $10k/month budget.

**Action (A)**  
1. **Prompt Engineering & Model Selection** – I chose Amazon Bedrock’s Anthropic Claude 3 for its strong few‑shot capabilities and built a prompt template that injects category context as natural language “seed.”  
2. **Architecture** –  
   * API Gateway + Lambda (Python) → orchestrates the request, adds prompts, calls Bedrock via the Bedrock SDK.  
   * DynamoDB stores category‑prompt mappings; S3 holds raw logs for audit.  
   * Step Functions trigger re‑prompting if confidence < 0.7.  
3. **Scalability & Cost** – Lambda’s 1 ms cold start + 30 ms Bedrock inference keeps average latency < 50 ms. With ~10k requests/day, the total cost is ~$5k/month.  
4. **Monitoring** – CloudWatch metrics and a SageMaker model monitor compare real‑time predictions against human review for drift.

**Result (R)** – Within 3 weeks we achieved 92 % accuracy on unseen categories, reduced manual labeling time by 80 %, and cut the monthly ops budget from $18k to $5k. The solution was later generalized across three additional product lines, scaling revenue impact to +$2M incremental sales.

---

**Leadership Principles Highlighted**

* **Ownership** – I owned the full end‑to‑end pipeline, from prompt design to cost control.  
* **Dive Deep** – Iterated on prompt wording, quantified error rates per category, and tuned Lambda concurrency until latency hit target.  

**What a Bar‑Raiser Looks For**  
* Evidence of ownership and initiative (e.g., choosing Bedrock, designing the entire stack).  
* Depth in technical decisions—why Claude 3 over GPT-4? How did I balance latency vs cost?  
* Quantified impact—accuracy %, cost savings, revenue lift.  
* Learning from failure—initial mis‑prompting led to higher error; we built a feedback loop that reduced drift by 30 % after the first iteration.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
