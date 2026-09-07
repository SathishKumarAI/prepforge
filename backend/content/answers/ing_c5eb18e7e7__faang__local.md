---
qid: ing_c5eb18e7e7__faang__local
question: How do you decide when to stop prompt engineering and fine-tune instead?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 540
total_tokens: 777
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:21:12-05:00'
sources: []
---

**Clarify**  
We’re deciding whether to keep tweaking prompts (prompt‑engineering) or invest in a new fine‑tuned model. Key assumptions:  
1. The task is well‑defined and measurable (accuracy, latency).  
2. We have enough labeled data for fine‑tuning if needed.  
3. Prompt changes are inexpensive versus training costs.

**Approach**  
1. **Baseline** – run the current prompt on a held‑out set, record metrics.  
2. **Prompt search** – systematically vary token placement, context size, and temperature; log improvements.  
3. **Cost–benefit analysis** – compare marginal gains from prompts vs. expected gain from fine‑tuning (using historical data or pilot).  
4. **Data sufficiency check** – if labeled data < 5k examples, prompt engineering is cheaper.

**Depth**  
- If the best prompt yields > 2 % absolute improvement and the cost of iterating is trivial, stay with prompting.  
- When diminishing returns hit (< 0.5 % per tweak) or accuracy plateaus at a hard ceiling (e.g., 85 % for a 95 % target), fine‑tuning becomes attractive.  
- Fine‑tuning on a model like GPT‑3.5 requires ~ $10–$20 per 1 M tokens; with 100k labeled examples that’s ~$1k–2k, versus prompt tweaks costing minutes of dev time.

**Edge Cases**  
- *Data drift*: if the distribution changes, fine‑tuning can adapt; prompts cannot.  
- *Regulatory constraints*: fine‑tuned models may need audit trails; prompts do not.  
- *Latency*: a prompt‑only solution keeps inference cost low; fine‑tuning adds compute.

**Optimize & Communicate**  
Present the decision matrix to stakeholders:  
| Metric | Prompt Δ | Fine‑Tune Δ | Cost | Recommendation |
|--------|----------|-------------|------|----------------|
| Accuracy | +1.8 % | +4.5 % | $0 vs $2k | Fine‑tune if target >90 % |
| Latency | 20 ms | 30 ms | negligible | Prompting preferred |

Explain that we’ll iterate on prompts first, monitor plateau points, then trigger a fine‑tuning sprint only when the ROI threshold is met. This structured workflow aligns with FAANG’s emphasis on data‑driven decisions and efficient resource allocation.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
