---
qid: ing_a285a9eaa8__star__local
question: 'Explain: Reasoning techniques — Prompt Engineering And Context'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 329
total_tokens: 564
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:57:48-05:00'
sources: []
---

**Situation:**  
In my last role as a data scientist at a fintech startup, we were building an automated loan‑approval chatbot. The initial model churned out generic responses that missed key regulatory details, leading to compliance flags and a 15 % drop in user satisfaction scores.

**Task:**  
I needed to redesign the prompt architecture so the bot could reason about each applicant’s context—credit score, income bracket, local regulations—and produce tailored, compliant replies within two seconds per interaction.

**Action:**  
First, I mapped out the decision tree and identified critical variables. Then I crafted a hierarchical prompt framework: an outer “context” prompt that injects user data and regulatory constraints, followed by a series of inner prompts for specific reasoning steps (risk assessment, eligibility check, offer generation). I used LangChain to chain these prompts, passing intermediate outputs as context for the next step. To keep latency low, I fine‑tuned a distilled Llama model on 3 k internal conversation logs and introduced token‑budget constraints in each prompt stage.

**Result:**  
The new system cut compliance errors by 92 % and increased user approval satisfaction from 70 % to 88 %. Latency stayed below 1.8 s per request, meeting our SLA. I learned that thoughtful context layering turns a black‑box LLM into a transparent decision engine, balancing speed, accuracy, and regulatory safety.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
