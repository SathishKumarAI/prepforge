---
qid: ing_2f840a96ba__star__local
question: 'Explain: You have retrieved chunks and a question. How do you actually
  build the prompt? Assume some documents are irrelevant and two of them contradict
  each other.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 256
output_tokens: 369
total_tokens: 625
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:03:51-05:00'
sources: []
---

**Situation:**  
In a recent product‑launch, our team needed to create an AI assistant that could answer customer support queries about a new smart thermostat. The knowledge base contained dozens of technical documents; only a handful were relevant to the question “What is the maximum temperature setting?” Two PDF manuals even listed conflicting values (90 °F vs 95 °F).  

**Task:**  
Build a prompt for our LLM that delivers a concise, accurate answer while signaling uncertainty where sources disagree.

**Action:**  
1. **Chunk selection** – I wrote a lightweight relevance scorer using TF‑IDF vectors to rank chunks; only the top three scored above a threshold were kept.  
2. **Deduplication & contradiction detection** – Using cosine similarity on chunk embeddings, I clustered near‑duplicate passages and flagged contradictory statements by comparing extracted numeric values with a simple rule engine.  
3. **Prompt construction** – The final prompt began with “You are an expert HVAC technician.” Then I concatenated the selected chunks in order of relevance, appended a note: “Note: Sources 2 and 4 provide conflicting maximum temperature values (90 °F vs 95 °F).” Finally I added the user question.  
4. **Post‑processing** – Parsed the LLM’s response to extract the temperature value; if multiple numbers appeared, I returned both with a confidence flag.

**Result:**  
The assistant answered in under 0.7 seconds and achieved a 92% accuracy rate on a blind test set of 120 queries. The contradiction handling reduced customer follow‑ups by 35%. I learned that automated relevance filtering combined with lightweight semantic checks can keep prompts focused while transparently exposing source conflicts.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
