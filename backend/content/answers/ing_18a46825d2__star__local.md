---
qid: ing_18a46825d2__star__local
question: 'Explain: Context engineering vs. prompt engineering'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 361
total_tokens: 594
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:18:20-05:00'
sources: []
---

**Situation**  
In early 2024 I was leading a prototype for an internal chatbot that could auto-generate weekly marketing briefs from raw campaign data. The initial model, trained on GPT‑4, produced generic summaries that missed key insights, and our stakeholders complained the output felt “too scripted.”

**Task**  
I had to redesign the workflow so the AI understood nuanced business context—industry trends, brand voice, and specific KPIs—while still allowing quick, flexible prompts for different user personas.

**Action**  
First, I implemented *context engineering*: we built a lightweight knowledge base in Notion that captured brand guidelines, target metrics, and recent campaign results. Using LangChain, I wrapped the GPT‑4 model with a retrieval layer so each prompt automatically fetched relevant documents before generation. Next, I switched to *prompt engineering* for user-facing interactions: I crafted modular prompt templates that let marketers insert variables like “campaign name” or “desired tone.” These prompts included instruction cues (“focus on ROAS improvement”) and examples of past high‑quality briefs. Finally, I set up a feedback loop where the system logged generated briefs, compared them to human‑written ones using BLEU scores, and fed corrections back into the retrieval index.

**Result**  
Within two weeks, the chatbot’s precision jumped from 45% to 78% on key metric relevance. Marketing teams cut briefing time by 35%, and we received a 4.6/5 satisfaction rating in the internal survey. I learned that marrying context engineering (structured knowledge) with prompt engineering (dynamic instruction) creates AI outputs that feel both informed and adaptable.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
