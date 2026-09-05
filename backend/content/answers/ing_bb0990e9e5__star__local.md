---
qid: ing_bb0990e9e5__star__local
question: 'Explain: LLM-as-Judge for Step Quality — Evaluating Agentic Systems'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 322
total_tokens: 563
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:45:03-05:00'
sources: []
---

**Situation:**  
At my previous company we were building a conversational AI that could autonomously complete user tasks—booking flights, ordering groceries, and even troubleshooting software. Early beta tests revealed that the system often produced incomplete or incorrect action sequences, leading to frustrated users.

**Task:**  
I was tasked with creating an internal quality‑control loop that could evaluate each step the agent proposed before it executed anything in the real world, without relying on costly human review.

**Action:**  
I designed a “LLM-as-Judge” module. Every time the policy network suggested an action, the LLM (based on GPT‑4) received the conversation context and the candidate step. It scored the step on relevance, feasibility, and safety using a prompt that asked it to compare against a concise checklist of domain rules. I integrated this scoring into our reinforcement‑learning pipeline: only steps with a score above 0.85 were allowed; otherwise, the agent was forced to generate an alternative. We tuned temperature and added few‑shot examples of good vs bad steps to reduce hallucinations.

**Result:**  
After deployment, step‑level failure rates dropped from 12 % to 3 %, and user satisfaction scores rose by 18 %. I learned that a well‑prompted LLM can act as an efficient, scalable critic for complex agentic systems, turning subjective judgment into reproducible metrics.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
