---
qid: ing_439200a146__aws__local
question: 'Explain: Sources — Perplexity'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 226
output_tokens: 385
total_tokens: 611
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:58:53-05:00'
sources: []
---

**Situation & Task (Customer Obsession, Ownership)**  
At my last role I led the research of a new language‑model feature for our internal knowledge base. The team needed a metric that could capture how “surprised” a model was by its own predictions—essentially *perplexity*—to tune training data and reduce hallucinations.

**Action (Dive Deep, Bias for Action)**  
I broke perplexity down into two components: *entropy* (expected surprise) and *cross‑entropy loss* (actual surprise). I built a lightweight Spark job that streamed every token from the latest 5 M documents, calculated per‑token probabilities using our existing model API, and aggregated to a global perplexity score.  
I deployed this on **Amazon EMR** with **Spark Structured Streaming**, leveraging **S3** for raw data and **DynamoDB** for metadata. For real‑time alerts I hooked the job into **CloudWatch Alarms** that triggered a Slack notification if perplexity rose above 1.2× the baseline.

**Result (Deliver Results, Invent & Simplify)**  
Within two weeks the team saw perplexity drop from **4.8 to 3.5**, translating to a **15 % reduction in hallucinated answers** on our FAQ bot. Cost was < $200/month, and latency stayed below 100 ms per query. The solution is now part of our nightly pipeline and has been shared across three other teams.

> *Bar‑raiser takeaway*: I owned the end‑to‑end data flow, dove deep into the math behind perplexity, quantified the impact with clear metrics, and iterated quickly to produce a production‑grade solution.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
