---
qid: ing_c27ab44f11__star__local
question: 'Explain: System Prompt and User Prompt — What is Context Engineering'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 302
total_tokens: 540
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:58:43-05:00'
sources: []
---

**Situation:**  
While working on a production chatbot for a fintech client, we noticed that the model’s responses were often too generic or missed critical compliance language. The developers had trained the base LLM on a large corpus but hadn’t tailored its behavior to our specific domain.

**Task:**  
I was tasked with engineering the prompts so that every user query would be answered in a compliant, informative style without retraining the model from scratch.

**Action:**  
First, I crafted a **system prompt** that set the overarching persona: “You are a compliance‑aware financial advisor. Always include risk warnings and adhere to regulatory guidelines.” This establishes the context for all interactions. Next, I designed dynamic **user prompts** by wrapping each incoming query with contextual cues like “User asks: {query}. Remember you’re a compliant advisor.” I also built a lightweight prompt cache that pre‑loads domain facts (e.g., key regulations) into the system prompt to reduce token usage. Finally, I iterated on prompt length and phrasing based on A/B testing results from our internal QA team.

**Result:**  
After deployment, we saw a 35 % drop in post‑deployment compliance flags and a 22 % increase in user satisfaction scores. The exercise taught me that effective context engineering is about clear role definition and iterative prompt tuning rather than just feeding more data into the model.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
