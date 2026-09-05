---
qid: ing_9f19394dc9__star__local
question: 'Explain: Q12: Explain the ReAct pattern — Question Bank'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 347
total_tokens: 585
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:50:21-05:00'
sources: []
---

**Situation** – In my last role at a fintech startup, we had an internal chatbot that was supposed to help users navigate loan applications. The bot’s responses were often generic; users complained it couldn’t answer follow‑up questions or correct misunderstandings.  

**Task** – I needed to redesign the conversational flow so the bot could reason about user intent, generate intermediate hypotheses, and request clarifications when needed—all while keeping latency under 1 s.

**Action** – I implemented a ReAct (Reason+Act) pattern:  
1. **Reason** – The model first generated a short “plan” token list (e.g., *check credit score → ask for income*).  
2. **Act** – It then executed each plan step, calling an external API to fetch the user’s credit history and using a prompt‑based function call to request missing data.  
3. I wrapped this in a lightweight state machine with Redis to persist partial plans across turns, allowing the bot to backtrack if an API failed.  
4. Finally, I added unit tests that simulated noisy user inputs to ensure the loop handled failures gracefully.

**Result** – After deployment, response quality improved by 35 % (measured via NPS scores), and we reduced average turn length from 5 to 3 messages. The ReAct pattern also cut overall latency by 20 ms per turn, keeping the user experience snappy. I learned that coupling reasoning steps with explicit API calls gives a model practical grounding for real‑world tasks.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
