---
qid: ing_2406888800__star__local
question: 'Explain: Interview questions — Prompt Engineering And Context'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 313
total_tokens: 547
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:41:12-05:00'
sources: []
---

**Situation:**  
During my internship at a fintech startup, we were building an automated customer support chatbot that needed to answer regulatory compliance questions accurately. Early tests showed the bot often produced vague responses or ignored context, leading to a 30 % increase in user complaints.

**Task:**  
I was tasked with improving the prompt engineering so the model understood the legal context and delivered precise, policy‑compliant answers while keeping latency under 1 second.

**Action:**  
First, I mapped out the most common question categories and built a structured prompt template that inserted the user’s query, the relevant regulatory snippet, and a brief “tone guide” flag. I experimented with chain‑of‑thought prompts to get the model to justify its answer before finalizing it. Using OpenAI’s fine‑tuning API, I trained on 2,000 hand‑labeled Q&A pairs that included edge cases. I also added a post‑processing filter that flagged any response containing prohibited phrasing and routed it for human review.

**Result:**  
The refined prompts cut error rates from 30 % to 4 %, reduced average response time by 15 ms, and earned a 95 % satisfaction score in the beta launch. I learned that careful context framing and iterative prompt testing are as critical as model choice when deploying AI in regulated domains.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
