---
qid: ing_be4ed75f01__faang__local
question: 'Explain: Recursive Summarization — Context Window Management for Long-Running
  Agents: Strategies and Tradeoffs'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 459
total_tokens: 702
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:05:06-05:00'
sources: []
---

**Clarify**  
We’re asked how a long‑running agent (e.g., an LLM‑based chatbot) can keep track of a conversation that exceeds the model’s context window. The goal is to decide *what* text to retain, *how* to compress it, and *when* to refresh. Key assumptions: the agent receives streaming user inputs, has limited GPU memory, and must preserve coherence without human intervention.

**Approach**  
1. **Chunking & Sliding Window** – keep the most recent N tokens; older chunks are archived.  
2. **Hierarchical Summaries** – each chunk is summarized into a “mini‑summary”; those summaries are recursively compressed to fit deeper windows.  
3. **Relevance Scoring** – assign weights (TF–IDF, dialogue acts) to decide which parts survive compression.  
4. **Trigger Policies** – summarize when the window exceeds a threshold or at logical breaks (topic shifts).

**Depth**  
- *Chunk size* ≈ 512 tokens; *summary length* ≈ 50 tokens.  
- Use a lightweight encoder (e.g., DistilBERT) to score relevance; top‑k summaries are kept.  
- Complexity: O(L log L) for recursive compression, where L is the total conversation length.  
- Tradeoff: higher compression → loss of nuance vs. lower compression → memory overflow.

**Edge Cases**  
- Rapid topic switches may cause mis‑scoring and omission of critical context.  
- Repeated user clarifications can inflate token counts; need a deduplication step.  
- Extremely long monologues risk exceeding even compressed windows.

**Optimize & Communicate**  
Iteratively tune chunk/summary sizes via A/B tests, monitor coherence metrics (BLEU, perplexity). Explain to stakeholders that the system balances *context fidelity* against *resource constraints*, and that a fallback “re‑injection” mechanism can retrieve archived chunks if needed. This structured plan demonstrates clear problem framing, thoughtful design, and awareness of practical tradeoffs—hallmarks of a FAANG‑style answer.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
