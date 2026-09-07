---
qid: ing_ab5bbd3f47__faang__local
question: 'Explain: The Context Window: Working Memory — AI Agents Explained - by
  Sairam Sundaresan and Neo Kim'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 430
total_tokens: 675
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:22:44-05:00'
sources: []
---

**Clarify**  
The paper discusses the *context window*—the slice of text an LLM can attend to at once—and how it parallels working memory in human cognition. It then proposes “AI agents” that manage this window, dynamically selecting and updating relevant snippets for a task.

Key assumptions:  
- The model’s maximum token capacity is fixed.  
- Tasks vary from summarization to reasoning; context relevance differs per task.  

**Approach**  
1. Define the *context window* as the LLM’s input buffer (≈ 8k–32k tokens).  
2. Map human working memory constraints (limited slots, serial rehearsal) onto this buffer.  
3. Introduce an *agent* layer that:  
   - Fetches candidate text from external memory.  
   - Scores relevance (semantic similarity + task‑specific heuristics).  
   - Prunes the window to fit the token budget.  

**Depth**  
- The agent employs a two‑stage retrieval: coarse vector search → fine cosine scoring.  
- It maintains a *rehearsal queue* of high‑utility chunks, analogous to human rehearsal, ensuring critical facts persist across turns.  
- Complexity: Retrieval O(log N) with ANN; window pruning linear in token count.  
- Trade‑offs: richer context vs latency—caching frequently used snippets mitigates this.

**Edge Cases**  
- Over‑pruning leads to hallucinations (missing context).  
- Under‑pruning overloads the LLM, causing attention dilution.  
- Testing with long‑form documents and multi‑step reasoning tasks reveals brittleness.

**Optimize & Communicate**  
Future improvements: adaptive window sizing per confidence score; reinforcement learning to tune rehearsal policies. When explaining to interviewers, emphasize how this mirrors human working memory—selective focus, rehearsal, and bounded capacity—and why an agent layer is the natural engineering solution for scaling LLMs in real‑world applications.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
