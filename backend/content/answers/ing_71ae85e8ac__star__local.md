---
qid: ing_71ae85e8ac__star__local
question: 'Explain: Metric-Driven Optimization — Prompt Optimization Dspy'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 317
total_tokens: 553
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T02:14:34-05:00'
sources: []
---

**Situation:**  
In a client‑facing NLP product, the search relevance score had dipped from 0.82 to 0.68 after a recent model update. The team needed to quickly regain user satisfaction without redeploying the entire system.

**Task:**  
I was tasked with optimizing the prompt for our retrieval‑augmented generation pipeline so that the relevance metric (Mean Reciprocal Rank) returned above 0.80 within two sprints, while keeping inference latency under 150 ms per query.

**Action:**  
Using Dspy’s PromptTemplate and Metric class, I first formalized the evaluation loop: each candidate prompt was scored against a labeled validation set to compute MRR. I then applied Dspy’s `Tuning` module to automatically generate variations of the prompt, adjusting token weights for context length and entity emphasis. Parallel GPU workers evaluated 120 prompts per cycle; I filtered out those with latency >150 ms. After three iterations, I settled on a concise prompt that highlighted key entities and used a “short‑answer” style.

**Result:**  
The optimized prompt raised MRR from 0.68 to 0.82 in production, matching the pre‑update baseline while cutting average latency by 12%. I learned that coupling automated metric feedback with Dspy’s modular tuning can drastically reduce manual prompt engineering time and produce measurable gains in user experience.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
