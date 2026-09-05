---
qid: ing_58bfff8680__star__local
question: 'Explain: Core Dimensions — Llm Evaluation'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 414
total_tokens: 647
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:25:03-05:00'
sources: []
---

**Situation:**  
In my last role at a fintech startup, we were launching an AI‑powered customer support chatbot that relied on a large language model (LLM). Our beta test revealed inconsistent responses—some answers were factually wrong, others were too generic, and a few were outright irrelevant. The product team was concerned this would erode user trust.

**Task:**  
I had to design a systematic evaluation framework for the LLM that covered all core dimensions—accuracy, relevance, safety, diversity, and latency—so we could quantify performance gaps, prioritize fixes, and demonstrate progress to stakeholders.

**Action:**  
1. **Accuracy & Relevance:** Built an automated test harness using real customer queries (≈5 k) paired with human‑graded gold standards; calculated BLEU, ROUGE, and a custom “fact‑check” score via OpenAI’s FactCheck API.  
2. **Safety:** Ran the model through a safety filter library (e.g., OpenAI Moderation API) and manually reviewed edge cases for bias or harassment.  
3. **Diversity:** Employed a diversity metric based on embedding cosine similarity across outputs to ensure varied phrasing.  
4. **Latency:** Measured per‑inference time on our deployment stack, targeting <200 ms.  
I iterated the model with few‑shot prompts and temperature tuning, re‑evaluating after each tweak.

**Result:**  
The new evaluation pipeline reduced false‑positive rates by 37%, improved relevance scores from 0.62 to 0.81 (BLEU), and cut latency from 350 ms to 180 ms. We documented the methodology in a playbook that became the company’s standard for future LLM projects, and I learned how balancing quantitative metrics with qualitative safety checks is essential for trustworthy AI deployments.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
