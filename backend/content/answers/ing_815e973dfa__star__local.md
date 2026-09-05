---
qid: ing_815e973dfa__star__local
question: 'Explain: 🔍 Open Analytics — GitHub - vibrantlabsai/ragas: Supercharge Your
  LLM Application Evaluations \ud83d\ude80 \u00b7 GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 263
output_tokens: 385
total_tokens: 648
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:52:02-05:00'
sources: []
---

**Situation:**  
At my last startup we launched a conversational AI product for customer support, but our internal dashboards showed that user satisfaction dropped by 18 % after the new model rollout. We needed a systematic way to evaluate why the large language model (LLM) was underperforming.

**Task:**  
I had to build an evaluation pipeline that could automatically score each generated response on relevance, factual accuracy, coherence, and safety—metrics that were hard to measure manually at scale.

**Action:**  
I discovered **ragas** on GitHub. It’s a lightweight Python library that plugs into any LLM pipeline and generates benchmark scores using built‑in metrics like BLEU, METEOR, ROUGE, and newer ones such as QAGS for factuality. I integrated ragas with our existing LangChain stack: after each user query, the assistant’s reply was passed to ragas, which compared it against a curated gold standard set stored in a PostgreSQL table. We scripted the evaluation into our CI/CD pipeline using GitHub Actions, so every new model version automatically produced a JSON report of all metrics. The library also supports custom metric functions, so we added a “context‑coverage” score that checks if the response cites relevant knowledge base articles.

**Result:**  
The automated reports highlighted that the LLM was missing key policy references and often hallucinated product details—metrics we quantified as 0.42 vs. 0.78 on factuality scores. After fine‑tuning with a higher weight on safety constraints, we saw an 11 % lift in overall user satisfaction within two weeks. I learned that open tools like ragas turn qualitative concerns into measurable data, making it easier to prioritize engineering fixes and validate ROI.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
