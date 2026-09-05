---
qid: ing_50f98cf41e__star__local
question: 'Explain: AMA with Emily Witko, HF Recruiter — AMA with Emily Witko, HF
  Recruiter - Community Calls - Hugging Face Forums'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 255
output_tokens: 335
total_tokens: 590
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:10:10-05:00'
sources: []
---

**Situation:**  
During my internship at a mid‑size fintech firm, we were tasked with building an internal knowledge hub for new hires. The HR team wanted to make onboarding faster by providing quick answers to common questions.

**Task:**  
I was responsible for designing and launching a live Q&A platform that would let employees ask experts in real time—essentially creating an “Ask Me Anything” (AMA) series with our senior recruiter, Emily Witko, and hosting it on Hugging Face’s community forums.

**Action:**  
First, I mapped out the workflow: scheduled weekly slots, drafted a set of pre‑approved questions to avoid duplication, and integrated a Slack bot that posted reminders. Then I leveraged Hugging Face’s “🤗Spaces” to host a live chat interface powered by a fine‑tuned GPT‑4 model that could fetch HR policy docs on demand. I also built a small Flask app to capture analytics—questions per session, average response time, and sentiment scores using the `transformers` pipeline. Finally, I ran a pilot with 20 employees and collected feedback through a quick survey.

**Result:**  
The AMA series attracted an average of 35 participants per session, cutting the average time new hires spent searching for policy answers from 45 minutes to just 8 minutes. HR reported a 25 % increase in onboarding satisfaction scores, and I learned how to blend conversational AI with community platforms to create scalable knowledge sharing solutions.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
