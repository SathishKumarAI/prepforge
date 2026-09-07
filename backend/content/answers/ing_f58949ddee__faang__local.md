---
qid: ing_f58949ddee__faang__local
question: 'Explain: Progressive Tool Discovery for Token Efficiency'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 601
total_tokens: 832
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:10:52-05:00'
sources: []
---

**Clarify**  
You’re asking how a *progressive tool discovery* system can improve *token efficiency* in an LLM pipeline (e.g., prompt‑engineering, retrieval, or fine‑tuning). I’ll assume:  

1. Tokens are the unit of cost in the API.  
2. “Tool” means any external component (retrieval engine, database query, external API) that can replace a long text block.  
3. The system must decide which tool to invoke as early as possible while still answering correctly.

**Approach**  

1. **Token budget layer** – encode the user’s request and a short summary of the knowledge graph; enforce a hard token cap per call.  
2. **Progressive selector** – start with the simplest, cheapest tool (e.g., cache lookup). If it can answer within the budget, stop.  
3. **Fallback hierarchy** – if not, cascade to more expensive tools (retrieval → external API → full prompt).  
4. **Learning signal** – log whether each step succeeded; train a lightweight policy network to predict the best tool given request features.

**Depth**  

- The selector uses a *binary decision tree* where each node checks “can tool X answer within budget?” This is O(1) per node, with at most log N nodes for N tools.  
- The policy network can be a small transformer (≈ 10k params) trained on historical logs; inference cost ≈ 0.01 ms.  
- Token savings come from avoiding large prompts: if the average prompt is 200 tokens and a tool returns 50, we cut costs by ~75%.  
- Complexity: overall O(log N + T) where T is the token count of the chosen answer; space is dominated by the policy model.

**Edge Cases**  

- **Cold start** – no history for new tools → fall back to default longest prompt.  
- **Ambiguous queries** – multiple tools could satisfy; we need a tie‑breaker (confidence score).  
- **Latency trade‑off** – invoking many tools may increase round‑trip time; must set a timeout threshold.

**Optimize & Communicate**  

1. Profile token usage per tool and prune rarely used ones.  
2. Cache policy decisions for identical requests.  
3. Expose an API that logs “tool path” so we can audit cost vs accuracy.  
4. In the interview, I’d sketch the decision diagram on a whiteboard, state the key metrics (token savings, latency), and discuss how we’d iterate based on A/B tests.

This structured plan shows clear problem framing, a concrete algorithmic solution, complexity analysis, edge‑case handling, and a roadmap for production tuning—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
