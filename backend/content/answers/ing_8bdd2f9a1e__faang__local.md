---
qid: ing_8bdd2f9a1e__faang__local
question: 'Explain: Q59: Your LLM costs are 10x higher than expected. Walk through
  your investigation'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 517
total_tokens: 760
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:09:30-05:00'
sources: []
---

**Clarify**  
The problem: *“Your LLM’s operational cost is 10× higher than projected.”*  
Assumptions I’d confirm:  
1. The baseline budget came from a previous production run (same model, same data).  
2. Cost drivers are compute (GPU/TPU), storage, network, and licensing.  
3. No change in traffic or usage patterns has been reported.  

**Approach**  
1. **Data audit** – pull cost logs (compute hours, per‑token spend) from the last 30 days.  
2. **Baseline comparison** – align with the original forecast by normalizing for time of day and region.  
3. **Root‑cause analysis** – run a weighted regression: compute load × model size + data transfer + storage I/O.  
4. **Model inspection** – check for weight growth (e.g., new training runs), increased sequence length, or added adapters.  
5. **Operational review** – verify that autoscaling rules haven’t been overridden and that spot‑instance bidding didn’t hit a price spike.  

**Depth**  
- If the regression shows a 3× increase in GPU hours, investigate whether the model was re‑trained on larger batches (batch size ↑).  
- A sudden jump in storage I/O could indicate logging or checkpointing misconfigurations.  
- Verify that inference requests are still at the same token budget; an inadvertent policy change (e.g., from 512 to 1024 tokens) would double compute per request.  

**Edge Cases**  
- **Data drift**: if input data now contains longer prompts, the model will generate more tokens.  
- **Hardware degradation**: throttling due to cooling issues can increase power draw.  
- **Billing errors**: mis‑tagged resources leading to double‑counting.  

**Optimize & Communicate**  
After pinpointing the culprit, propose mitigation:  
* If batch size is the issue → reduce batch size or shard requests.  
* If token length increased → enforce a stricter max‑token policy and add a prompt‑length limiter.  
Explain to stakeholders that we’ll set up alerts on compute cost per request and run a quarterly health audit. This demonstrates structured problem‑solving, clear communication, and actionable depth—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
