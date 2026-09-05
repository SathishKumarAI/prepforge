---
qid: ing_407fe15054__fp__local
question: Why do we need MCP at all? Why not just hand the model an OpenAPI spec and
  let it call REST endpoints?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 184
output_tokens: 609
total_tokens: 793
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T18:21:38-05:00'
sources: []
---

**Why a Multi‑Component Pipeline (MCP) is indispensable, even when an AI has the OpenAPI spec of every REST endpoint**

1. **The fundamental problem:**  
   A language model can *describe* an API but cannot *decide* which calls to make, in what order, and with which intermediate data. That decision space is a combinatorial planning problem: the agent must choose a sequence of actions that leads from the current state (user intent + world knowledge) to the goal state (answer or side‑effect).  
   The OpenAPI spec only gives *what* can be called; it does not give *how* those calls interrelate, nor any notion of partial success, failure modes, or required preconditions.

2. **Why a single “call” is insufficient**  
   - **Contextual grounding:** A REST call is atomic and stateless from the client’s perspective, but the AI must maintain a history of inputs/outputs to reason about dependencies (e.g., you can’t book a flight before checking seat availability).  
   - **Error recovery & fallback:** If an endpoint returns an error or unexpected format, the model needs a strategy—retry, transform, or abort. A raw call cannot encapsulate that logic.  
   - **Compositionality:** Many real‑world tasks require *composing* several calls (authenticate → fetch user profile → update preferences). Without an orchestrator, the model would have to generate all calls in one shot, risking incoherence and inefficiency.

3. **Deeper principle: planning as inference**  
   The MCP turns the problem into a *probabilistic plan search*: each component is a sub‑policy that can be conditioned on current state and partial observations. This mirrors hierarchical reinforcement learning where high‑level decisions delegate to low‑level controllers. By structuring the pipeline, we reduce the effective branching factor, making inference tractable.

4. **Non‑obvious insight**  
   *The OpenAPI spec is a “syntax” for communication; the MCP is the “semantics.”* Even if every endpoint is perfectly documented, the AI still needs an internal model of causality and resource constraints to use them effectively. The pipeline provides that causal scaffold—without it, the system devolves into a brittle “copy‑paste” executor.

In short, the MCP isn’t an extra layer of bureaucracy; it’s the *bridge* between declarative API descriptions and goal‑driven reasoning, ensuring robustness, composability, and efficient inference.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
