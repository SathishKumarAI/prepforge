---
qid: ing_6049674119__faang__local
question: What is agentic RAG? — Faq
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 453
total_tokens: 685
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:27:57-05:00'
sources: []
---

**Clarify**  
The interviewer asks for a concise definition of *agentic Retrieval‑Augmented Generation (RAG)*, a variant of the standard RAG framework that adds an “agent” layer to control generation. I’ll confirm they want: 1) what makes it “agentic”, and 2) how it differs from vanilla RAG.

**Approach**  
1. Define vanilla RAG.  
2. Explain the agent component (policy, planning).  
3. Show integration points (retrieval → policy → generation).  
4. Highlight benefits (better alignment, safety, multi‑step reasoning).

**Depth**  
- *Vanilla RAG*: encoder‑decoder LLM receives a prompt plus retrieved passages; it generates an answer conditioned on both.  
- *Agentic RAG*: introduces a lightweight RL/decision‑making agent that decides:  
  - **Which documents to retrieve next** (query reformulation).  
  - **When to stop retrieving** versus directly generating.  
  - **How to structure the final output** (e.g., step‑by‑step plan).  
- The agent is trained on a curriculum of reasoning tasks, using reward signals from correctness or user feedback.  
- Architecture: Prompt → Retrieval Module → Agent Policy → LLM Decoder → Output.  
- Complexity: retrieval cost *O(N)* per hop; agent adds negligible overhead (few logits).  
- Trade‑offs: more training data needed; risk of policy drift if not regularized.

**Edge Cases**  
- Sparse or noisy corpora → agent may over‑retrieve.  
- Hallucination when the policy mis‑guides the LLM.  
- Cold start for new domains where no prior policy exists.  
Tests: ablation on policy, retrieval depth, and comparison to baseline RAG.

**Optimize & Communicate**  
Future improvements: hierarchical agents for long‑term planning; multi‑agent collaboration for complex tasks. I’ll summarize by saying agentic RAG turns a static retrieval pipeline into an adaptive, goal‑driven system that improves accuracy, safety, and user trust.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
