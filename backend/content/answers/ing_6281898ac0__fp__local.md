---
qid: ing_6281898ac0__fp__local
question: 'Explain: Skills Over MCP Working Group - August 25th 2026 Meeting Notes'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 177
output_tokens: 485
total_tokens: 662
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T19:34:47-05:00'
sources: []
---

**Skills Over MCP – August 25 2026 Working‑Group Minutes**

The group convened to resolve a *representation bottleneck*: modern ML pipelines still hand‑craft feature extraction before feeding models, creating a gap between raw data and learned representations. The proposed **“Skills Over Model‑Centric Pipeline” (MCP)** framework re‑frames this as an *optimization problem* over *skill graphs*—directed acyclic graphs where nodes are reusable processing modules (e.g., tokenizers, attention blocks) and edges encode data flow.

1. **Formalisation** – Each skill is a stochastic mapping \(s_i: \mathcal{X}_i \rightarrow \mathcal{Y}_i\). The pipeline objective becomes  
   \[
   \min_{\mathbf{s}}\;\mathbb{E}_{x}\!\left[\ell\bigl(g(\mathbf{s}(x)), y\bigr)\right]
   \]
   where \(g\) is the final predictor and \(\ell\) a loss. This casts skill selection as *structured prediction*.

2. **Why it must work** – By treating skills as modular, we enforce *information bottleneck* constraints: each skill compresses input while preserving predictive relevance. The DAG guarantees acyclicity, ensuring well‑defined backpropagation and avoiding infinite loops.

3. **Deeper insight** – The non‑obvious benefit is *cross‑domain transferability*: skills learned on one dataset can be recomposed for another without retraining from scratch, because the optimization decouples skill parameters from task loss. This mirrors *meta‑learning* but at a graph level, allowing rapid adaptation.

4. **Action items** –  
   - Implement a prototype compiler that auto‑generates DAGs from high‑level specifications.  
   - Benchmark against end‑to‑end models on the ImageNet‑V2 and WMT‑2025 tasks.  
   - Publish a white paper on “Skill Graphs as a New Layer of Abstraction” by Q1 2027.

The group agreed to adopt the MCP formalism, emphasizing modularity, interpretability, and transfer learning as the core virtues of future ML systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
