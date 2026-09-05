---
qid: ing_2b7d13d786__star__local
question: 'Explain: Instruction Prompting — Prompt Engineering | Lil''Log'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 376
total_tokens: 614
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:54:48-05:00'
sources: []
---

**Situation**  
During a client‑facing data science sprint at a fintech startup, the marketing team needed an automated way to generate personalized email subject lines that would increase click‑through rates (CTR). The existing rule‑based system hit a plateau—CTR was stuck at 12% for two consecutive months.

**Task**  
I had to build a prompt‑engineering solution that could produce high‑quality, context‑aware subject lines in real time while keeping latency under 200 ms per request. The goal was a CTR lift of at least 5%.

**Action**  
I leveraged OpenAI’s GPT‑4 with an instruction‑prompting framework. First, I curated a small set of 50 successful historical subject lines and their associated customer segments. Using these as examples, I crafted a prompt template: “You are a copywriter for fintech emails. Given the user profile {profile} and campaign goal {goal}, write one compelling subject line.”  
I then implemented a token‑budget strategy: limiting context to 300 tokens and using a beam width of 3 to keep inference fast. To ensure compliance with brand guidelines, I added a post‑processing filter that rejects lines exceeding a predefined profanity list or containing disallowed keywords. Finally, I integrated the model into our microservice stack via FastAPI, adding a caching layer keyed on user segment.

**Result**  
Within three weeks of deployment, the CTR rose to 17%—a 5 percentage‑point lift. Latency stayed below 180 ms for 95% of requests. I learned that carefully designed instruction prompts, coupled with lightweight runtime constraints, can turn a large language model into an efficient production tool without sacrificing quality or compliance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
