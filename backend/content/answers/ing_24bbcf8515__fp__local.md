---
qid: ing_24bbcf8515__fp__local
question: 'Explain: Deduction Rules ​ — Models & Pricing | DeepSeek API Docs'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 174
output_tokens: 418
total_tokens: 592
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T17:23:45-05:00'
sources: []
---

**Why “Deduction Rules” exist in the DeepSeek API**

When a user sends an input, the model must decide *how much computation* it will perform.  
At its core this is a **resource‑allocation problem**: each token processed costs compute cycles and memory.  
The API abstracts that allocation into a *deduction rule*—a deterministic mapping from the request to a *quota of tokens* (the “budget”).  

1. **Cost function** – Every model has a per‑token cost \(c_i\).  
2. **Request constraints** – The user supplies `max_tokens`, `temperature`, etc.  
3. **Deduction rule** – The system solves for the minimal budget \(B\) such that, with high probability, the generated text will not exceed `max_tokens`.  

Mathematically:  
\( B = \sum_{i=1}^{n} c_i + \alpha \sqrt{n}\), where \(n=\text{max_tokens}\) and \(\alpha\) is a safety margin derived from the model’s variance.  
This guarantees that the service can pre‑allocate GPU memory and avoid mid‑generation throttling.

**Pricing layer**

Once the budget \(B\) is fixed, pricing becomes linear:  
\( \text{price} = B \times \text{unit cost}\).  
The unit cost itself reflects the underlying hardware amortized over all requests, so a larger deduction rule yields proportionally higher charges.

**Non‑obvious insight**

Most people think of token limits as hard caps. In reality they’re *probabilistic guarantees* on compute usage. The deduction rule is essentially a confidence interval for resource consumption, ensuring that the provider can offer *stable latency* while still allowing users to experiment with longer prompts. This subtle shift—from deterministic limits to stochastic budgeting—underpins both the API’s reliability and its fair‑pricing model.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
