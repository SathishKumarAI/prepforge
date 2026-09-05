---
qid: ing_38ad109d86__eli5__local
question: The agent answers from a customer's knowledge base, which contains outdated
  and contradictory articles. How do you prevent confidently wrong answers?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 171
output_tokens: 235
total_tokens: 406
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:05:53-05:00'
sources: []
---

Imagine the knowledge base is a dusty attic full of old recipe books. Some pages say “add salt first,” others say “wait until after the sauce.” If you just read any page and shout out an answer, you’ll often give a wrong or contradictory dish.

To keep the AI from confidently shouting the wrong recipe, treat it like a careful cook who checks each book before using it:

1. **Rate the books** – let the system score how reliable each article is (age, source, user votes).  
2. **Ask for evidence** – before answering, have the AI cite the specific paragraph and show its confidence level.  
3. **Cross‑check** – if two articles disagree, the system flags that topic and either asks the customer a clarifying question or says, “I’m not sure; let’s find a fresh source.”  

By scoring trustworthiness, demanding evidence, and warning when contradictions arise, the AI stops confidently giving wrong answers—just like a cook who never serves a dish made from a torn recipe.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
