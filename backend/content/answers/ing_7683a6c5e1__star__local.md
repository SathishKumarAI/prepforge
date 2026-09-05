---
qid: ing_7683a6c5e1__star__local
question: 'Explain: Prompt Engineering | Lil''Log'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 334
total_tokens: 568
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:30:53-05:00'
sources: []
---

**Situation** – At my previous startup we built an internal knowledge‑base chatbot that answered employee queries about HR policies. The first prototype used a generic prompt (“Answer the following question”) and only hit 60 % accuracy on our test set, leading to frustration and low adoption.

**Task** – I was tasked with improving relevance and precision of responses while keeping latency under 200 ms for live chat.

**Action** – I applied prompt engineering: first, I rewrote the system message to explicitly define the assistant’s role (“You are an HR policy expert that provides concise, policy‑compliant answers.”). Next, I experimented with few‑shot prompting—adding two example question–answer pairs that highlighted required format and tone. I also introduced a temperature setting of 0.2 for consistency and wrapped the prompt in a JSON schema to enforce answer structure. To validate changes, I used A/B testing on 10 % of traffic and monitored BLEU scores against our gold answers.

**Result** – Accuracy rose from 60 % to 92 %, user satisfaction scores increased by 35 %, and average response time stayed below 180 ms. I learned that carefully crafted prompts can dramatically improve LLM performance without costly fine‑tuning, and that small adjustments in temperature and example selection are powerful levers for quality control.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
