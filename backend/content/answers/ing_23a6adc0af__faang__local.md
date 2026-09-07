---
qid: ing_23a6adc0af__faang__local
question: 'Explain: Conversation memory — Customer Support Agent'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 431
total_tokens: 661
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:06:55-05:00'
sources: []
---

**Clarify**  
The interviewer wants a concise explanation of *conversation memory* in the context of an AI‑powered customer‑support agent.  
Assumptions:  
1. The system processes user messages in real time.  
2. It must remember prior turns to maintain context, resolve ambiguities, and personalize responses.  
3. Memory should be bounded (for latency & privacy).

**Approach**  
1. *State representation*: encode each turn as a vector or structured slot set.  
2. *Memory store*: use a sliding window of the last N turns plus key‑value pairs for long‑term facts.  
3. *Retrieval*: attention over stored vectors (or key‑based lookup) to fetch relevant context before generation.

**Depth**  
- **Short‑term memory**: keep the last 5–10 turns in a FIFO buffer; feed them concatenated into the language model’s prompt. Complexity O(N·L).  
- **Long‑term memory**: extract salient facts (e.g., “order #1234”, “issue type: billing”) and store as key/value pairs in a small vector database. Retrieval is constant‑time via hash or kNN over compressed embeddings.  
- During generation, the model conditions on both buffers; we can use *prompt engineering* to signal which facts are crucial (“Recall that the user ordered item X”).  

**Edge Cases**  
- **Privacy**: purge memory after a session or upon user request.  
- **Mismatched turns**: handle out‑of‑sequence messages by re‑indexing.  
- **Hallucination**: guard against fabricating facts from stale memory.

**Optimize & Communicate**  
Improvements include adaptive window size (grow for complex queries), caching of attention weights, and fine‑tuning the model on dialog datasets with explicit memory signals. I would explain that this architecture balances latency, scalability, and compliance—critical in a FAANG customer‑support setting.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
