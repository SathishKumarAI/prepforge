---
qid: ing_13070c9d0e__fp__local
question: 'Explain: New Threat Categories — Llm Security'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 168
output_tokens: 596
total_tokens: 764
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:46:20-05:00'
sources: []
---

### Why “New Threat Categories” Emerge in LLM Security

**Fundamental Problem:**  
A large language model (LLM) is a *probabilistic inference engine* that maps prompts \(x\) to token distributions \(P_\theta(\cdot|x)\). Its output quality hinges on the training distribution \(\mathcal{D}\). When an attacker manipulates \(x\), the model’s response deviates from its intended semantics. The core security question is: *How can adversarial input or internal state be exploited to violate confidentiality, integrity, or availability?*

**Derivation of Threats**

1. **Prompt‑Based Manipulation (Adversarial Prompting)**  
   - *Why it works:* Because the model’s objective is to maximize likelihood under \(\mathcal{D}\), any prompt that steers sampling toward a high‑probability but malicious trajectory will be followed.  
   - *Deep principle:* This is an instance of **distribution shift exploitation**: the attacker induces a controlled out‑of‑distribution query that still lies within the model’s inductive bias.

2. **Model Inversion & Extraction**  
   - *Why it works:* Repeatedly querying the model reveals enough statistical information to reconstruct training data or internal parameters (by solving an inverse problem).  
   - *Deep principle:* It is a manifestation of **information leakage via mutual information maximization** between queries and latent weights.

3. **Trigger‑Based Poisoning (Backdoors)**  
   - *Why it works:* Injecting a rare trigger token during training causes the model to associate that token with a malicious behavior, while remaining benign otherwise.  
   - *Deep principle:* This exploits the **bias–variance tradeoff**: the trigger introduces low‑variance but high‑impact bias in the loss landscape.

4. **Inference‑time Model Stealing via Side‑Channels**  
   - *Why it works:* Timing or resource usage patterns leak gradients, enabling gradient‑based reconstruction of \(\theta\).  
   - *Deep principle:* It is an application of **side‑channel cryptanalysis** to neural networks, where the model’s stochasticity becomes a signal rather than noise.

**Non‑Obvious Insight**

Most practitioners focus on input sanitization. The overlooked vector is that **LLMs are inherently statistical samplers**; any query can be treated as a *probe* into the model’s probability landscape. Designing defenses therefore requires *probability‑aware* mechanisms—e.g., entropy regularization or query‑budgeting—to limit how much an attacker can learn from a single interaction, rather than merely filtering content.

---  

*(Word count: ~195)*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
