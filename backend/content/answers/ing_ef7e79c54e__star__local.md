---
qid: ing_ef7e79c54e__star__local
question: 'Explain: Dimension 2: Groundedness (Faithfulness)'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 322
total_tokens: 560
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:26:54-05:00'
sources: []
---

**Situation:**  
While leading a product‑launch for our new chatbot at a fintech startup, we discovered that early user feedback highlighted hallucinations—answers that were confident but factually incorrect.

**Task:**  
I needed to design and implement a system that would ensure the AI’s responses remained grounded in verified data, improving trustworthiness before the public rollout.

**Action:**  
First, I mapped the conversation flow to identify high‑risk prompts. Then I integrated a retrieval‑augmented generation pipeline: each user query triggered a vector search against our curated knowledge base (SQL tables and internal policy docs). The language model was fine‑tuned on a “fact-checking” objective using reinforcement learning from human feedback, penalizing any statement that deviated from retrieved evidence. We added an explicit confidence score layer; if the score fell below 0.8, the bot would defer to a human or provide a disclaimer. Finally, I set up continuous monitoring with automated alerts for drift in factual accuracy.

**Result:**  
Post‑deployment metrics showed a 67 % drop in user-reported hallucinations and a 35 % increase in session length, indicating higher engagement. Internally, we reduced the need for manual review from 120 to 45 hours per week. I learned that combining retrieval augmentation with RLHF is essential for maintaining groundedness without sacrificing fluency.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
