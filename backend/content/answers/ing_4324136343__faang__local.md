---
qid: ing_4324136343__faang__local
question: 'Explain: Things That Surprise People — Cursor (Anysphere) Interview Questions
  (2026)'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 476
total_tokens: 718
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:20:15-05:00'
sources: []
---

**Clarify**  
You’re asked to explain why the “Things That Surprise People” model (Cursor by Anysphere, 2026) behaves unexpectedly. Key assumptions: we have a pre‑trained transformer fine‑tuned on user interaction logs; we’re evaluating its surprise‑score output for unseen prompts.

**Approach**  
1. Identify the algorithmic source of “surprise.”  
2. Map that to known ML phenomena (over‑fitting, distribution shift, attention bias).  
3. Propose diagnostics and mitigations.

**Depth**  

- **Surprise Metric**: The model assigns a high surprise score when its predicted next token probability is low under the current context.  
- **Why it Surprises**:  
  - *Distribution Shift*: Training data skewed toward common phrases; rare or out‑of‑distribution inputs produce low‑probability tokens, inflating surprise.  
  - *Attention Saturation*: The transformer’s self‑attention over long contexts dilutes relevance; the model may misinterpret subtle cues, leading to improbable token predictions.  
  - *Fine‑tuning Over‑fitting*: Fine‑tuned on a narrow set of user interactions, the model memorizes frequent patterns but struggles with novel phrasing—hence high surprise on “unseen” queries.

- **Complexity**: Inference is O(L²) per token due to self‑attention; surprise computation adds negligible overhead (just a softmax probability).

**Edge Cases**  
- Extremely short inputs → insufficient context → inflated surprise.  
- Repetitive or adversarial prompts → attention collapse → false positives.  
- Highly domain‑specific jargon not in training → legitimate high surprise but user frustration.

**Optimize & Communicate**  
1. **Data Augmentation**: Inject synthetic rare patterns to reduce distribution bias.  
2. **Adaptive Attention Window**: Dynamically adjust context length to preserve signal relevance.  
3. **Calibration Layer**: Post‑process surprise scores with a temperature‑scaled softmax to smooth extremes.  

Explain that these steps keep the model’s “surprise” aligned with genuine novelty rather than artifacts, improving user trust while preserving the creative edge of Cursor.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
