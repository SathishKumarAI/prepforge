---
qid: ing_8b0fa7760b__aws__local
question: You clearly use Perplexity - what's broken, and what would you ship to fix
  it?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 403
total_tokens: 641
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:40:11-05:00'
sources: []
---

**Customer Obsession | Ownership**

*Situation:* In my last role building an internal chatbot for the sales team, we used Perplexity to rank candidate responses. End‑users reported that relevant answers were often buried behind high‑scoring, generic sentences, hurting conversion rates by **18 %**.

*Task:* Own the end‑to‑end pipeline: from data ingestion to model inference, and ship a solution that surfaces truly useful replies without manual tweaking.

*Action:*  
1. **Data‑Deep Dive:** Collected 200k labeled conversations; discovered that perplexity alone ignores semantic relevance.  
2. **Design:** Built a two‑stage ranking system on AWS:
   * **Stage 1 – Perplexity Filter** (AWS Lambda + SageMaker endpoint) to prune the candidate set.  
   * **Stage 2 – Relevance Scorer** using a fine‑tuned BERT model hosted on **Amazon SageMaker Inference** with GPU instances, scoring against a custom “relevance” metric derived from user click‑through and dwell time.  
3. Deployed via **AWS Step Functions** for orchestrated latency <200 ms. Added **CloudWatch** metrics to monitor per‑query perplexity vs. relevance scores.

*Result:* After A/B testing, the new pipeline increased sales‑team reply accuracy by **32 %**, boosted conversion rates by **12 %**, and cut inference cost by **15 %** (thanks to early pruning).  

*Learnings:* Realized that a single metric rarely captures user intent; layered models + observability give better ownership. I documented the failure modes, shared lessons across teams, and set up a quarterly “Model Health” review—proof of continuous improvement.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
