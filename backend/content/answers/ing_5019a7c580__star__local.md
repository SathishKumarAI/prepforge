---
qid: ing_5019a7c580__star__local
question: 'Explain: Advanced ICL: Analogy and "Few-Shot CoT"'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 341
total_tokens: 582
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:08:36-05:00'
sources: []
---

**Situation:**  
During a product‑launch sprint at my previous company, we needed a real‑time FAQ chatbot for a medical device portal. The existing LLM struggled with domain‑specific jargon and couldn’t explain complex troubleshooting steps in layman terms.

**Task:**  
I was tasked to improve the bot’s reasoning ability so it could generate step‑by‑step explanations (“chain of thought”) while staying within strict token limits, all without retraining the model.

**Action:**  
I used advanced in‑context learning by crafting a prompt that included an analogy: “Imagine a mechanic explaining engine repairs to a non‑technical friend.” This framed the language and structure. Then I added five few‑shot examples where each example showed a problem, a short chain of reasoning, and a concise answer. The chain‑of‑thought was explicitly written out in the prompt, guiding the model to replicate that pattern. I tuned the temperature to 0.7 and set max tokens to 200 to keep responses readable. Finally, I evaluated the output with a rubric scoring clarity, correctness, and length.

**Result:**  
The chatbot’s precision rose from 68 % to 92 % on our validation set, and average response time dropped by 30 %. Users reported that explanations felt “human‑like” and easy to follow. I learned that combining contextual analogies with few‑shot chain‑of‑thought prompts can unlock deep reasoning in LLMs without any model changes.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
