---
qid: ing_4bbc314335__faang__local
question: 'Explain: Q123: DeepSeek just raised V4 prices 3x to 12x and moved to peak
  and off-peak billing, while Claude Sonnet 5 made its introductory price permanent.
  Your cost model assumed cheap inference stays cheap. Rebuild it.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 276
output_tokens: 530
total_tokens: 806
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:40:28-05:00'
sources: []
---

**Clarify**

We’re asked to re‑design a cost model for two LLMs:  
- **DeepSeek V4** now charges 3×–12× higher, with *peak* vs *off‑peak* rates.  
- **Claude Sonnet 5** keeps its introductory price as the permanent rate.  
Assumptions to confirm:  
1. Inference latency and token‑per‑second (TPS) are constant across pricing tiers.  
2. Both models serve the same workload mix (prompt length, batch size).  
3. Cloud infrastructure costs scale linearly with compute time.

**Approach**

1. Define a unit cost *c* = price / (tokens × time).  
2. For DeepSeek: calculate two separate unit costs \(c_{\text{peak}}\) and \(c_{\text{off‑peak}}\).  
3. For Claude: use a single unit cost \(c_{\text{Claude}}\).  
4. Aggregate expected usage by weighting peak/off‑peak fractions (e.g., 30%/70%).  
5. Compute total cost = Σ(tokens × time × c) across all requests.

**Depth**

- *DeepSeek*:  
  \[
  C_{DS} = N_{\text{peak}}\cdot T\cdot R_{\text{peak}} + N_{\text{off}}\cdot T\cdot R_{\text{off}}
  \]
  where \(R\) is the per‑token rate (3×–12× of baseline).  
- *Claude*:  
  \[
  C_{CL} = N \cdot T \cdot R_{\text{intro}}
  \]  
- Compare \(C_{DS}\) vs \(C_{CL}\) for a given workload.  
- Complexity: O(1) per request; total cost linear in requests.

**Edge Cases**

- Sudden spike in peak usage → DeepSeek cost jumps sharply.  
- Mixed token lengths could bias unit cost if latency varies with size.  
- If Claude’s price increases later, model must recompute \(R_{\text{intro}}\).

**Optimize & Communicate**

- Introduce a *dynamic weighting* factor for peak/off‑peak based on real traffic histograms.  
- Cache computed unit costs to avoid per‑request calculation overhead.  
- Present the model as a simple spreadsheet formula or microservice exposing cost APIs, ensuring interviewers see clean reasoning and practical implementation steps.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
