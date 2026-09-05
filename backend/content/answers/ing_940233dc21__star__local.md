---
qid: ing_940233dc21__star__local
question: When is prompt compression worth it, and how would you do it?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 383
total_tokens: 622
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:29:05-05:00'
sources: []
---

**Situation** – At my last company we built a large‑language‑model‑powered chatbot that answered technical support tickets. The model’s context window was only 4 k tokens, but many user queries and internal knowledge snippets together exceeded this limit. We started seeing degraded responses when the conversation grew beyond two turns.

**Task** – I had to reduce the prompt size without losing critical information so we could keep the full dialogue history in memory and maintain response quality, all while staying within a 30‑second latency budget.

**Action** – First, I profiled token usage per component: user text (≈ 300 tokens), system instructions (200), FAQ snippets (1.2k), and internal knowledge graph embeddings (800). I applied two compression techniques:  
1) **Semantic summarization** of FAQ snippets using a lightweight transformer that outputs a 150‑token summary, preserving key troubleshooting steps.  
2) **Entity pruning** on the knowledge graph – only entities with relevance scores above 0.75 were kept, reducing tokens from 800 to 350. I then re‑ordered the prompt so the most recent user turn appeared first and wrapped the rest in a concise “Context” block.

I validated the approach by A/B testing: response accuracy rose from 72 % to 84 %, token count dropped from 2,700 to 1,200, and latency stayed under 28 ms.  

**Result** – The chatbot handled longer conversations without truncation, improving customer satisfaction scores by 12 pts in the next quarter. I learned that prompt compression is worth it when context window limits hurt user experience; a mix of semantic summarization and relevance‑based pruning often delivers the best trade‑off between fidelity and efficiency.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
