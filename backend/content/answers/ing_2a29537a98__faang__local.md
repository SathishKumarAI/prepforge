---
qid: ing_2a29537a98__faang__local
question: 'Explain: Step 2. Start using an LLM — How Do AI Agents Work - by Neo Kim
  and Fran Soto'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 597
total_tokens: 843
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:21:24-05:00'
sources: []
---

**1️⃣ Clarify**  
You’re asking for a high‑level walkthrough of *Step 2* from “How Do AI Agents Work?”—i.e., how an LLM (Large Language Model) becomes the core component of an autonomous agent that can perceive, reason, and act. I’ll assume we’re focusing on the *inference* side: the model receives a prompt (state + instruction), outputs text (actions or sub‑tasks), and that text is then translated into real world interactions.

**2️⃣ Approach**  
Outline the flow:  
- **Input encoding** → tokenize state & task.  
- **Model inference** → transformer passes through self‑attention layers.  
- **Decoding strategy** → greedy, beam, or sampling to generate a response.  
- **Post‑processing** → parse output into actionable commands.  
- **Execution loop** → feed results back as new state and repeat.

**3️⃣ Depth (Technical Detail)**  
| Step | What happens | Complexity / Trade‑offs |
|------|--------------|------------------------|
| Tokenization | Splits text into subwords, adds special tokens for context | O(n) in input length; fast with byte‑pair encoding. |
| Embedding & Positional Encoding | Converts tokens to vectors + encodes order | O(d × n) memory; crucial for transformer attention. |
| Self‑Attention | Computes QKV and weighted sums | O(h × n²) per layer (quadratic in sequence length). |
| Feed‑Forward & LayerNorm | Adds nonlinearity, stabilizes gradients | Linear cost, but adds depth for expressiveness. |
| Decoding | Greedy picks argmax; beam keeps k best; sampling introduces stochasticity | Beam: exponential in k; sampling: lower latency but risk of incoherence. |
| Parsing | Regex/grammar to extract action + parameters | Simple but brittle; robust parsers needed for complex APIs. |

**4️⃣ Edge Cases**  
- **Out‑of‑scope tokens** → model hallucination or refusal.  
- **Long context** → quadratic blow‑up, requires chunking or sparse attention.  
- **Ambiguous output** → parser misfires, leading to incorrect actions.  
- **Safety constraints** → need guardrails (e.g., policy network) before execution.

**5️⃣ Optimize & Communicate**  
- Use *efficient transformer variants* (Longformer, Reformer) for long contexts.  
- Cache key‑value pairs across steps to avoid recomputation.  
- Add a lightweight post‑filter (rule‑based or small classifier) to catch unsafe outputs before acting.  

When explaining this to interviewers, emphasize: **clear flow, complexity trade‑offs, and safety nets**—the hallmarks of a production‑ready AI agent.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
