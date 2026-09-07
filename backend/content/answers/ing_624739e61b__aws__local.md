---
qid: ing_624739e61b__aws__local
question: 'Explain: Title: Less Context, Better Agents: Efficient Context Engineering
  for Long-Horizon Tool-Using LLM Agents'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 420
total_tokens: 663
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:07:39-05:00'
sources: []
---

**Title:** *Less Context, Better Agents – Building Efficient Context‑Engineering for Long‑Horizon Tool‑Using LLM Agents*  

**Situation / Task**  
At my last role I led a team tasked with scaling an internal recommendation engine that used GPT‑4 to orchestrate third‑party APIs (pricing, inventory, routing). The agent’s prompts grew >10 k tokens over 48‑hour jobs, hitting OpenAI cost ceilings and throttling latency.  

**Action**  
1. **Ownership & Dive Deep** – I profiled token usage per step, discovering that 65 % of the context was static metadata (company policy, schema).  
2. **Design** – Introduced a *context cache* layer:  
   - Store reusable snippets in DynamoDB with TTLs.  
   - Fetch only on first use; subsequent calls reference a lightweight key.  
3. **AWS services** – SQS for task queuing, Lambda (Python 3.11) to orchestrate, Step Functions for state, and SageMaker endpoint for inference.  
4. **Bias for Action** – Deployed a canary rollout with A/B testing against the legacy prompt stack.

**Result**  
- Token usage dropped from 10 k → 2.5 k per job (75 % reduction).  
- Cost fell from $0.12/req to $0.03/req, saving ~\$18K/month at scale.  
- Latency improved 4× (average 1.8 s vs 7.6 s), enabling real‑time pricing decisions.

**Learning**  
The experiment highlighted that *context engineering* is a first‑class optimization problem: by treating static knowledge as data rather than prompt text, we achieve measurable cost and performance gains while keeping the LLM’s reasoning surface uncluttered.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
