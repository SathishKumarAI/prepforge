---
qid: ing_32667a166e__star__local
question: 'Explain: LLM Evaluation and Guardrails — Ml Interview Prep'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 366
total_tokens: 604
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:09:15-05:00'
sources: []
---

**Situation:**  
At my previous company we were launching a customer‑support chatbot that used an open‑source LLM. The product manager was worried that the model might produce biased or unsafe responses, especially when handling sensitive queries.

**Task:**  
I had to design an end‑to‑end evaluation pipeline that quantified both performance (accuracy on intent classification) and safety (off‑topic or harmful content), then build guardrails that could be toggled in production without slowing inference.

**Action:**  
First, I curated a balanced test set of 5,000 real support tickets, labeling them for intent, sentiment, and potential bias. Using the 🤗 Transformers library, I ran the LLM through this set and collected metrics: F1‑score (0.84), BLEU for response similarity, and a custom “harm score” from OpenAI’s Moderation API. To surface blind spots, I performed adversarial prompting with 200 edge cases. For guardrails, I wrapped the model in a middleware that applied a safety filter (threshold 0.6) and a fallback rule‑based system for high‑risk prompts, all within a 15 ms latency budget.

**Result:**  
The evaluation revealed a 12% drop in harmful outputs after adding the safety filter, while overall intent accuracy stayed above 82%. In production, we saw a 30% reduction in support tickets flagged for inappropriate content and a 5% increase in user satisfaction scores. I learned that systematic testing combined with lightweight runtime checks is essential to responsibly scale LLMs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
