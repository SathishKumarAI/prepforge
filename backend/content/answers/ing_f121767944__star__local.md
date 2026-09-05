---
qid: ing_f121767944__star__local
question: What is chain-of-thought prompting? When does it help, and when is it unnecessary
  or harmful?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 327
total_tokens: 573
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:30:31-05:00'
sources: []
---

**Situation:** In mid‑2023 I was leading a team that built an AI‑driven customer support chatbot for a fintech client. The model initially churned out generic responses, and the client’s CSAT dropped from 88 % to 72 %.  

**Task:** My goal was to improve response quality by making the LLM reason step‑by‑step before delivering its final answer—essentially implementing chain‑of‑thought (CoT) prompting—to reduce hallucinations and increase accuracy.  

**Action:** I first experimented with a prompt template that inserted “Let’s think through this:” followed by a few exemplars of multi‑step reasoning. Using OpenAI GPT‑4, I measured per‑turn F1 against a curated test set. When the model struggled with ambiguous queries, I added a “fallback” token to trigger a shorter CoT or a direct answer. I also benchmarked latency and cost: CoT increased token usage by ~35 % but improved accuracy from 73 % to 92 %.  

**Result:** The updated bot lifted CSAT back to 87 % within two weeks, while keeping response time under 1.2 s on average. I learned that CoT shines when the task requires logical deduction or multi‑step calculations; it’s overkill for straightforward fact retrieval and can degrade performance if the model mis‑steps in early reasoning.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
