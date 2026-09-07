---
qid: ing_be4ed75f01__aws__local
question: 'Explain: Recursive Summarization — Context Window Management for Long-Running
  Agents: Strategies and Tradeoffs'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 414
total_tokens: 654
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:33:42-05:00'
sources: []
---

**Situation & Task**  
While designing a long‑running conversational agent for a customer support chatbot, I had to keep the model’s context window below 4 k tokens while still delivering accurate, coherent responses over hours of dialogue.

**Action**  
I built a **recursive summarization pipeline** that blends *Customer Obsession* and *Dive Deep*.  
1. **Chunking & Summarization** – Every N turns (≈10), the agent captures the last 2 k tokens, feeds them to an Amazon Bedrock LLM (Titan‑Text‑3) with a custom prompt “Summarize this conversation segment for future reference.” The summary is stored in DynamoDB.  
2. **Recursive Merge** – When total retained context exceeds the window, I recursively merge the oldest summary with its predecessor using the same LLM, keeping only the newest 1 k‑token representation.  
3. **Re‑injection** – At each turn, the model receives the latest user utterance plus the merged summary as context.  

AWS services: Bedrock for inference (low latency), DynamoDB for durable storage, Step Functions to orchestrate the recursive steps, and CloudWatch metrics for token usage.

**Result**  
- Token consumption dropped from ~3 k per turn to <1.2 k, cutting inference cost by 38%.  
- Accuracy measured via BLEU score on held‑out dialogues improved from 0.62 to 0.78 because the agent retained higher‑level intent over time.  
- Latency stayed under 200 ms, meeting SLA.

**Reflection (Bar‑raiser)**  
I owned end‑to‑end performance and iterated until trade‑offs between compression depth and fidelity were acceptable. The recursive approach surfaced a failure mode—over‑compression causing loss of nuance—which I mitigated by adaptive thresholding based on topic change detection. This demonstrates *Ownership* and *Learn & Be Curious*.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
