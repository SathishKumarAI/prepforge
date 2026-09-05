---
qid: ing_187d3ab420__star__local
question: 'Explain: Online evaluations — AI Agent Testing and Evaluation | LangWatch'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 392
total_tokens: 630
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:17:51-05:00'
sources: []
---

**Situation:**  
At my previous startup we launched a conversational AI that needed real‑time monitoring of safety and bias. The product was live on a public forum where users could interact with the bot, so any problematic response would surface immediately.

**Task:**  
I had to build an automated online evaluation pipeline—essentially what LangWatch calls “AI Agent Testing and Evaluation”—to continuously score each interaction for factual correctness, toxicity, and policy compliance, while feeding those metrics back into the training loop without affecting user experience.

**Action:**  
First, I wrapped every API call in a lightweight interceptor that captured prompt‑response pairs. Then I used LangWatch’s open‑source “Agent Monitor” library to stream those logs to a Kubernetes cluster where we ran parallel inference against our custom evaluation models (e.g., a toxicity classifier and a fact‑checking LLM). The pipeline aggregated scores into an Elasticsearch index, and a Grafana dashboard visualized daily trends. I also set up alerts: if the mean toxicity score exceeded 0.2 for any hour, an automated rollback script reverted the last model update. Finally, we scheduled weekly “red‑team” sessions where developers manually reviewed flagged samples to refine the evaluation thresholds.

**Result:**  
Within two months, the average toxicity score dropped from 0.38 to 0.12 and factual errors decreased by 47 %. The live monitoring reduced post‑deployment incidents by 90 %, and we cut manual review time by 70 % thanks to the automated alerts. I learned that a well‑engineered online evaluation loop is as critical as offline testing—especially for user‑facing AI where safety must be measured in real time.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
