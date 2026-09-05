---
qid: ing_4e115185c4__star__local
question: 'Explain: Pitfall 10: Treating Prompts as Magic — Common Pitfalls'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 280
total_tokens: 522
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:04:40-05:00'
sources: []
---

**Situation**  
During a sprint to launch an internal chatbot for the support team, I was handed a list of “sample prompts” that supposedly covered all user queries. The product owner said, “Just drop these into the LLM; it will do the rest.”  

**Task**  
I needed to ensure the bot handled edge cases and avoided hallucinations while staying within cost limits.  

**Action**  
First I ran a full audit of the provided prompts against real support tickets—over 3,000 records—and found 47% were ambiguous or incomplete. I rewrote them using prompt‑engineering best practices: added context tokens, clarified intent, and introduced few‑shot examples. Then I built an automated test harness in Python that sent each prompt to the model, captured outputs, and flagged hallucinations or irrelevant responses. Finally, I set up a monitoring dashboard with OpenAI’s usage metrics so we could track token consumption per query type.  

**Result**  
The bot’s accuracy rose from 68% to 92% on our test set, and we cut average token usage by 28%, saving roughly $1,200/month in API costs. I learned that treating prompts as “magic” is a recipe for waste; rigorous validation and continuous monitoring are essential for reliable AI deployments.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
